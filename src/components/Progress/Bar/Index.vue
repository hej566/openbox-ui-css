<template>
  <div :class="progressClassList" :aria-valuenow="value">
    <div class="progress-bar">
      <div class="progress-bg"></div>
      <div class="progress-fg"></div>
    </div>
    <span :class="labelClassList">{{ label }}</span>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}ProgressBar`,
  /*eslint-enable*/
  props: {
    max: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    color: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: 'bottom-start',
    },
  },
  data() {
    return {
      progressClassArr: [],
      labelClassArr: [],
      progress: 0,
    };
  },

  computed: {
    progressClassList() {
      return this.progressClassArr;
    },
    labelClassList() {
      return this.labelClassArr;
    },
  },

  watch: {
    value: {
      immediate: false,
      handler(val) {
        this.computeProgress();
      },
    },
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      /* eslint-disable */
      this.progressClassArr.push(`${ns}-progress-bar`);
      this.labelClassArr.push(`label`);
      if (this.position) {
        this.labelClassArr.push(`${this.position}`);
      }
      /* eslint-enable */
      this.computeProgress();
    },

    computeProgress() {
      const progressElm = this.$el;
      const progressBgElm = progressElm.children[0].children[0];
      const progressFgElm = progressElm.children[0].children[1];
      progressBgElm.style['backgroundColor'] = `${this.color}`;
      progressFgElm.style['backgroundColor'] = `${this.color}`;
      progressBgElm.style['opacity'] = '0.2';
      if (this.max === 0) {
        const intervalId = setInterval(() => {
          this.progress += 1;
          progressFgElm.style['width'] = `${this.progress}%`;
          if (this.progress == 100) {
            clearInterval(intervalId);
          }
        }, 100);
      } else {
        const percentage = (this.value / this.max) * 100;
        progressFgElm.style['width'] = `${percentage}%`;
      }
    },
  },
};
</script>
