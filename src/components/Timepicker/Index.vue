<template>
  <div :class="timepickerClasses" :id="_uid">
    <div :class="timepickerFieldClasses" @click="focusHandler">
      <input
        :placeholder="placeholder"
        v-model.trim="selected"
        @focusout="blurHandler"
        @focusin="focusHandler"
        @input="inputHandler"
        :disabled="disabled"
        autocomplete="off"
        type="text"
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
          v-if="showRemove"
          @click.stop="clearHandler"
          @mouseleave="showHandler"
          icon-class="times-circle"
        ></svg-icon>
      </div>
    </div>
    <div :class="timerWrapperClasses" v-show="false">
      <c4it-timer
        @confirm="confirmHandler"
        @choose-timer="chooseTimer"
        :timer="timer"
        :open="open"
      />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import c4itTimer from '@/components/Timer/Index.vue';
import moment from '@/utils/moment';
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}Timepicker`,
  /*eslint-enable*/
  components: { c4itTimer },
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
      timepickerFieldClassArr: [],
      timepickerClassArr: [],
      timerWrapperClassArr: [],
      prefixClassArr: [],
      suffixClassArr: [],
      open: false,
      selected: null,
      popoverId: '',
      popoverElm: null,
      targetElm: null,
      hour: null,
      minute: null,
      second: null,
      timer: [],
      showIcon: true,
      showRemove: false,
      instance: null
    };
  },

  computed: {
    timepickerFieldClasses() {
      return this.timepickerFieldClassArr;
    },

    timepickerClasses() {
      return this.timepickerClassArr;
    },

    timerWrapperClasses() {
      return this.timerWrapperClassArr;
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
        if (val && moment(val, 'HH:mm:ss', true).isValid()) {
          this.parseContext(val);
        }
      }
    },
    selected: {
      handler(val) {
        if (val && moment(val, 'HH:mm:ss', true).isValid()) {
          this.parseContext(val);
        }
        if (!val) {
          this.timer = [];
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
      this.timepickerFieldClassArr.push(`${ns}-timepicker-field`);
      this.timepickerClassArr.push(`${ns}-timepicker`);
      this.timerWrapperClassArr.push(`${ns}-timer-wrapper`)
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.prefix) {
        this.prefixClassArr.push(`${ns}-prefix`);
      }
      if (this.disabled) {
        this.timepickerClassArr.push(`${ns}-disabled`)
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
        theme: 'timepicker',
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
      this.timer = val.split(':');
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

    inputHandler(val) {
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

    chooseTimer(val) {
      this.selected = val;
    },

    confirmHandler() {
      this.$emit('confirm', this.selected);
      document.getElementById(this._uid).click();
    }
  }
};
</script>
