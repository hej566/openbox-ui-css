<template>
  <div :class="checkboxClasses" tabindex="0">
    <input
      :checked="checked"
      @click.stop="clickHandler"
      :id="_uid"
      :data-value="value"
      :data-label="label"
      :disabled="disabled"
      type="checkbox"
    />
    <label :for="_uid">
      <div :class="labelCheckClasses">
        <svg-icon :class="checkedClasses" icon-class="check"></svg-icon>
        <svg-icon :class="indeterminateClasses" icon-class="minus"></svg-icon>
      </div>
      <div :class="labelClasses">
        <slot>{{ label }}</slot>
      </div>
    </label>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Checkbox`,
  /*eslint-enable*/
  mixins: [emitter],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    aria: {
      type: Boolean,
      default: true
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkboxClassArr: [],
      labelCheckClassArr: [],
      checkedClassArr: [],
      indeterminateClassArr: [],
      labelClassArr: []
    };
  },

  computed: {
    checkboxClasses() {
      return this.checkboxClassArr;
    },
    labelCheckClasses() {
      return this.labelCheckClassArr;
    },
    checkedClasses() {
      return this.checkedClassArr;
    },
    indeterminateClasses() {
      return this.indeterminateClassArr;
    },
    labelClasses() {
      return this.labelClassArr;
    }
  },

  watch: {
    indeterminate: {
      handler(val) {
        if (val) {
          document.getElementById(this._uid).indeterminate = true;
          document.getElementById(this._uid).checked = false;
        } else {
          document.getElementById(this._uid).indeterminate = false;
          if (this.checked) {
            document.getElementById(this._uid).checked = true;
          } else {
            document.getElementById(this._uid).checked = false;
          }
        }
      }
    },
    disabled: {
      handler(val) {
        /* eslint-disable */
        if (val && this.$el.classList && !this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.add(`${ns}-disabled`);
        } 
        if (!val && this.$el.classList && this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.remove(`${ns}-disabled`);
        }
        /* eslint-enable */
      }
    }
  },

  created() {
    this.initClasses();
  },

  mounted() {
    if (this.indeterminate) {
      document.getElementById(this._uid).indeterminate = true;
      document.getElementById(this._uid).checked = false;
    } else {
      document.getElementById(this._uid).indeterminate = false;
      if (this.checked) {
        document.getElementById(this._uid).checked = true;
      } else {
        document.getElementById(this._uid).checked = false;
      }
    }
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.checkboxClassArr.push(`${ns}-checkbox`);
      this.labelCheckClassArr.push(`${ns}-check`);
      this.checkedClassArr.push(`${ns}-checked`);
      this.indeterminateClassArr.push(`${ns}-indeterminate`);
      this.labelClassArr.push(`${ns}-label`);
      if (this.aria) {
        this.labelCheckClassArr.push(`${ns}-aria`);
      }
      if (this.disabled) {
        this.checkboxClassArr.push(`${ns}-disabled`);
      }
      if (this.shape) {
        this.checkboxClassArr.push(`${ns}-${this.shape}`)
      } else {
        this.checkboxClassArr.push(`${ns}-default`)
      }
      /* eslint-enable */
    },

    clickHandler($event) {
      // console.log($event);
      this.$emit('change', $event.target.checked);
      // this.dispatch('C4itFormItem', 'c4it.form.change', $event.target.checked);
    }
  }
};
</script>
