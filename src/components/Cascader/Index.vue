<template>
  <div :class="cascaderClasses" :id="_uid">
    <div :class="cascaderFieldClasses" @click="focusHandler">
      <input
        :class="searchInputClasses"
        :placeholder="placeholder"
        @input="inputHandler"
        v-model="selectedLabel"
        :disabled="disabled"
        @focusin="focusHandler"
        @focusout="blurHandler"
        type="text"
        autocomplete="off"
      />
      <div v-if="suffix" @click="focusHandler" class="suffix-icon">
        <svg-icon
          :class="suffixClasses"
          v-if="sufLoading"
          icon-class="circle-notch"
        ></svg-icon>
        <svg-icon :class="suffixClasses" v-else :icon-class="suffix"></svg-icon>
      </div>
    </div>

    <div :class="cascaderListWrapperClasses" v-show="false">
      <c4it-scrollbar is-vertical>
        <c4it-cascader-List
          :options="options"
          @selected="selectedHandler"
          index="1"
        />
      </c4it-scrollbar>
    </div>
  </div>
</template>

<script>
import c4itCascaderList from '@/components/CascaderList/Index.vue';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';
import tippy, { sticky, hideAll } from 'tippy.js';
import emitter from '@/mixins/emitter';
import deepClone from '@/utils/deepClone';

export default {
  /*eslint-disable*/
  name: `${ns}Cascader`,
  /*eslint-enable*/
  components: {
    c4itCascaderList,
    c4itScrollbar
  },
  mixins: [emitter],
  model: {
    prop: 'context',
    event: 'change'
  },
  props: {
    validateEvent: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    context: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    sufLoading: {
      type: Boolean,
      default: false
    },
    remoteSearch: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  },

  data() {
    return {
      cascaderFieldClassArr: [],
      labelClassArr: [],
      cascaderClassArr: [],
      cascaderListWrapperClassArr: [],
      searchInputClassArr: [],
      suffixClassArr: [],
      targetElm: null,
      popoverElm: null,
      popoverId: null,
      timeoutId: null,
      instance: null,
      selectedLabel: null,
      classesSet: null
    };
  },

  computed: {
    cascaderFieldClasses() {
      return this.cascaderFieldClassArr;
    },

    labelClasses() {
      return this.labelClassArr;
    },

    cascaderClasses() {
      return this.cascaderClassArr;
    },

    cascaderListWrapperClasses() {
      return this.cascaderListWrapperClassArr;
    },

    suffixClasses() {
      return this.suffixClassArr;
    },

    searchInputClasses() {
      return this.searchInputClassArr;
    }
  },

  watch: {
    sufLoading: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.suffixClassArr.push(`${ns}-loading`);
        } else {
          const idx = this.suffixClassArr.indexOf(`${ns}-loading`);
          if (idx !== -1) {
            this.suffixClassArr.splice(idx, 1);
          }
        }
        /* eslint-enable */
      }
    },

    disabled: {
      handler(val) {
        /* eslint-disable */
        if (val && this.$el.classList && !this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.add(`${ns}-disabled`);
          if (this.instance) {
            this.instance.disable();
          }
        }
        if (!val && this.$el.classList && this.$el.classList.contains(`${ns}-disabled`)) {
          this.$el.classList.remove(`${ns}-disabled`);
          if (this.instance) {
            this.instance.enable();
          }
        }
        /* eslint-enable */
      }
    },
    context: {
      immediate: true,
      handler(val) {}
    }
  },

  created() {
    this.initClasses();
  },

  mounted() {
    this.initTippy();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.cascaderFieldClassArr.push(`${ns}-cascader-field`);
      this.cascaderListWrapperClassArr.push(`${ns}-cascader-list-wrapper`)
      this.labelClassArr.push(`${ns}-label`);
      this.cascaderClassArr.push(`${ns}-cascader`);
      this.searchInputClassArr.push(`${ns}-search-input`);
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.sufLoading) {
        this.suffixClassArr.push(`${ns}-loading`);
      }
      if (this.disabled) {
        this.cascaderClassArr.push(`${ns}-disabled`)
      }
      if (this.type === 'text') {
        this.cascaderClassArr.push(`${ns}-cascader-text`)
      } else {
        this.cascaderClassArr.push(`${ns}-cascader-default`)
      }
      this.classesSet = [`${ns}-cascader-item`, 'cascader-label', 'cascader-icon'];
      /* eslint-enable */
    },

    initTippy() {
      this.popoverId = this.$children[this.$children.length - 1]._uid;
      this.popoverElm = document.getElementById(this.popoverId);
      this.targetElm = document.getElementById(this._uid);
      this.instance = tippy(this.targetElm, {
        appendTo: () => document.body,
        content: this.popoverElm,
        allowHTML: true,
        arrow: false,
        trigger: 'click',
        placement: 'bottom-start',
        interactive: true,
        hideOnClick: 'toggle',
        theme: 'cascader',
        sticky: true,
        offset: [0, 0],
        plugins: [sticky],
        duration: 0,
        delay: 0,
        onClickOutside: (instance, event) => {
          if (
            event.target.classList &&
            !this.classesSet.includes(event.target.classList[0])
          ) {
            hideAll();
          }
        },
        onShow: () => {
          if (
            this.targetElm.children[0].classList &&
            !this.targetElm.children[0].classList.contains('open')
          ) {
            this.targetElm.children[0].classList.add('open');
          }
        },
        onHide: () => {
          if (
            this.targetElm.children[0].classList &&
            this.targetElm.children[0].classList.contains('open')
          ) {
            this.targetElm.children[0].classList.remove('open');
          }
        }
      });

      if (this.disabled) {
        this.instance.disable();
      }
    },

    focusHandler() {
      this.$el.classList.add('focus');
      document
        .getElementById(this._uid)
        .querySelector('input')
        .focus();
    },

    blurHandler() {
      this.$el.classList.remove('focus');
    },

    inputHandler() {
      if (this.remoteSearch) {
        if (this.debounce && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.$emit('search', this.selected);
        }, Number(this.debounce));
      } else {
        this.$emit('change', this.selected);
        if (this.validateEvent) {
          this.dispatch('C4itFormItem', 'c4it.form.change', [this.selected]);
        }
      }
    },

    selectedHandler({ index, item, status }) {
      if (status === 'leaf') {
        this.selectedLabel = item.label;
        this.$emit('change', item.value);
        this.$emit('index', index);
        hideAll();
      }
    }
  }
};
</script>
