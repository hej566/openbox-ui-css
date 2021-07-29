<template>
  <div :class="navClassList">
    <div v-if="collapse" :class="navCollapseClassList">
      <div
        v-for="(item, idx) in nav"
        :key="idx"
        :class="navCollapseItemClassObj[idx]"
        @click.stop="clickHandler($event, idx, item)"
        @focusout="blurHandler"
        tabindex="0"
      >
        <div :class="navCollapseItemWrapperClassList">
          <svg-icon :icon-class="item.meta.prefix"></svg-icon>
        </div>
        <c4it-cascader-nav-item
          v-show="open[idx]"
          :options="item.children"
          :theme="theme"
          :index="index ? `${index}-${idx + 1}` : `${idx + 1}`"
          @router-name="cascaderRouterName"
          @router-index="cascaderRouterIndex"
          @blur="internalBlurHandler"
          :nav="nav"
        />
      </div>
    </div>
    <div v-else>
      <c4it-nav-item
        v-for="(item, idx) in nav"
        :key="idx"
        :item="item"
        :index="index ? `${index}-${idx + 1}` : `${idx + 1}`"
        @router-name="routerName"
        @router-index="routerIndex"
        :collapse="collapse"
      >
        <c4it-nav
          :nav="item.children"
          :theme="theme"
          :index="index ? `${index}-${idx + 1}` : `${idx + 1}`"
          @router-name="routerName"
          @router-index="routerIndex"
          :collapse="collapse"
        />
      </c4it-nav-item>
    </div>
  </div>
</template>

