<template>
  <div :class="computedClassContainer()">
    <label-wrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'"
    >
      <label
        :for="labelFor"
        :style="labelStyle"
        v-if="label || $slots.label"
        :class="computedClassLabel()"
      >
        <slot name="label">{{ label + form.labelSuffix }}</slot>
      </label>
    </label-wrap>
    <div :style="contentStyle" class="c4it-form-item__content">
      <slot></slot>
      <transition name="c4it-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          :error="validateMessage"
          name="error"
        >
          <div
            :class="{
              'c4it-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : (c4itForm && c4itForm.inlineMessage) || false,
            }"
            class="c4it-form-item__error"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator';
import emitter from '@/mixins/emitter';
import objectAssign from '@/utils/merge';
import { noop, getPropByPath } from '@/utils/util';
import LabelWrap from '@/components/LabelWrap/Index.vue';
/*eslint-disable*/
export default {
  name: 'C4itFormItem',

  componentName: 'C4itFormItem',
  components: {
    // use this component to calculate auto width
    LabelWrap,
  },

  mixins: [emitter],

  provide() {
    return {
      c4itFormItem: this,
    };
  },

  inject: ['c4itForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: '',
    };
  },
  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    labelStyle() {
      const ret = {};
      if (this.form.labelPosition === 'top') return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle() {
      const ret = {};
      const label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.c4itForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while (parentName !== 'C4itForm') {
        if (parentName === 'C4itFormItem') {
          /*eslint-disable*/
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      return getPropByPath(model, path, true).v;
    },
    isRequired() {
      let rules = this.getRules();
      let isRequired = false;

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize() {
      return this.c4itForm.size;
    },
    c4itFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass() {
      return this.c4itFormItemSize || undefined;
    },
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      },
    },
    validateStatus(value) {
      this.validateState = value;
    },
  },
  mounted() {
    if (this.prop) {
      this.dispatch('C4itForm', 'c4it.form.addField', [this]);

      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
      });

      this.addValidateEvents();
    }
  },
  beforeDestroy() {
    this.dispatch('C4itForm', 'c4it.form.removeField', [this]);
  },
  methods: {
    computedClassLabel() {
      /*eslint-disable*/

      return `${ns}-form-item__label`;
    },
    computedClassContainer() {
      const objClass = {
        'is-error': this.validateState === 'error',
        'is-validating': this.validateState === 'validating',
        'is-success': this.validateState === 'success',
        'is-required': this.isRequired || this.required,
        'is-no-asterisk': this.c4itForm && this.c4itForm.hideRequiredAsterisk,
      };
      /*eslint-disable*/
      (objClass[`${ns}-form-item-no-label-width`] =
        this.form.labelPosition === 'top' || !(this.labelWidth || this.form.labelWidth)),
        (objClass[`${ns}-form-item--feedback`] = this.c4itForm && this.c4itForm.statusIcon);
      return [
        objClass,
        this.sizeClass ? `${ns}-form-item--${this.sizeClass}` : '',
        `${ns}-form-item`,
      ];
    },
    validate(trigger, callback = noop) {
      this.validateDisabled = false;
      const rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }
      console.log(111111);
      this.validateState = 'validating';

      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      const model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        console.log(errors);
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';

        callback(this.validateMessage, invalidFields);
        this.c4itForm &&
          this.c4itForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
      });
    },
    clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';

      let model = this.form.model;
      let value = this.fieldValue;
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      let prop = getPropByPath(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(() => {
        this.validateDisabled = false;
      });

      // this.broadcast('C4itTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      const prop = getPropByPath(formRules, this.prop || '');
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();

      return rules
        .filter((rule) => {
          if (!rule.trigger || trigger === '') return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        })
        .map((rule) => objectAssign({}, rule));
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }

      this.validate('change');
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : '';
    },
    addValidateEvents() {
      const rules = this.getRules();

      if (rules.length || this.required !== undefined) {
        this.$on('c4it.form.blur', this.onFieldBlur);
        this.$on('c4it.form.change', this.onFieldChange);
      }
    },
    removeValidateEvents() {
      this.$off();
    },
  },
};
</script>
