<template>
  <div :class="datetimeRangePickerClasses" :id="_uid">
    <c4it-datetimepicker
      v-model="input11"
      @focusin="focusHandler"
      @focusout="blurHandler"
      :placeholder="placeholder[0]"
      :disabled="disabled"
      suffix="to"
    />
    <c4it-datetimepicker
      v-model="input12"
      @focusin="focusHandler"
      @focusout="blurHandler"
      :suffix="suffix"
      :placeholder="placeholder[1]"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import c4itDatetimepicker from '@/components/DatetimePicker/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Datetimerangepicker`,
  /*eslint-enable*/
  components: {
    c4itDatetimepicker,
  },
  props: {
    suffix: {
      type: String,
      default: '',
    },
    placeholder: {
      type: Array,
      default: () => {
        return ['开始日期', '结束日期'];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input11: '',
      input12: '',
      datetimeRangePickerClassArr: [],
    };
  },

  computed: {
    datetimeRangePickerClasses() {
      return this.datetimeRangePickerClassArr;
    },
  },

  watch: {
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
      /*eslint-disable*/
      this.datetimeRangePickerClassArr.push(`${ns}-datetimerangepicker`);
      if (this.disabled) {
        this.datetimeRangePickerClassArr.push(`${ns}-disabled`);
      }
      /*eslint-enable*/
    },
  },
};
</script>
