<template>
  <div :class="dropdownClasses" :id="_uid" tabindex="0">
    <div :class="dropdownFieldClasses">
      <div :class="labelClasses">
        {{ label }}
      </div>
      <div v-if="suffix" class="suffix-icon">
        <svg-icon :class="suffixClasses" :icon-class="suffix"></svg-icon>
      </div>
    </div>
    <div :class="dropdownListWrapperClasses" v-show="false">
      <c4it-scrollbar is-vertical>
        <c4it-dropdown-list
          :options="options"
          @selected-item="selectedHandler"
          :value="selectedValue"
        />
      </c4it-scrollbar>
    </div>
  </div>
</template>

<script>
import tippy, { sticky } from 'tippy.js';
import c4itDropdownList from '@/components/DropdownList/Index.vue';
import c4itScrollbar from '@/components/Scrollbar/Index.vue';
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Dropdown`,
  components: { c4itDropdownList, c4itScrollbar },
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
    context: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dropdownFieldClassesArr: [],
      dropdownClassesArr: [],
      dropdownListWrapperClassesArr: [],
      labelClassesArr: [],
      suffixClassesArr: [],
      selectedValue: '',
      popoverId: '',
      popoverElm: null,
      targetElm: null,
      selectedList: [],
      instance: null,
    };
  },

  computed: {
    dropdownFieldClasses() {
      return this.dropdownFieldClassesArr;
    },

    dropdownClasses() {
      return this.dropdownClassesArr;
    },

    labelClasses() {
      return this.labelClassesArr;
    },

    dropdownListWrapperClasses() {
      return this.dropdownListWrapperClassesArr;
    },

    suffixClasses() {
      return this.suffixClassesArr;
    },
  },

  watch: {
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
        this.selectedValue = val;
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
      this.labelClassesArr.push(`${ns}-label`);
      if (this.suffix) {
        this.suffixClassesArr.push(`${ns}-suffix`);
      }
      if (this.disabled) {
        this.dropdownClassesArr.push(`${ns}-disabled`);
      }
      if (this.type === 'text') {
        this.dropdownClassesArr.push(`${ns}-dropdown-text`);
      } else {
        this.dropdownClassesArr.push(`${ns}-dropdown-default`);
      }
      this.dropdownFieldClassesArr.push(`${ns}-dropdown-field`);
      this.dropdownClassesArr.push(`${ns}-dropdown`);
      this.dropdownListWrapperClassesArr.push(`${ns}-dropdown-list-wrapper`);
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
        theme: 'dropdown',
        sticky: true,
        offset: [0, 0],
        plugins: [sticky],
        maxWidth: 'none',
        duration: 0,
        delay: 0,
        onMount: (instance) => {
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
        },
      });

      if (this.disabled) {
        this.instance.disable();
      }
    },

    selectedHandler(value) {
      this.$emit('change', value);
      document.getElementById(this._uid).click();
    },
  },
};
</script>
