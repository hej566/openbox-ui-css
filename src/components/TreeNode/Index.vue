<template>
  <div :class="treeNodeClasses" :id="_uid" :data-index="index">
    <div :class="headerClasses" @mousedown.stop="mousedownHandler">
      <div class="header-bg">
        <svg-icon
          :class="{ show: node.hasChildren, hide: !node.hasChildren }"
          icon-class="caret-down"
        />
        <svg-icon v-if="node.prefix" :icon-class="node.prefix" />
        <div :class="titleClasses">
          <div>
            {{ node.name }}
            <span v-if="node.prenum && node.suffnum">
              ({{ node.prenum }}/{{ node.suffnum }})
            </span>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
    <div v-if="node.showChildren">
      <c4it-tree-node
        v-for="(childNode, idx) in node.children"
        :key="idx"
        :node="childNode"
        :index="`${index}-${idx + 1}`"
      />
    </div>
  </div>
</template>

<script>
import tippy, { sticky } from 'tippy.js';

export default {
  /* eslint-disable */
  name: `${ns}TreeNode`,
  /* eslint-enable */
  inject: ['fetchData', 'removeData'],
  props: {
    index: {
      type: String,
      default: ''
    },

    node: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      treeNodeClassArr: [],
      titleClassArr: [],
      headerClassArr: [],
      treeNodeHeaderElm: null,
      open: false,
      path: [],
      level: 0
    };
  },

  computed: {
    treeNodeClasses() {
      return this.treeNodeClassArr;
    },
    headerClasses() {
      return this.headerClassArr;
    },
    titleClasses() {
      return this.titleClassArr;
    }
  },

  created() {
    this.initClasses();
    this.path = this.index.split('-');
    this.level = this.path.length;
  },

  mounted() {
    this.treeNodeElm = this.$el;
    this.treeNodeHeaderElm = this.$el.children[0];
    this.treeNodeHeaderBgElm = this.treeNodeHeaderElm.children[0];
    this.treeNodeHeaderElm.style.paddingLeft = `${this.level * 16}px`;
    tippy(this.treeNodeHeaderBgElm, {
      appendTo: () => document.body,
      content: `<div>${this.treeNodeHeaderBgElm.innerText}</div>`,
      allowHTML: true,
      arrow: false,
      placement: 'right',
      interactive: true,
      theme: 'tree-node-tooltip',
      sticky: true,
      plugins: [sticky],
      duration: 0,
      delay: 0
    });
  },

  methods: {
    initClasses() {
      /*eslint-disable*/
      this.treeNodeClassArr.push(`${ns}-tree-node`);
      this.headerClassArr.push(`${ns}-tree-node-header`);
      this.headerClassArr.push('close')
      this.titleClassArr.push(`${ns}-tree-node-title`);
      if (this.node.color) {
        this.headerClassArr.push(this.node.colorSpace)
      }
      /* eslint-enable */
    },

    mousedownHandler() {
      this.clearAllActive();
      if (this.node.hasChildren) {
        this.open = !this.open;
        if (this.open) {
          this.fetchData(this.node);
          this.$nextTick(() => {
            if (
              this.treeNodeHeaderElm.classList &&
              this.treeNodeHeaderElm.classList.contains(`close`)
            ) {
              this.treeNodeHeaderElm.classList.remove(`close`);
              this.treeNodeHeaderElm.classList.add('open');
              if (this.treeNodeHeaderBgElm.children) {
                this.treeNodeHeaderBgElm.children[0].style.transition =
                  'all 0.1s ease-in-out';
              }
            }
          });
        } else {
          this.$nextTick(() => {
            if (
              this.treeNodeHeaderElm.classList &&
              this.treeNodeHeaderElm.classList.contains(`open`)
            ) {
              this.treeNodeHeaderElm.classList.remove(`open`);
              this.treeNodeHeaderElm.classList.add('close');
              if (this.treeNodeHeaderBgElm.children) {
                this.treeNodeHeaderBgElm.children[0].style.transition =
                  'all 0.1s ease-in-out';
              }
            }
          });
          this.removeData(this.node);
        }
      } else {
        if (this.node.treeNodeType === 'leave') {
          this.fetchData(this.node);
        }
      }

      this.$nextTick(() => {
        if (this.treeNodeHeaderElm.classList) {
          this.treeNodeHeaderElm.classList.add('active');
        }
      });
    },

    clearAllActive() {
      const rootVm = this.findRootVm(this);
      for (let vm of rootVm.$children) {
        this.clearActiveRecr(vm);
      }
    },

    clearActiveRecr(vm) {
      /*eslint-disable*/
      if (!vm || (vm.$el.classList && !vm.$el.classList.contains(`${ns}-tree-node`))) {
        return;
      } else {
        if (vm.$el.children && vm.$el.children[0].classList && vm.$el.children[0].classList.contains('active')) {
          vm.$el.children[0].classList.remove('active');
        }
      }
      /*eslint-enable*/
      if (vm.$children.length) {
        for (let vm of vm.$children) {
          this.clearActiveRecr(vm);
        }
      }
    },

    findRootVm(vm) {
      /*eslint-disable*/
      if (vm.$el.classList && vm.$el.classList.contains(`${ns}-tree`)) {
        return vm;
      }
      /*eslint-enable*/
      return this.findRootVm(vm.$parent);
    }
  }
};
</script>
