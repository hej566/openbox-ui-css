<template>
  <div :class="accordionClassList" :id="_uid" tabindex="0">
    <div :class="headerClassList" :data-id="_uid" @click="test">
      <div class="header-bg">
        <div class="left">
          <svg-icon v-if="item.prefix" :icon-class="item.prefix" class="prefix-icon" />
          <div :class="titleClassList">
            <slot name="header">
              {{ item.title }}
            </slot>
          </div>
        </div>
        <svg-icon v-if="item.suffix" :icon-class="item.suffix" class="suffix-icon" />
      </div>
    </div>
    <div :class="bodyClassList">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import tippy, { sticky } from 'tippy.js';

export default {
  /* eslint-disable */
  name: `${ns}Accordion`,
  /* eslint-enable */
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    prefix: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      accordionClassArr: [],
      titleClassArr: [],
      headerClassArr: [],
      bodyClassArr: [],
      open: false,
      accordionBodyElm: null,
      accordionHeaderElm: null,
      accordionTitleElm: null,
      accordionElm: null,
      accordionHeight: '',
    };
  },

  computed: {
    accordionClassList() {
      return this.accordionClassArr;
    },
    headerClassList() {
      return this.headerClassArr;
    },
    bodyClassList() {
      return this.bodyClassArr;
    },
    titleClassList() {
      return this.titleClassArr;
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.accordionElm = this.$el;
    /*eslint-disable*/
    this.accordionBodyElm = this.accordionElm.querySelector(`.${ns}-accordion-body`);
    this.accordionHeaderElm = this.accordionElm.querySelector(`.${ns}-accordion-header`);
    this.accordionHeaderLeftElm = this.accordionHeaderElm.querySelector(`.left`);
    this.accordionTitleElm = this.accordionHeaderElm.querySelector(`.${ns}-accordion-title`);
    /* eslint-enable */
    this.accordionBodyHeight = this.accordionBodyElm.clientHeight;
    this.$nextTick(() => {
      this.accordionBodyElm.style.maxHeight = '0px';
      this.accordionBodyElm.style.visibility = 'hidden';
      this.accordionBodyElm.style.opacity = '0';
      this.accordionBodyElm.style.display = 'none';
    });
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.bodyClassArr.push(`${ns}-accordion-body`);
      this.accordionClassArr.push(`${ns}-accordion`);
      this.headerClassArr.push(`${ns}-accordion-header`);
      this.headerClassArr.push('close');
      this.titleClassArr.push(`${ns}-accordion-title`);
      /* eslint-enable */
    },

    test($event) {
      if (this.$parent.$el.classList.contains(`c4it-accordion-group`)) {
        this.$parent.select($event.currentTarget);
      } else {
        this.toggleHandler();
      }
    },

    toggleHandler() {
      this.open = !this.open;
      if (this.open) {
        this.headerClassArr.pop();
        this.headerClassArr.push(`open`);
        this.accordionBodyElm.style.display = 'block';
        requestAnimationFrame(() => {
          this.accordionBodyElm.style.maxHeight = `${this.accordionBodyHeight}px`;
          this.accordionBodyElm.style.visibility = 'visible';
          this.accordionBodyElm.style.opacity = '1';
          this.accordionBodyElm.style.transition = 'all 0.3s ease-in-out';
        });
      } else {
        this.headerClassArr.pop();
        this.headerClassArr.push('close');
        requestAnimationFrame(() => {
          this.accordionBodyElm.style.maxHeight = '0px';
          this.accordionBodyElm.style.visibility = 'hidden';
          this.accordionBodyElm.style.opacity = '0';
          this.accordionBodyElm.style.transition = 'all 0.3s ease-in-out';
        });
      }
    },
  },
};
</script>
