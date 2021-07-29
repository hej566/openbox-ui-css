<template>
  <div :class="selectClasses" :id="_uid">
    <div :class="selectFieldClasses" @click="focusHandler">
      <div v-if="multiple" :class="selectedGroupClasses">
        <div v-for="(item, idx) in selectedList" :key="idx" :class="selectedItemClasses">
          <span>{{ item.label }}</span>
          <svg-icon @click.stop="removeHandler(idx)" v-if="!disabled" icon-class="times"></svg-icon>
          <svg-icon v-else icon-class="times"></svg-icon>
        </div>
        <div :class="searchItemClasses">
          <input
            v-model="selectedLabel"
            :disabled="disabled"
            @input="inputHandler"
            @keyup.delete="deleteHandler"
            :class="searchInputClasses"
            :placeholder="placeholderText"
            @focusin="focusHandler"
            @focusout="blurHandler"
            type="text"
            autocomplete="off"
          />
        </div>
      </div>
      <div v-else :class="searchItemClasses">
        <input
          v-model="selectedLabel"
          :disabled="disabled"
          @input="inputHandler"
          :placeholder="placeholderText"
          :class="searchInputClasses"
          @focusin="focusHandler"
          @focusout="blurHandler"
          type="text"
          autocomplete="off"
        />
      </div>
      <div v-if="suffix" @click="focusHandler" class="suffix-icon">
        <svg-icon :class="suffixClasses" v-if="sufLoading" icon-class="circle-notch"></svg-icon>
        <svg-icon :class="suffixClasses" v-else :icon-class="suffix"></svg-icon>
      </div>
    </div>
    <div :class="selectListWrapperClasses" v-show="false">
      <c4it-scrollbar v-if="multiple" is-vertical>
        <c4it-select-list
          :options="options"
          :multiple="true"
          @selected-list="selectedListHandler"
          :list="selectedList"
        />
      </c4it-scrollbar>
      <c4it-scrollbar v-else is-vertical>
        <c4it-select-list
          :options="options"
          @selected-item="selectedItemHandler"
          :value="selectedValue"
        />
      </c4it-scrollbar>
    </div>
  </div>
</template>

<script>
import tippy, { sticky } from 'tippy.js';
import c4itSelectList from '@/components/SelectList/Index.vue';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';
import emitter from '@/mixins/emitter';
import deepClone from '@/utils/deepClone';

