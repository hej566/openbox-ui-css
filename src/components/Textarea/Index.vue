<template>
  <div :class="inputFieldClassList">
    <textarea
      :class="inputClassList"
      :placeholder="placeholder"
      @input="inputHandler"
      v-model.trim="inputed"
      :disabled="disabled"
      @blur="handleBlur"
      :rows="4"
    />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Textarea`,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
  },

  data() {
    return {
      inputFieldClassArr: [],
      inputClassArr: [],
      inputed: '',
    };
  },

  computed: {
    inputFieldClassList() {
      return this.inputFieldClassArr;
    },
    inputClassList() {
      return this.inputClassArr;
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

    context: {
      immediate: true,
      handler(val) {
        this.inputed = val;
      },
    },
  },

  created() {
    this.init();
  },

  methods: {
    handleBlur(event) {
      // this.focused = false;
      // this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('C4itFormItem', 'c4it.form.blur', [this.inputed]);
      }
    },
    init() {
      /* eslint-disable */
      this.inputFieldClassArr.push(`${ns}-textarea-field`);
      this.inputClassArr.push(`${ns}-textarea`);
      if (this.disabled) {
        this.inputFieldClassArr.push(`${ns}-disabled`);
      }
      /* eslint-enable */
      this.inputed = this.context;
    },

    inputHandler($event) {
      this.$emit('input', $event.target.value);
      if (this.validateEvent) {
        this.dispatch('C4itFormItem', 'c4it.form.change', [$event.target.value]);
      }
    },
  },
};
</script>
