<template>
  <div :class="scrollbarClassList" :id="_uid">
    <div
      :class="wrapperClassList"
      @scroll.passive="scrollWrapperHandler"
      @mouseenter.self="mouseenterWrapperHandler"
      @mouseleave="mouseleaveWrapperHandler"
      @transitionend="transitionendWrapperHandler"
    >
      <slot></slot>
    </div>

    <div :class="barClassList">
      <div
        :class="thumbClassList"
        @mousedown.prevent="mousedownThumbHandler"
        @mouseup.prevent="mouseupThumbHandler"
        @mouseleave="mouseleaveThumbHandler"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Scrollbar`,
  /*eslint-enable*/
  props: {
    height: {
      type: Number,
      default: 0,
    },

    isVertical: {
      type: Boolean,
      default: false,
    },

    width: {
      type: Number,
      default: 0,
    },

    isHorizontal: {
      type: Boolean,
      default: false,
    },

    throttle: {
      type: Number,
      default: 3000,
    },

    useThrottle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollbarClassArr: [],
      barClassArr: [],
      thumbClassArr: [],
      wrapperClassArr: [],
      lastPageY: 0,
      lastPageX: 0,
      scrollbarElm: null,
      thumbElm: null,
      wrapperElm: null,
      barElm: null,
      totalScrollHeight: 0,
      totalScrollWidth: 0,
      clientHeight: 0,
      clientWidth: 0,
      scrollRatio: 0,
      dragStartY: 0,
      dragStartX: 0,
      scrollTop: 0,
      scrollLeft: 0,
      raf: null,
      timer: null,
    };
  },

  computed: {
    scrollbarClassList() {
      return this.scrollbarClassArr;
    },
    barClassList() {
      return this.barClassArr;
    },
    thumbClassList() {
      return this.thumbClassArr;
    },
    wrapperClassList() {
      return this.wrapperClassArr;
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.scrollbarElm = this.$el;
    /* eslint-disable */
    this.wrapperElm = this.$el.children[0];
    /* eslint-enable */
    if (this.height) {
      this.scrollbarElm.style.height = `${this.height}px`;
    }
    if (this.width) {
      this.scrollbarElm.style.maxWidth = `${this.width}px`;
    }
  },

  methods: {
    init() {
      /* eslint-disable */
      this.scrollbarClassArr.push(`${ns}-scrollbar`);
      this.barClassArr.push(`${ns}-scrollbar-bar`);
      this.thumbClassArr.push(`${ns}-scrollbar-thumb`);
      this.wrapperClassArr.push(`${ns}-scrollbar-wrapper`);
      /* eslint-enable */
      if (this.isVertical) {
        this.scrollbarClassArr.push(`is-vertical`);
      }
      if (this.isHorizontal) {
        this.scrollbarClassArr.push(`is-horizontal`);
      }
    },

    mouseleaveThumbHandler() {
      /* eslint-disable */
      if (this.thumbElm) {
        this.thumbElm.classList.remove(`${ns}-grabbed`);
        this.thumbElm.removeEventListener('mousemove', this.drag);
      }
      this.wrapperElm.classList.remove(`${ns}-grabbed`);
      /* eslint-enable */
    },

    mousedownThumbHandler($event) {
      this.lastPageY = $event.pageY;
      /* eslint-disable */
      if (this.thumbElm) {
        this.thumbElm.classList.add(`${ns}-grabbed`);
        this.thumbElm.addEventListener('mousemove', this.drag);
      }

      this.wrapperElm.classList.add(`${ns}-grabbed`);
      /* eslint-enable */
    },

    mouseupThumbHandler($event) {
      /* eslint-disable */
      if (this.thumbElm) {
        this.thumbElm.classList.remove(`${ns}-grabbed`);
        this.thumbElm.removeEventListener('mousemove', this.drag);
      }
      this.wrapperElm.classList.remove(`${ns}-grabbed`);
      /* eslint-enable */
    },

    scrollWrapperHandler($event) {
      if (this.isVertical) {
        let top = `${Math.floor(
          (this.wrapperElm.scrollTop * this.offsetHeight) / this.scrollHeight
        )}px`;
        if (this.thumbElm) {
          this.thumbElm.style.transform = `translate(0, ${top})`;
        }
        this.scrollTop = this.wrapperElm.scrollTop;
      }

      if (this.isHorizontal) {
        let left = `${Math.floor(
          (this.wrapperElm.scrollLeft * this.offsetWidth) / this.scrollWidth
        )}px`;
        if (this.thumbElm) {
          this.thumbElm.style.transform = `translate(${left}, 0)`;
        }

        this.scrollLeft = this.wrapperElm.scrollLeft;
      }

      if (this.useThrottle) {
        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.timer = null;
            this.$emit('exec');
          }, this.throttle);
        }
      }
    },

    transitionendWrapperHandler($event) {
      if ($event.propertyName === 'max-height') {
        let closeElms = $event.currentTarget.querySelectorAll(`.close`);
        if (closeElms) {
          closeElms.forEach((element) => {
            if (
              element.nextElementSibling &&
              element.nextElementSibling.style.display === 'block'
            ) {
              element.nextElementSibling.style.display = 'none';
            }
          });
        }
      }

      this.computeThumb($event);
    },

    computeThumb($event) {
      if (this.isVertical && this.thumbElm) {
        this.scrollHeight = $event.currentTarget.scrollHeight;
        this.offsetHeight = $event.currentTarget.offsetHeight;
        this.scrollRatio = this.offsetHeight / this.scrollHeight;
        if (this.scrollRatio < 1) {
          this.thumbElm.style.cssText = `height:${this.scrollRatio * 100}%;`;
          let top = `${Math.floor((this.scrollTop * this.offsetHeight) / this.scrollHeight)}px`;
          this.thumbElm.style.transform = `translate(0, ${top})`;
        } else {
          this.thumbElm.style.cssText = `opacity: 0`;
        }
      }

      if (this.isHorizontal && this.thumbElm) {
        this.scrollWidth = $event.currentTarget.scrollWidth;
        this.offsetWidth = $event.currentTarget.offsetWidth;
        this.scrollRatio = this.offsetWidth / this.scrollWidth;
        if (this.scrollRatio < 1) {
          this.thumbElm.style.cssText = `width:${this.scrollRatio * 100}%;`;
          let left = `${Math.floor((this.scrollLeft * this.offsetWidth) / this.scrollWidth)}px`;
          this.thumbElm.style.transform = `translate(${left}, 0)`;
        } else {
          this.thumbElm.style.cssText = `opacity: 0`;
        }
      }
    },

    mouseenterWrapperHandler($event) {
      if (this.isVertical) {
        this.scrollHeight = $event.target.scrollHeight;
        this.offsetHeight = $event.target.offsetHeight;
        this.scrollRatio = this.offsetHeight / this.scrollHeight;
        this.thumbElm = $event.target.nextElementSibling.firstChild;
        if (this.scrollRatio < 1) {
          this.thumbElm.style.cssText = `height:${this.scrollRatio * 100}%;`;
          let top = `${Math.floor((this.scrollTop * this.offsetHeight) / this.scrollHeight)}px`;
          this.thumbElm.style.transform = `translate(0, ${top})`;
        } else {
          this.thumbElm.style.cssText = `opacity: 0`;
        }
      }

      if (this.isHorizontal) {
        this.scrollWidth = $event.target.scrollWidth;
        this.offsetWidth = $event.target.offsetWidth;
        this.scrollRatio = this.offsetWidth / this.scrollWidth;
        this.thumbElm = $event.target.nextElementSibling.firstChild;
        if (this.scrollRatio < 1) {
          this.thumbElm.style.cssText = `width:${this.scrollRatio * 100}%;`;
          let left = `${Math.floor((this.scrollLeft * this.offsetWidth) / this.scrollWidth)}px`;
          this.thumbElm.style.transform = `translate(${left}, 0)`;
        } else {
          this.thumbElm.style.cssText = `opacity: 0`;
        }
      }
    },

    mouseleaveWrapperHandler() {
      if (this.isVertical) {
        this.scrollTop = this.wrapperElm.scrollTop;
      }
      if (this.isHorizontal) {
        this.scrollLeft = this.wrapperElm.scrollLeft;
      }
    },

    drag($event) {
      if (this.isVertical) {
        let delta = 0.9 * ($event.pageY - this.lastPageY);
        this.lastPageY = $event.pageY;
        this.wrapperElm.scrollTop += delta / this.scrollRatio;
      }

      if (this.isHorizontal) {
        let delta = 0.9 * ($event.pageX - this.lastPageX);
        this.lastPageX = $event.pageX;
        this.wrapperElm.scrollLeft += delta / this.scrollRatio;
      }
    },
  },
};
</script>
