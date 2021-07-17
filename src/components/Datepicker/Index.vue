<template>
  <div :class="datepickerClasses" :id="_uid">
    <div :class="datepickerFieldClasses" @click="focusHandler">
      <input
        :placeholder="placeholder"
        v-model.trim="selected"
        @focusout="blurHandler"
        @focusin="focusHandler"
        @input="inputHandler"
        :disabled="disabled"
        type="text"
        autocomplete="off"
      />
      <svg-icon
        :class="prefixClasses"
        v-if="prefix"
        :icon-class="prefix"
        @click="focusHandler"
      ></svg-icon>
      <div :class="suffixClasses" v-if="suffix" @click="focusHandler">
        <svg-icon
          :icon-class="suffix"
          v-if="showIcon"
          @mouseover="hideHandler"
        ></svg-icon>
        <svg-icon
          @click.stop="clearHandler"
          v-if="showRemove"
          @mouseleave="showHandler"
          icon-class="times-circle"
        ></svg-icon>
      </div>
    </div>
    <div :class="dateWrapperClasses" v-show="false">
      <c4it-dater
        @choose-dater="chooseDater"
        @confirm="confirmDater"
        :dater="dater"
        :open="open"
      />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import c4itDater from '@/components/Dater/Index.vue';
import c4itTimer from '@/components/Timer/Index.vue';
import emitter from '@/mixins/emitter';
import moment from '@/utils/moment';

export default {
  /*eslint-disable*/
  name: `${ns}Datepicker`,
  /*eslint-enable*/
  components: { c4itDater, c4itTimer },
  mixins: [emitter],

  model: {
    prop: 'context',
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    context: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    timepicker: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      datepickerFieldClassArr: [],
      datepickerClassArr: [],
      dateWrapperClassArr: [],
      prefixClassArr: [],
      suffixClassArr: [],
      selected: null,
      popoverId: '',
      popoverElm: null,
      targetElm: null,
      dater: [],
      year: null,
      month: null,
      dateInMonth: null,
      open: false,
      showIcon: true,
      showRemove: false,
      instance: null
    };
  },

  computed: {
    datepickerFieldClasses() {
      return this.datepickerFieldClassArr;
    },

    datepickerClasses() {
      return this.datepickerClassArr;
    },

    dateWrapperClasses() {
      return this.dateWrapperClassArr;
    },

    prefixClasses() {
      return this.prefixClassArr;
    },

    suffixClasses() {
      return this.suffixClassArr;
    },

    isNotEmpty() {
      return this.selected !== '';
    }
  },

  watch: {
    context: {
      immediate: true,
      handler(val) {
        this.selected = val;
        if (val && moment(val, 'YYYY-MM-DD', true).isValid()) {
          this.parseContext(val);
        }
      }
    },
    selected: {
      handler(val) {
        if (val && moment(val, 'YYYY-MM-DD', true).isValid()) {
          this.parseContext(val);
        }
        if (!val) {
          this.dater = [];
        }
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
      this.datepickerFieldClassArr.push(`${ns}-datepicker-field`);
      this.datepickerClassArr.push(`${ns}-datepicker`);
      this.dateWrapperClassArr.push(`${ns}-date-wrapper`)
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.prefix) {
        this.prefixClassArr.push(`${ns}-prefix`);
      }
      if (this.disabled) {
        this.datepickerClassArr.push(`${ns}-disabled`)
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
        theme: 'datepicker',
        offset: [0, 0],
        duration: 0,
        delay: 0,
        onShow: () => {
          this.open = true;
          if (
            this.targetElm.children[0].classList &&
            !this.targetElm.children[0].classList.contains('open')
          ) {
            this.targetElm.children[0].classList.add('open');
          }
        },
        onHide: () => {
          this.open = false;
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

    parseContext(val) {
      this.dater = val.split('-');
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
      this.$emit('input', this.selected);
    },

    clearHandler() {
      this.selected = '';
    },

    hideHandler() {
      if (this.isNotEmpty) {
        this.showIcon = false;
        this.showRemove = true;
      }
    },

    showHandler() {
      this.showIcon = true;
      this.showRemove = false;
    },

    chooseDater(val) {
      this.selected = val;
    },

    confirmDater() {
      this.$emit('confirm', this.selected);
      document.getElementById(this._uid).click();
    }
  }
};
</script>
