<template>
  <div :class="inputClasses" :id="_uid">
    <div :class="inputFieldClasses">
      <slot name="prefix">
        <div v-if="prefix" class="prefix">
          <svg-icon :class="prefixClasses" v-if="preLoading" icon-class="circle-notch"></svg-icon>
          <svg-icon :class="prefixClasses" v-else :icon-class="prefix"></svg-icon>
        </div>
      </slot>
      <input
        :placeholder="placeholder"
        @input="inputHandler"
        v-model.trim="inputed"
        :disabled="disabled"
        @focusin="focusHandler"
        @focusout="blurHandler"
        :type="type !== 'text' && type !== 'password' ? 'text' : `${type}`"
      />
      <slot name="suffix">
        <div v-if="suffix" class="suffix">
          <svg-icon :class="suffixClasses" v-if="sufLoading" icon-class="circle-notch"></svg-icon>
          <svg-icon :class="suffixClasses" v-else :icon-class="suffix"></svg-icon>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Input`,
  mixins: [emitter],
  /*eslint-enable*/
  model: {
    prop: 'context',
    event: 'input',
  },
  props: {
    validateEvent: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    context: {
      type: String,
      default: '',
    },
    /*eslint-disable*/
    prefix: {
      type: [String, Boolean],
    },
    suffix: {
      type: [String, Boolean],
    },
    /*eslint-disable*/
    preLoading: {
      type: Boolean,
      default: false,
    },
    sufLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  data() {
    return {
      inputFieldClassArr: [],
      labelClassArr: [],
      inputClassArr: [],
      prefixClassArr: [],
      suffixClassArr: [],
      inputed: '',
    };
  },

  computed: {
    inputFieldClasses() {
      return this.inputFieldClassArr;
    },

    labelClasses() {
      return this.labelClassArr;
    },

    inputClasses() {
      return this.inputClassArr;
    },

    prefixClasses() {
      return this.prefixClassArr;
    },

    suffixClasses() {
      return this.suffixClassArr;
    },
  },

  watch: {
    sufLoading: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.suffixClassArr.push(`${ns}-loading`);
        } else {
          this.suffixClassArr.pop();
        }
        /* eslint-enable */
      },
    },

    preLoading: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.prefixClassArr.push(`${ns}-loading`);
        } else {
          this.prefixClassArr.pop();
        }
        /* eslint-enable */
      },
    },

    disabled: {
      handler(val) {
        /* eslint-disable */
        if (val && !this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.add(`${ns}-disabled`);
        }
        if (!val && this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.remove(`${ns}-disabled`);
        }
        /* eslint-enable */
      },
    },

    context: {
      immediate: true,
      handler(val) {
        this.inputed = val;
      },
    },
  },

  created() {
    this.initClasses();
  },

  methods: {
    focusHandler() {
      this.$el.classList.add('focus');
    },
    blurHandler() {
      this.$el.classList.remove('focus');
    },

    initClasses() {
      /* eslint-disable */
      this.inputFieldClassArr.push(`${ns}-input-field`);
      this.inputClassArr.push(`${ns}-input`);
      this.labelClassArr.push(`${ns}-label`);
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.prefix) {
        this.prefixClassArr.push(`${ns}-prefix`);
      }
      if (this.preLoading) {
        this.prefixClassArr.push(`${ns}-loading`);
      }
      if (this.sufLoading) {
        this.suffixClassArr.push(`${ns}-loading`);
      }
      if (this.disabled) {
        this.inputClassArr.push(`${ns}-disabled`);
      }
      /* eslint-enable */
      this.inputed = this.context;
    },

    inputHandler($event) {
      // this.$emit('input', $event.target.value);
      // if (this.validateEvent) {
      //   this.dispatch('C4itFormItem', 'c4it.form.change', [
      //     $event.target.value
      //   ]);
      // }
    },
  },
};
</script>
