<template>
  <div :class="radioClasses" tabindex="0">
    <input
      :id="_uid"
      :name="name"
      :value="value"
      :checked="checked"
      @change="change"
      :disabled="disabled"
      type="radio"
    />
    <label :for="_uid">
      <div :class="checkClasses"></div>
      <div :class="labelClasses">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Radio`,
  /*eslint-enable*/
  mixins: [emitter],

  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    aria: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      radioClassArr: [],
      checkClassArr: [],
      labelClassArr: [],
    };
  },

  computed: {
    radioClasses() {
      return this.radioClassArr;
    },
    checkClasses() {
      return this.checkClassArr;
    },
    labelClasses() {
      return this.labelClassArr;
    },
  },

  watch: {
    disabled: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.$el.classList.add(`${ns}-disabled`);
        } else {
          this.$el.classList.remove(`${ns}-disabled`);
        }
        /* eslint-enable */
      },
    },
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.radioClassArr.push(`${ns}-radio`);
      this.checkClassArr.push(`${ns}-check`);
      this.labelClassArr.push(`${ns}-label`);
      if (this.disabled) {
        this.radioClassArr.push(`${ns}-disabled`);
      }
      if (this.aria) {
        this.checkClassArr.push(`${ns}-aria`);
      }
      /* eslint-enable */
    },

    change($event) {
      this.$emit('change', $event.target.checked);
      this.dispatch('C4itFormItem', 'c4it.form.change', $event.target.checked);
    },
  },
};
</script>