export default {
  /*eslint-disable*/
  name: `${ns}Select`,
  components: { c4itSelectList, c4itScrollbar },
  /*eslint-enable*/
  mixins: [emitter],
  model: {
    prop: 'context',
    event: 'change',
  },
  props: {
    validateEvent: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    /*eslint-disable*/
    context: {
      type: [String, Array],
    },
    /*eslint-enable*/
    suffix: {
      type: String,
      default: '',
    },
    sufLoading: {
      type: Boolean,
      default: false,
    },
    remoteSearch: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    debounce: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      labelClassArr: [],
      selectClassArr: [],
      searchItemClassArr: [],
      selectFieldClassArr: [],
      selectedGroupClassArr: [],
      selectedItemClassArr: [],
      selectListWrapperClassArr: [],
      searchInputClassArr: [],
      suffixClassArr: [],
      selectedLabel: '',
      selectedValue: '',
      slots: null,
      popoverId: '',
      popoverElm: null,
      targetElm: null,
      timeoutId: null,
      instance: null,
      selectedList: [],
      input: '',
      inputLength: -1,
    };
  },

  computed: {
    selectFieldClasses() {
      return this.selectFieldClassArr;
    },

    selectClasses() {
      return this.selectClassArr;
    },

    labelClasses() {
      return this.labelClassArr;
    },

    selectedGroupClasses() {
      return this.selectedGroupClassArr;
    },

    selectedItemClasses() {
      return this.selectedItemClassArr;
    },

    searchItemClasses() {
      return this.searchItemClassArr;
    },

    searchInputClasses() {
      return this.searchInputClassArr;
    },

    selectListWrapperClasses() {
      return this.selectListWrapperClassArr;
    },

    suffixClasses() {
      return this.suffixClassArr;
    },

    placeholderText() {
      return this.selectedList.length > 0 ? '' : this.placeholder;
    },
  },

  watch: {
    sufLoading: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.suffixClassArr.push(`${ns}-loading`);
        } else {
          this.suffixClassArr.pop();
        }
        /* eslint-enable */
      },
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
      },
    },

    context: {
      immediate: true,
      handler(val) {
        if (typeof val === 'string') {
          for (let option of this.options) {
            if (option.value === val) {
              this.selectedLabel = option.label;
              this.selectedValue = option.value;
            }
          }
        } else {
          this.selectedList = [];
          for (let item of val) {
            for (let option of this.options) {
              if (item === option.value) {
                this.selectedList.push(deepClone(option));
              }
            }
          }
        }
      },
    },
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
      this.labelClassArr.push(`${ns}-label`);
      this.selectClassArr.push(`${ns}-select`);
      this.selectFieldClassArr.push(`${ns}-select-field`);
      this.selectedGroupClassArr.push(`${ns}-selected-group`);
      this.selectedItemClassArr.push(`${ns}-selected-item`);
      this.searchInputClassArr.push(`${ns}-search-input`);
      this.searchItemClassArr.push(`${ns}-search-item`);
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.sufLoading) {
        this.suffixClassArr.push(`${ns}-loading`);
      }
      if (this.disabled) {
        this.selectClassArr.push(`${ns}-disabled`);
      }
      if (this.multiple) {
        this.selectClassArr.push(`${ns}-select-multiple`);
        this.selectListWrapperClassArr.push(`${ns}-select-list-multiple-wrapper`);
      } else {
        this.selectClassArr.push(`${ns}-select-default`);
        this.selectListWrapperClassArr.push(`${ns}-select-list-wrapper`);
      }
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
        trigger: 'click',
        arrow: false,
        placement: 'bottom-start',
        interactive: true,
        hideOnClick: true,
        theme: 'select',
        sticky: true,
        offset: [0, 0],
        plugins: [sticky],
        maxWidth: 'none',
        duration: 0,
        delay: 0,
        onMount(instance) {
          const popoverWidth = instance.popper.offsetWidth;
          const referenceWidth = instance.reference.offsetWidth;
          if (popoverWidth > referenceWidth) {
            instance.popper.style['width'] = `${popoverWidth}px`;
          } else {
            instance.popper.style['width'] = `${referenceWidth}px`;
          }
        },
        onClickOutside: (instance) => {
          instance.hide();
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
          if (this.multiple) {
            this.$emit(
              'change',
              this.selectedList.map((item) => item.value)
            );
          }
        },
      });

      if (this.disabled) {
        this.instance.disable();
      }
    },

    focusHandler() {
      this.$el.classList.add('focus');
      document.getElementById(this._uid).querySelector('input').focus();
    },

    blurHandler() {
      this.$el.classList.remove('focus');
    },

    removeHandler(idx) {
      this.selectedList.splice(idx, 1);
    },

    selectedItemHandler(value) {
      this.$emit('change', value);
      document.getElementById(this._uid).click();
    },

    selectedListHandler(list) {
      this.selectedList = [];
      for (let idx of list) {
        this.selectedList.push(deepClone(this.options[Number(idx)]));
      }
    },

    inputHandler() {
      this.inputLength = this.selectedLabel.length;
      if (this.remoteSearch) {
        if (this.debounce && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.$emit('search', this.selected);
        }, Number(this.debounce));
      } else {
        this.$emit('change', this.selectedLabel);
      }
    },

    deleteHandler($event) {
      if (this.inputLength < 0 && this.selectedList.length) {
        this.selectedList.pop();
        this.$emit(
          'change',
          this.selectedList.map((item) => item.value)
        );
      }
      this.inputLength -= 1;
    },
  },
};
</script>
