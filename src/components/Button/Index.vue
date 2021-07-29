<template>
  <button :class="btnClasses" :disabled="disabled" @click="$emit('click', $event)" :type="c4itType">
    <div :class="loadingClasses" v-if="loading">
      <div :class="loaderClasses">
        <svg-icon :icon-class="`circle-notch`" :class="spinnerClasses"></svg-icon>
      </div>
      <div :class="iconLoadingClasses" v-if="icon">
        <svg-icon :icon-class="icon"></svg-icon>
      </div>
      <div :class="iconLoadingClasses" v-if="prefix">
        <svg-icon :icon-class="prefix"></svg-icon>
      </div>
      <div :class="textLoadingClasses">
        <slot></slot>
      </div>
      <div :class="iconLoadingClasses" v-if="suffix">
        <svg-icon :icon-class="suffix"></svg-icon>
      </div>
    </div>
    <div :class="loadedClasses" v-else>
      <div :class="iconClasses" v-if="icon">
        <svg-icon :icon-class="icon"></svg-icon>
      </div>
      <div :class="prefixClasses" v-if="prefix">
        <svg-icon :icon-class="prefix"></svg-icon>
      </div>
      <div :class="textClasses">
        <slot></slot>
      </div>
      <div :class="suffixClasses" v-if="suffix">
        <svg-icon :icon-class="suffix"></svg-icon>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Button`,
  /*eslint-enable*/
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
    c4itType: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'primary',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    elevation: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    aria: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      btnClassArr: [],
      loadingClassArr: [],
      prefixClassArr: [],
      suffixClassArr: [],
      textClassArr: [],
      loadedClassArr: [],
      iconLoadingClassArr: [],
      textLoadingClassArr: [],
      loaderClassArr: [],
      spinnerClassArr: [],
      rippleElem: null,
      iconClassArr: [],
    };
  },

  computed: {
    btnClasses() {
      return this.btnClassArr;
    },
    iconClasses() {
      return this.iconClassArr;
    },
    loadingClasses() {
      return this.loadingClassArr;
    },
    prefixClasses() {
      return this.prefixClassArr;
    },
    suffixClasses() {
      return this.suffixClassArr;
    },
    textClasses() {
      return this.textClassArr;
    },
    loadedClasses() {
      return this.loadedClassArr;
    },
    iconLoadingClasses() {
      return this.iconLoadingClassArr;
    },
    textLoadingClasses() {
      return this.textLoadingClassArr;
    },
    loaderClasses() {
      return this.loaderClassArr;
    },
    spinnerClasses() {
      return this.spinnerClassArr;
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

  mounted() {
    if (this.ripple) {
      /*eslint-disable*/
      this.rippleElem = document.createElement('div');
      this.rippleElem.setAttribute('class', `${ns}-ripple`);
      /* eslint-enable */
      this.$el.appendChild(this.rippleElem);
      this.$el.addEventListener('click', this.trigerRipple);
    }
  },

  beforeDestroy() {
    if (this.ripple) {
      this.$el.removeEventListener('click', this.trigerRipple);
      this.$el.removeChild(this.rippleElem);
      this.rippleElem = null;
    }
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.btnClassArr.push(`${ns}-button`);
      if (this.disabled) {
        this.btnClassArr.push(`${ns}-disabled`);
      }
      if (this.type) {
        this.btnClassArr.push(`${ns}-${this.type}`);
      }
      if (this.size) {
        this.btnClassArr.push(`${ns}-${this.size}`);
      }
      if (this.elevation) {
        this.btnClassArr.push(`${ns}-elevation`);
      }
      if (this.aria) {
        this.btnClassArr.push(`${ns}-aria`);
      }
      if (this.prefix) {
        this.prefixClassArr.push(`prefix-icon`);
      }
      if (this.suffix) {
        this.suffixClassArr.push(`suffix-icon`);
      }
      if (this.icon) {
        this.iconClassArr.push(`icon`);
        this.btnClassArr.push(`${ns}-icon`);
      }
      if (this.loading) {
        this.loadingClassArr.push(`${ns}-loading`);
        this.iconLoadingClassArr.push(`${ns}-icon`);
        this.loaderClassArr.push(`${ns}-center`);
        this.textLoadingClassArr.push(`${ns}-text`);
        this.spinnerClassArr.push(`${ns}-spinner`);
      } else {
        this.loadedClassArr.push(`${ns}-loaded`);
      }
      /* eslint-enable */
    },

    trigerRipple(e) {
      /* eslint-disable */
      if (this.rippleElem.classList && !this.rippleElem.classList.contains(`${ns}-fire`)) {
        this.rippleElem.classList.add(`${ns}-fire`);
        this.rippleElem.setAttribute('style', 'top:' + e.layerY + 'px; left:' + e.layerX + 'px;');
      }

      setTimeout(() => {
        if (this.rippleElem.classList && this.rippleElem.classList.contains(`${ns}-fire`)) {
          this.rippleElem.classList.remove(`${ns}-fire`);
        }
      }, 400);
      /* eslint-enable */
    },
  },
};
</script>
