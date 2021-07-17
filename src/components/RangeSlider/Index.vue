<template>
  <div :class="rangeSliderClassList">
    <div :class="rangeFillClassList" :id="`${_uid}-fill`"></div>
    <input
      :class="rangeClassList"
      :id="_uid"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      @change="change"
      type="range"
    />
    <!-- <label :class="rangeValueClassList" :for="_uid">{{ rangeValue }}</label> -->
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}RangeSlider`,
  /*eslint-enable*/
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      rangeClassArr: [],
      rangeSliderClassArr: [],
      rangeValueClassArr: [],
      rangeFillClassArr: [],
      rangeSliderElem: null,
      rangeSliderFillElem: null
    };
  },

  computed: {
    rangeClassList() {
      return this.rangeClassArr;
    },

    rangeSliderClassList() {
      return this.rangeSliderClassArr;
    },

    rangeValueClassList() {
      return this.rangeValueClassArr;
    },

    rangeFillClassList() {
      return this.rangeFillClassArr;
    }
  },

  created() {
    this.initClass();
  },

  mounted() {
    this.rangeSliderElem = document.getElementById(this._uid);
    this.rangeSliderFillElem = document.getElementById(`${this._uid}-fill`);
    this.rangeSliderElem.addEventListener('input', this.rangeHandler);
    this.rangeSliderFillElem.addEventListener('click', this.rangeFillHandler);
    this.initRange();
  },

  beforeDestroy() {
    this.rangeSliderElem.removeEventListener('input', this.rangeHandler);
    this.rangeSliderFillElem.removeEventListener(
      'click',
      this.rangeFillHandler
    );
  },

  methods: {
    initClass() {
      /* eslint-disable */
      this.rangeSliderClassArr.push(`${ns}-range-slider`);
      this.rangeValueClassArr.push(`${ns}-value`);
      this.rangeClassArr.push(`${ns}-range`);
      this.rangeFillClassArr.push(`${ns}-range-fill`)
      /* eslint-enable */
    },

    initRange() {
      const filledWidth =
        (Number(this.value) * Number(this.rangeSliderElem.clientWidth)) /
        Number(this.rangeSliderElem.max);
      document.getElementById(
        `${this._uid}-fill`
      ).style.width = `${filledWidth}px`;
    },

    rangeHandler($event) {
      const filledWidth =
        (Number($event.target.value) * Number($event.target.clientWidth)) /
        Number($event.target.max);
      document.getElementById(
        `${this._uid}-fill`
      ).style.width = `${filledWidth}px`;
    },

    rangeFillHandler($event) {
      console.log($event);
    },

    change($event) {
      this.$emit('change', Number($event.target.value));
    }
  }
};
</script>
