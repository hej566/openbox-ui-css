<template>
  <div :class="cascaderGroupClassList" :id="_uid">
    <div
      v-for="(item, idx) in options"
      :key="idx"
      :class="cascaderItemClassObject[idx]"
      :data-value="item.meta.title"
      :data-node="item.children ? 1 : 0"
      :data-index="`${index}-${idx + 1}`"
      :data-name="item.name"
      :data-id="idx"
      @focusout="blurHandler($event, item, idx)"
      @focusin="focusHandler($event, item, idx)"
      tabindex="0"
    >
      <div @click="test(idx)" class="title-bg">
        <div
          :data-node="item.children ? 1 : 0"
          :data-value="item.meta.title"
          class="title"
        >
          {{ item.meta.title }}
        </div>
        <svg-icon
          v-if="item.children"
          :data-node="item.children ? 1 : 0"
          :data-value="item.meta.title"
          class="icon"
          icon-class="angle-right"
        />
      </div>
    </div>
    <c4it-cascader-nav-item
      v-if="showChildren"
      :options="childrenOptions"
      :index="indexPath"
      :theme="theme"
      @router-name="routerName"
      @router-index="routerIndex"
      @blur="internalBlurHandler"
      :nav="nav"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import tippy, { sticky } from 'tippy.js';

export default {
  /*eslint-disable*/
  name: `${ns}CascaderNavItem`,
  /*eslint-enable*/
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },

    index: {
      type: String,
      default: ''
    },

    theme: {
      type: String,
      default: 'dark'
    },

    nav: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  data() {
    return {
      cascaderGroupClassArr: [],
      cascaderItemClassObject: {},
      childrenOptions: [],
      showChildren: false,
      indexPath: '',
      instance: null
    };
  },

  computed: {
    cascaderGroupClassList() {
      return this.cascaderGroupClassArr;
    }
  },

  watch: {
    options: {
      deep: true,
      handler(val) {
        val.forEach((item, idx) => {
          this.$set(this.cascaderItemClassObject, idx, []);
          /*eslint-disable*/
          this.cascaderItemClassObject[idx].push(`${ns}-cascader-nav-item`);
          /*eslint-enable*/
          if (item.meta.active) {
            this.cascaderItemClassObject[idx].push('active');
          }
          if (item.meta.anchor) {
            this.cascaderItemClassObject[idx].push('anchor');
          }
        });
      }
    }
  },

  created() {
    this.init();
  },

  methods: {
    test(idx) {
      this.$el.children[idx].focus();
    },
    init() {
      /*eslint-disable*/
      this.cascaderGroupClassArr.push(`${ns}-cascader-nav-group`);
      this.options.forEach((item, idx) => {
        this.$set(this.cascaderItemClassObject, idx, [])
        this.cascaderItemClassObject[idx].push(`${ns}-cascader-nav-item`);
        if (item.meta.active) {
          this.cascaderItemClassObject[idx].push('active')
        }
        if (item.meta.anchor) {
          this.cascaderItemClassObject[idx].push('anchor')
        }
      })
      /*eslint-enable*/
    },

    routerName(val) {
      this.$emit('router-name', val);
    },

    routerIndex(val) {
      this.$emit('router-index', val);
    },

    blurHandler($event, item, index) {
      if (
        !$event.relatedTarget ||
        ($event.relatedTarget.classList &&
          $event.relatedTarget.classList[0] === 'nav') ||
        ($event.relatedTarget &&
          $event.relatedTarget.classList &&
          $event.relatedTarget.classList[0] !== 'c4it-cascader-nav-item' &&
          $event.relatedTarget.classList[0] !== 'title-bg' &&
          $event.relatedTarget.classList[0] !== 'icon' &&
          $event.relatedTarget.classList[0] !== 'title')
      ) {
        this.$emit('blur', $event);
      }
    },

    internalBlurHandler(val) {
      this.$emit('blur', val);
    },

    focusHandler($event, item, index) {
      this.clearAllActiveAndAnchor();
      item.meta.active = true;
      item.meta.anchor = true;
      if (item.children) {
        this.clearChildren(this);
        this.showChildren = true;
        this.childrenOptions = item.children;
        this.indexPath = `${$event.currentTarget.dataset['index']}`;
        this.$nextTick(() => {
          const targetElm = $event.target;
          const popoverElm = this.$children[this.$children.length - 1].$el;
          if (this.instance && !this.instance.state.isDestroyed) {
            this.instance.destroy();
            this.instance = null;
          }

          this.instance = tippy(targetElm, {
            appendTo: () => document.body,
            content: popoverElm,
            allowHTML: true,
            trigger: 'click',
            arrow: false,
            placement: 'right-start',
            interactive: true,
            theme: `nav-cascader-item-${this.theme}`,
            hideOnClick: false,
            sticky: true,
            duration: 0,
            delay: 0,
            plugins: [sticky]
          });

          this.instance.show();
          this.markPath(item);
        });
        this.$emit('router-name', item.name);
        this.$emit('router-index', {
          index: $event.currentTarget.dataset['index'],
          status: 'node'
        });
      } else {
        this.markPath(item);
        this.$emit('router-name', item.name);
        this.$emit('router-index', {
          index: $event.currentTarget.dataset['index'],
          status: 'leaf'
        });
      }
    },

    markPath(target) {
      const path = [];
      this.nav.forEach(item => {
        path.push(item);
        this.markPathRecr(target, path, item);
        path.pop();
      });
    },

    markPathRecr(target, path, item) {
      if (path[path.length - 1] === target) {
        for (let item of path) {
          item.meta.active = true;
        }
        return;
      }
      if (item.children && item.children.length) {
        item.children.forEach(child => {
          path.push(child);
          this.markPathRecr(target, path, child);
          path.pop();
        });
      }
    },

    findRoot(vm) {
      /*eslint-disable*/
      if (vm.$el.classList && vm.$el.classList.contains(`${ns}-nav-collapse`)) {
        return vm;
      }
      /*eslint-enable*/
      return this.findRoot(vm.$parent);
    },

    clearAllActiveAndAnchor() {
      this.nav.forEach(item => {
        item.meta.active = false;
        item.meta.anchor = false;
        if (item.children && item.children.length) {
          this.clearActiveAndAnchorChildren(item.children);
        }
      });

      const navVm = this.findRoot(this);
      for (let key in navVm.navCollapseItemClassObj) {
        if (
          navVm.navCollapseItemClassObj[key].includes('active') &&
          navVm.navCollapseItemClassObj[key].includes('anchor')
        ) {
          navVm.navCollapseItemClassObj[key].pop();
          navVm.navCollapseItemClassObj[key].pop();
        } else if (navVm.navCollapseItemClassObj[key].includes('active')) {
          navVm.navCollapseItemClassObj[key].pop();
        } else if (navVm.navCollapseItemClassObj[key].includes('anchor')) {
          navVm.navCollapseItemClassObj[key].pop();
        }
      }
    },

    clearActiveAndAnchorChildren(children) {
      if (!children || !children.length) return;
      for (let item of children) {
        item.meta.active = false;
        item.meta.anchor = false;
        if (item.children && item.children.length) {
          this.clearActiveAndAnchorChildren(item.children);
        }
      }
    },

    clearChildren(vm) {
      if (vm.showChildren) {
        this.clearChildren(vm.$children[2]);
      }
      if (vm.instance) {
        vm.instance.destroy();
        vm.instance = null;
      }
    }
  }
};
</script>
