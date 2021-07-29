<template>
  <div
    :class="accordionClassList"
    :id="_uid"
    @mousedown.stop="mousedownHandler"
    :data-index="index"
    tabindex="0"
  >
    <div :class="headerClassList" :data-id="_uid" @mousedown="toggleHandler('mousedown')">
      <div class="header-bg">
        <div class="left">
          <svg-icon v-if="item.meta.prefix" :icon-class="item.meta.prefix" class="prefix-icon" />
          <div :class="titleClassList">
            <slot name="header">
              {{ item.meta.title }}
            </slot>
          </div>
        </div>
        <div class="right">
          <svg-icon v-if="item.meta.suffix" :icon-class="item.meta.suffix" class="suffix-icon" />
        </div>
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
  name: `${ns}NavItem`,
  /* eslint-enable */
  props: {
    index: {
      type: String,
      default: '',
    },

    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    nav: {
      type: Array,
      default: () => {
        return [];
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
      path: [],
      level: 0,
      tooltip: null,
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

  watch: {
    item: {
      immediate: false,
      deep: true,
      handler(val) {
        if (val.meta.active) {
          this.$nextTick(() => {
            this.markPath(this.accordionElm);
          });
        }
        if (val.meta.anchor) {
          this.$nextTick(() => {
            this.accordionElm.classList.add('anchor');
          });
        } else {
          this.$nextTick(() => {
            this.accordionElm.classList.remove('anchor');
          });
        }
      },
    },
  },

  created() {
    this.init();
    this.path = this.index.split('-');
    this.level = this.path.length;
  },

  mounted() {
    this.accordionElm = this.$el;
    /*eslint-disable*/
    this.accordionBodyElm = this.accordionElm.querySelector(`.${ns}-nav-item-body`);
    this.accordionHeaderElm = this.accordionElm.querySelector(`.${ns}-nav-item-header`);
    this.accordionHeaderLeftElm = this.accordionHeaderElm.querySelector(`.left`);
    this.accordionTitleElm = this.accordionHeaderElm.querySelector(`.${ns}-nav-item-title`);
    /* eslint-enable */
    this.accordionBodyHeight = this.accordionBodyElm.clientHeight;
    this.$nextTick(() => {
      this.accordionBodyElm.style.maxHeight = '0px';
      this.accordionBodyElm.style.visibility = 'hidden';
      this.accordionBodyElm.style.opacity = '0';
      this.accordionBodyElm.style.display = 'none';
      this.accordionHeaderLeftElm.style.paddingLeft = `${this.level * 30}px`;
    });
    if (this.item.meta.active) {
      this.$nextTick(() => {
        this.toggleHandler('init');
        this.markPath(this.accordionElm);
      });
    }
    if (this.item.meta.anchor) {
      this.$nextTick(() => {
        this.accordionElm.classList.add('anchor');
      });
    }
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.bodyClassArr.push(`${ns}-nav-item-body`);
      this.accordionClassArr.push(`${ns}-nav-item`);
      this.headerClassArr.push(`${ns}-nav-item-header`);
      this.headerClassArr.push('close');
      this.titleClassArr.push(`${ns}-nav-item-title`);
      /* eslint-enable */
    },

    findTargetElm(dom, path) {
      if (dom.dataset.index === path) {
        return dom;
      }

      return this.findTargetElm(dom.parentNode, path);
    },

    findRootElm(dom) {
      /*eslint-disable*/
      if (
        dom.classList &&
        dom.classList.contains(`${ns}-nav-item`) &&
        dom.dataset['index'].split('-').length === 1
      ) {
        return dom;
      }
      /*eslint-enable*/
      return this.findRootElm(dom.parentNode);
    },

    findRootVm(vm) {
      /*eslint-disable*/
      if (
        vm.$el.classList &&
        vm.$el.classList.contains(`${ns}-nav-item`) &&
        vm.$el.dataset['index'].split('-').length === 1
      ) {
        return vm;
      }
      /*eslint-enable*/
      return this.findRootVm(vm.$parent);
    },

    mousedownHandler($event) {
      /*eslint-disable*/
      let topLevelElm = this.findRootElm($event.currentTarget);
      let accordionElms = topLevelElm.parentNode.querySelectorAll(`.${ns}-nav-item`);
      /*eslint-enable*/
      accordionElms.forEach((elem) => {
        if (elem.classList && elem.classList.contains('active')) {
          elem.classList.remove('active');
        }
        if (elem.classList && elem.classList.contains('anchor')) {
          elem.classList.remove('anchor');
        }
      });

      $event.target.setAttribute('data-id', this._uid);
      $event.currentTarget.classList.add('anchor');

      const vm = this.findRootVm(this).$parent;
      this.clearActiveAndAnchor(vm);

      this.markPath($event.currentTarget);
      this.findVmPath(this.item, vm);

      this.item.meta.active = true;
      this.item.meta.anchor = true;

      this.$emit('router-name', this.item.name);
      this.$emit('router-index', this.index);
    },

    clearActiveAndAnchor(vm) {
      if (vm && vm.$children.length) {
        for (let children of vm.$children) {
          /*eslint-disable*/
          if (children.$el.classList && children.$el.classList.contains(`${ns}-nav-item`)) {
            children.item.meta.active = false;
            children.item.meta.anchor = false;
          }
          /*eslint-enable*/
          if (children.$children && children.$children.length) {
            this.clearActiveAndAnchor(children);
          }
        }
      }
    },

    markPath(dom) {
      const index = dom.getAttribute('data-index');
      const arr = index.split('-');
      const candidates = [];
      const paths = [];
      for (let i = 0; i < arr.length; i++) {
        candidates.push(arr.slice(0, i + 1));
      }

      for (const candidate of candidates) {
        paths.push(candidate.join('-'));
      }

      for (const path of paths) {
        this.findTargetElm(dom, path).classList.add('active');
      }
    },

    findVmPath(target, vm) {
      const path = [];
      if (vm && vm.$children.length) {
        vm.$children.forEach((item) => {
          /*eslint-disable*/
          if (item.$el.classList && item.$el.classList.contains(`${ns}-nav-item`)) {
            path.push(item);
            this.findVmPathRecr(target, path, item);
            path.pop();
          }
          /*eslint-enable*/
        });
      }
    },

    findVmPathRecr(target, path, item) {
      /*eslint-disable*/
      if (
        path[path.length - 1].$el.classList &&
        path[path.length - 1].$el.classList.contains(`${ns}-nav-item`) &&
        path[path.length - 1].item.name === target.name
      ) {
        path.forEach((path) => {
          if (path.item) {
            path.item.meta.active = true;
            path.item.meta.anchor = false;
          }
        });
        path[path.length - 1].item.meta.anchor = true;
        return;
      }
      /*eslint-enable*/
      if (item.$children && item.$children.length) {
        item.$children.forEach((item) => {
          path.push(item);
          this.findVmPathRecr(target, path, item);
          path.pop();
        });
      }
    },

    toggleHandler(eventName) {
      if (eventName === 'mousedown' || eventName === 'init' || eventName === 'clear') {
        this.open = !this.open;
        if (this.open) {
          this.headerClassArr.pop();
          this.headerClassArr.push(`open`);
          this.accordionBodyElm.style.display = 'block';
          requestAnimationFrame(() => {
            this.accordionBodyElm.style.maxHeight = `${this.accordionBodyHeight}px`;
            this.accordionBodyElm.style.visibility = 'visible';
            this.accordionBodyElm.style.opacity = '1';
            this.accordionBodyElm.style.transition = 'all 0.1s linear';
          });
        } else {
          this.headerClassArr.pop();
          this.headerClassArr.push('close');
          requestAnimationFrame(() => {
            this.accordionBodyElm.style.maxHeight = '0px';
            this.accordionBodyElm.style.visibility = 'hidden';
            this.accordionBodyElm.style.opacity = '0';
            this.accordionBodyElm.style.transition = 'all 0.1s linear';
          });
        }
      }
    },
  },
};
</script>
