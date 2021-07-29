<template>
  <div
    :style="{ height: radius * 2 + 'px', width: radius * 2 + 'px' }"
    class="progress-circle-wrapper"
  >
    <svg :height="radius * 2" :width="radius * 2" :class="progressClassList">
      <circle
        :stroke-dasharray="circumference"
        :class="circleBgClassList"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
      <circle
        :stroke-dasharray="circumference"
        :class="circleFgClassList"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
    <div :class="textClassList">
      <span>{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}ProgressCircle`,
  /*eslint-enable*/
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    radius: {
      type: Number,
      default: 0,
    },
    stroke: {
      type: Number,
      default: 0,
    },
  },

  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    return {
      normalizedRadius,
      circumference,
      progressClassArr: [],
      circleFgClassArr: [],
      circleBgClassArr: [],
      textClassArr: [],
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    },
    progressClassList() {
      return this.progressClassArr;
    },
    circleFgClassList() {
      return this.circleFgClassArr;
    },
    circleBgClassList() {
      return this.circleBgClassArr;
    },
    textClassList() {
      return this.textClassArr;
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      /* eslint-disable */
      this.progressClassArr.push(`${ns}-progress-circle`);
      this.circleFgClassArr.push(`${ns}-circle-fg`);
      this.circleBgClassArr.push(`${ns}-circle-bg`);
      this.textClassArr.push(`${ns}-progress-circle-text`);
      /* eslint-enable */
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-circle-wrapper {
  position: relative;
}
</style>
