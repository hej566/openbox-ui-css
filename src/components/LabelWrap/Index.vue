<script>
export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },

  inject: ['c4itForm', 'c4itFormItem'],

  data() {
    return {
      computedWidth: 0,
    };
  },
  watch: {
    computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.c4itForm.registerLabelWidth(val, oldVal);
        this.c4itFormItem.updateComputedLabelWidth(val);
      }
    },
  },

  mounted() {
    this.updateLabelWidth('update');
  },

  updated() {
    this.updateLabelWidth('update');
  },

  beforeDestroy() {
    this.updateLabelWidth('remove');
  },

  methods: {
    getLabelWidth() {
      if (this.$el && this.$el.firstElementChild) {
        const computedWidth = window.getComputedStyle(this.$el.firstElementChild).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
    updateLabelWidth(action = 'update') {
      if (this.$slots.default && this.isAutoWidth && this.$el.firstElementChild) {
        if (action === 'update') {
          this.computedWidth = this.getLabelWidth();
        } else if (action === 'remove') {
          this.elForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    },
  },
  render(createElement) {
    const slots = this.$slots.default;
    if (!slots) return null;
    if (this.isAutoWidth) {
      const autoLabelWidth = this.c4itForm.autoLabelWidth;
      const style = {};
      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px';
        }
      }
      /*eslint-disable*/
      return createElement(
        'div', // 标签名称
        {
          style,
          class: `${ns}-form-item__label-wrap`,
        },
        slots // 子节点数组
      );
      /*eslint-enable*/
    } else {
      return slots[0];
    }
  },
};
</script>
