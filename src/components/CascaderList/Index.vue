<template>
  <div :class="cascaderListClasses" :id="_uid">
    <div
      v-for="(item, idx) in options"
      :key="idx"
      :class="cascaderItemClasses"
      :data-index="`${index}-${idx + 1}`"
      @click.stop="clickHandler($event, item, idx)"
    >
      <div class="cascader-label">
        {{ item.label }}
      </div>
      <svg-icon v-if="item.children" icon-class="angle-right" class="cascader-icon" />
    </div>
    <div :class="cascaderListWrapperClasses" v-show="false">
      <c4it-scrollbar v-if="childrenOptions.length" is-vertical>
        <c4it-cascader-List
          :options="childrenOptions"
          :index="cascaderIndex"
          @selected="selectedHandler"
        />
      </c4it-scrollbar>
    </div>
  </div>
</template>

<script>
import tippy, { sticky, hideAll } from 'tippy.js';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';

export default {
  /* eslint-disable */
  name: `${ns}CascaderList`,
  /* eslint-enable */
  components: {
    c4itScrollbar,
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    index: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      cascaderListClassArr: [],
      cascaderListWrapperClassArr: [],
      cascaderItemClassArr: [],
      childrenOptions: [],
      instance: null,
      popoverId: null,
      targetElm: null,
      popoverElm: null,
      cascaderIndex: '',
      classesSet: null,
    };
  },

  computed: {
    cascaderListClasses() {
      return this.cascaderListClassArr;
    },
    cascaderItemClasses() {
      return this.cascaderItemClassArr;
    },
    cascaderListWrapperClasses() {
      return this.cascaderListWrapperClassArr;
    },
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.cascaderListClassArr.push(`${ns}-cascader-list`);
      this.cascaderItemClassArr.push(`${ns}-cascader-item`);
      this.cascaderListWrapperClassArr.push(`${ns}-cascader-list-wrapper`);
      this.classesSet = [`${ns}-cascader-item`, 'cascader-label', 'cascader-icon'];
      /* eslint-enable */
    },
    createTippy() {
      if (!this.instance) {
        this.popoverId = this.$children[this.$children.length - 1]._uid;
        this.popoverElm = document.getElementById(this.popoverId);
        this.targetElm = document.getElementById(this._uid).parentNode;
        this.instance = tippy(this.targetElm, {
          appendTo: () => document.body,
          content: this.popoverElm,
          allowHTML: true,
          trigger: 'manual',
          arrow: false,
          placement: 'right-start',
          interactive: true,
          hideOnClick: false,
          sticky: true,
          plugins: [sticky],
          theme: `cascader`,
          offset: [-16, 8],
          duration: 0,
          delay: 0,
          onClickOutside: (instance, event) => {
            if (event.target.classList && !this.classesSet.includes(event.target.classList[0])) {
              instance.destroy();
            }
          },
        });
        this.instance.show();
      } else if (this.instance && this.instance.state.isShown) {
        this.instance.hide();
      } else if (this.instance && !this.instance.state.isShown) {
        this.instance.show();
      }
    },

    selectedHandler(val) {
      this.$emit('selected', val);
    },

    clickHandler($event, item, idx) {
      this.cleanChildren(this);
      if (item.children) {
        this.childrenOptions = [...item.children];
        this.cascaderIndex = `${this.index}-${idx + 1}`;
        this.$nextTick(() => {
          this.createTippy();
        });
        $event.currentTarget.classList.add('active');
        $event.currentTarget.classList.add('anchor');
        this.$emit('selected', {
          index: $event.currentTarget.dataset['index'],
          item: item,
          status: 'node',
        });
      } else {
        $event.currentTarget.classList.add('active');
        $event.currentTarget.classList.add('anchor');
        this.$emit('selected', {
          index: $event.currentTarget.dataset['index'],
          item: item,
          status: 'leaf',
        });
      }
    },

    cleanActiveAndAnchor(vm) {
      const items = vm.$el.querySelectorAll('.c4it-cascader-item');
      for (let item of items) {
        if (item && item.classList && item.classList.contains('active')) {
          item.classList.remove('active');
        }
        if (item && item.classList && item.classList.contains('anchor')) {
          item.classList.remove('anchor');
        }
      }
    },

    cleanChildren(vm) {
      if (!vm) return;
      this.cleanActiveAndAnchor(vm);
      for (let child of vm.$children) {
        this.cleanChildren(child);
      }
      if (vm && vm.instance) {
        vm.instance.hide();
      }
    },
  },
};
</script>