<script>
import tippy, { sticky } from 'tippy.js';
import c4itNavItem from '@/components/NavItem/Index.vue';
import c4itCascaderNavItem from '@/components/NavCascaderItem/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Nav`,
  /*eslint-enable*/
  components: {
    c4itNavItem,
    c4itCascaderNavItem,
  },

  props: {
    nav: {
      type: Array,
      default: () => {
        return [];
      },
    },
    index: {
      type: String,
      default: '',
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'dark',
    },
  },

  data() {
    return {
      navClassArr: [],
      navCollapseClassArr: [],
      navCollapseItemClassArr: [],
      navCollapseItemWrapperClassArr: [],
      navCollapseItemClassObj: {},
      open: {},
      tooltips: [],
      instance: null,
    };
  },

  computed: {
    navClassList() {
      return this.navClassArr;
    },
    navCollapseClassList() {
      return this.navCollapseClassArr;
    },
    navCollapseItemClassList() {
      return this.navCollapseItemClassArr;
    },
    navCollapseItemWrapperClassList() {
      return this.navCollapseItemWrapperClassArr;
    },
  },

  watch: {
    collapse: {
      immediate: true,
      handler(val) {
        if (val) {
          /*eslint-disable*/
          this.navClassArr.push(`${ns}-nav-collapse`);
          this.navCollapseClassArr.push(`nav-collapse`);
          this.navCollapseItemWrapperClassArr.push(`${ns}-nav-collapse-item-wrapper`);
          this.setToggleReactive(this.nav);
          this.setClassesReactive(this.nav);
          this.renderTooltips();
          /*eslint-enable*/
        } else {
          this.navClassArr.pop();
          this.navCollapseClassArr.pop();
          this.navCollapseItemWrapperClassArr.pop();
          while (this.tooltips.length) {
            let tooltip = this.tooltips.pop();
            if (!tooltip.state.isDestroyed) {
              tooltip.destroy();
            }
          }
          if (this.instance && !this.instance.state.isDestroyed) {
            for (let idx in this.open) {
              this.open[idx] = false;
            }
            this.destroyChildren(this);
          }
        }
      },
    },
    nav: {
      immediate: false,
      handler(val) {
        if (val && this.collapse) {
          this.setToggleReactive(val);
          this.setClassesReactive(val);
          this.renderTooltips();
        }
      },
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.navClassArr.push(`${ns}-nav`);
      this.navClassArr.push('slots');
      this.navClassArr.push(this.theme);
      /*eslint-enable*/
    },

    renderTooltips() {
      Array.from(this.$mount().$el.children[0].children).forEach((item, idx) => {
        let instance = tippy(item, {
          appendTo: () => document.body,
          content: `<div>${this.nav[idx].meta.title}</div>`,
          allowHTML: true,
          arrow: false,
          placement: 'right',
          interactive: true,
          theme: 'nav-tooltip',
          sticky: true,
          delay: 0,
          duration: 0,
          plugins: [sticky],
        });
        this.tooltips.push(instance);
      });
    },

    setToggleReactive(val) {
      if (val instanceof Array) {
        val.forEach((item, idx) => {
          this.$set(this.open, idx, false);
        });
      }
    },

    setClassesReactive(val) {
      if (val instanceof Array) {
        val.forEach((item, idx) => {
          this.$set(this.navCollapseItemClassObj, idx, []);
          /*eslint-disable*/
          this.navCollapseItemClassObj[idx].push(`${ns}-nav-collapse-item`);
          /*eslint-enable*/
          if (item.meta.active) {
            this.navCollapseItemClassObj[idx].push(`active`);
          }
          if (item.meta.anchor) {
            this.navCollapseItemClassObj[idx].push(`anchor`);
          }
        });
      }
    },

    cleanAllActiveAndAnchorExcept(index) {
      for (let idx in this.navCollapseItemClassObj) {
        if (
          this.navCollapseItemClassObj[idx] &&
          this.navCollapseItemClassObj[idx].includes('active') &&
          this.navCollapseItemClassObj[idx].includes('anchor')
        ) {
          this.navCollapseItemClassObj[idx].pop();
          this.navCollapseItemClassObj[idx].pop();
        } else if (
          this.navCollapseItemClassObj[idx] &&
          this.navCollapseItemClassObj[idx].includes('active')
        ) {
          this.navCollapseItemClassObj[idx].pop();
        } else if (
          this.navCollapseItemClassObj[idx] &&
          this.navCollapseItemClassObj[idx].includes('anchor')
        ) {
          this.navCollapseItemClassObj[idx].pop();
        }
      }

      if (this.navCollapseItemClassObj[index]) {
        this.navCollapseItemClassObj[index].push('active');
      }

      this.destroyChildren(this);

      for (let idx in this.open) {
        this.open[idx] = false;
      }
    },

    clickHandler($event, idx, item) {
      $event.currentTarget.focus();
      this.$emit('router-name', item.name);
      this.$emit('router-index', idx);
      this.$nextTick(() => {
        this.cleanAllActiveAndAnchorExcept(idx);
        this.open[idx] = true;
        const targetElm = this.$children[idx * 2].$el.parentNode;
        const popoverElm = this.$children[idx * 2 + 1].$el;
        if (this.open[idx]) {
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
            plugins: [sticky],
            delay: 0,
            duration: 0,
            offset: [-10, 8],
          });
          this.instance.show();
        }
      });
    },

    internalBlurHandler() {
      this.destroyChildren(this);
      let current_active = null;
      for (let idx in this.open) {
        if (this.open[idx]) {
          current_active = idx;
        }
        this.open[idx] = false;
      }
      for (let idx in this.navCollapseItemClassObj) {
        if (
          this.navCollapseItemClassObj[idx].includes('active') &&
          this.navCollapseItemClassObj[idx].includes('anchor')
        ) {
          this.navCollapseItemClassObj[idx].pop();
          this.navCollapseItemClassObj[idx].pop();
        } else if (this.navCollapseItemClassObj[idx].includes('active')) {
          this.navCollapseItemClassObj[idx].pop();
        } else if (this.navCollapseItemClassObj[idx].includes('anchor')) {
          this.navCollapseItemClassObj[idx].pop();
        }
      }

      if (current_active) {
        this.navCollapseItemClassObj[current_active].push('active');
      }
    },

    blurHandler($event) {
      if (
        !$event.relatedTarget ||
        ($event.relatedTarget.classList &&
          $event.relatedTarget.classList[0] !== 'c4it-cascader-nav-item' &&
          $event.relatedTarget.classList[0] !== 'title-bg' &&
          $event.relatedTarget.classList[0] !== 'title' &&
          $event.relatedTarget.classList[0] !== 'icon')
      ) {
        this.destroyChildren(this);
        let current_active = null;
        for (let idx in this.open) {
          if (this.open[idx]) {
            current_active = idx;
          }
          this.open[idx] = false;
        }
        for (let idx in this.navCollapseItemClassObj) {
          if (
            this.navCollapseItemClassObj[idx] &&
            this.navCollapseItemClassObj[idx].includes('active') &&
            this.navCollapseItemClassObj[idx].includes('anchor')
          ) {
            this.navCollapseItemClassObj[idx].pop();
            this.navCollapseItemClassObj[idx].pop();
          } else if (
            this.navCollapseItemClassObj[idx] &&
            this.navCollapseItemClassObj[idx].includes('active')
          ) {
            this.navCollapseItemClassObj[idx].pop();
          } else if (
            this.navCollapseItemClassObj[idx] &&
            this.navCollapseItemClassObj[idx].includes('anchor')
          ) {
            this.navCollapseItemClassObj[idx].pop();
          }
        }

        if (current_active) {
          this.navCollapseItemClassObj[current_active].push('active');
        }
      }
    },

    cascaderRouterName(val) {
      this.$emit('router-name', val);
    },

    cascaderRouterIndex(val) {
      const { index, status } = val;
      this.$emit('router-index', index);
    },

    routerName(val) {
      this.$emit('router-name', val);
    },

    routerIndex(val) {
      this.$emit('router-index', val);
    },

    destroyChildren(vm) {
      if (vm.instance && !vm.instance.state.isDestroyed) {
        /*eslint-disable*/
        for (let child of vm.$children) {
          if (
            child.$el.classList &&
            child.$el.classList.contains(`${ns}-cascader-nav-group`) &&
            child.instance &&
            !child.instance.state.isDestroyed
          ) {
            this.destroyInstance(child.$children[child.$children.length - 1]);
            child.showChildren = false;
            child.instance.destroy();
            child.instance = null;
          }
        }
        /*eslint-enable*/
        vm.instance.destroy();
        vm.instance = null;
      }
    },

    destroyInstance(target) {
      if (target && target.showChildren) {
        this.destroyInstance(target.$children[target.$children.length - 1]);
        target.showChildren = false;
      }
      if (target && target.instance && !target.instance.state.isDestroyed) {
        target.instance.destroy();
        target.instance = null;
      }
    },
  },
};
</script>
