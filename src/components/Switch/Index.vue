<template>
  <div :class="switchClasses">
    <input
      :id="_uid"
      :checked="checked"
      @change="change"
      :disabled="disabled"
      type="checkbox"
    />
    <label :for="_uid">
      <div class="inner">
        <span class="off-text">{{ offText }}</span>
        <div :class="checkClasses"></div>
        <span class="on-text">{{ onText }}</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Switch`,
  /*eslint-enable*/
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String,
      default: ''
    },
    offText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      switchClassArr: [],
      checkClassArr: [],
      spanElms: null,
      checkElm: null,
      switchLabelElmHeight: null
    };
  },

  computed: {
    switchClasses() {
      return this.switchClassArr;
    },
    checkClasses() {
      return this.checkClassArr;
    }
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
      }
    },
    checked: {
      handler(val) {
        if (val) {
          this.spanElms[0].style.display = 'block';
          this.spanElms[1].style.display = 'none';
          this.spanElms[0].style.flex = '1';
        } else {
          this.spanElms[0].style.display = 'none';
          this.spanElms[1].style.display = 'block';
          this.spanElms[1].style.flex = '1';
        }
      }
    }
  },

  created() {
    this.initClasses();
  },

  mounted() {
    const switchLabelElm = this.$el.querySelector('label');
    const switchInnerElm = switchLabelElm.querySelector('.inner');
    this.switchLabelElmHeight = switchLabelElm.clientHeight;
    this.spanElms = switchLabelElm.querySelectorAll('span');
    /* eslint-disable */
    this.checkElm = switchLabelElm.querySelector(`.${ns}-check`);
    /* eslint-enable */
    if (this.onText || this.offText) {
      const maxWidth = Math.max(
        ...Array.from(this.spanElms).map(spanElm => {
          return spanElm.offsetWidth;
        })
      );
      const sliderWidth = this.checkElm.clientWidth;
      switchLabelElm.style.width = `${8 * 3 + maxWidth + sliderWidth}px`;
      switchInnerElm.style.width = '100%';
      if (this.checked) {
        this.spanElms[0].style.display = 'block';
        this.spanElms[0].style.flex = '1';
        this.spanElms[1].style.display = 'none';
      } else {
        this.spanElms[0].style.display = 'none';
        this.spanElms[1].style.display = 'block';
        this.spanElms[1].style.flex = '1';
      }
    } else {
      switchLabelElm.style.width = '46px';
      switchInnerElm.style.width = '100%';
    }
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.switchClassArr.push(`${ns}-switch`);
      this.checkClassArr.push(`${ns}-check`);
      if (this.disabled) {
        this.switchClassArr.push(`${ns}-disabled`);
      }
      if (this.onText || this.offText) {
        this.switchClassArr.push(`${ns}-hasText`);
      }
      /* eslint-enable */
    },

    change($event) {
      this.$emit('change', $event.target.checked);
    }
  }
};
</script>
