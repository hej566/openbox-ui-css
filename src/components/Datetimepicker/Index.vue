<template>
  <div :class="datetimepickerClasses" :id="_uid">
    <div :class="datetimepickerFieldClasses" @click="focusHandler">
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
        <svg-icon :icon-class="suffix" v-if="showIcon" @mouseover="hideHandler"></svg-icon>
        <svg-icon
          @click.stop="clearHandler"
          v-if="showRemove"
          @mouseleave="showHandler"
          icon-class="times-circle"
        ></svg-icon>
      </div>
    </div>
    <div :class="datetimerWrapperClasses" v-show="false">
      <c4it-datetimer
        @choose-datetimer="chooseDatetimer"
        @confirm="confirmDatetimer"
        :dater="dater"
        :timer="timer"
        :open="open"
      />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import c4itDatetimer from '@/components/Datetimer/Index.vue';
import emitter from '@/mixins/emitter';
import moment from '@/utils/moment';

export default {
  /*eslint-disable*/
  name: `${ns}Datetimepicker`,
  /*eslint-enable*/
  components: { c4itDatetimer },
  mixins: [emitter],

  model: {
    prop: 'context',
    event: 'change',
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    context: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      datetimepickerFieldClassArr: [],
      datetimepickerClassArr: [],
      datetimerWrapperClassArr: [],
      prefixClassArr: [],
      suffixClassArr: [],
      datetimerId: '',
      datetimerElm: null,
      datetimerTippy: null,
      hour: null,
      minute: null,
      second: null,
      year: null,
      month: null,
      dateInMonth: null,
      timer: [],
      dater: [],
      selected: '',
      open: false,
      showIcon: true,
      showRemove: false,
      instance: null,
    };
  },

  computed: {
    datetimepickerFieldClasses() {
      return this.datetimepickerFieldClassArr;
    },

    datetimepickerClasses() {
      return this.datetimepickerClassArr;
    },

    datetimerWrapperClasses() {
      return this.datetimerWrapperClassArr;
    },

    prefixClasses() {
      return this.prefixClassArr;
    },

    suffixClasses() {
      return this.suffixClassArr;
    },

    isNotEmpty() {
      return this.selected !== '';
    },
  },

  watch: {
    context: {
      immediate: true,
      handler(val) {
        this.selected = val;
        if (val && moment(val, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
          this.parseContext(val);
          // this.dispatch('C4itFormItem', 'c4it.form.change', val);
        }
      },
    },
    selected: {
      handler(val) {
        if (val && moment(val, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
          this.parseContext(val);
        }
        if (!val) {
          this.dater = [];
          this.timer = [];
        }
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
      this.datetimepickerFieldClassArr.push(`${ns}-datetimepicker-field`);
      this.datetimepickerClassArr.push(`${ns}-datetimepicker`);
      this.datetimerWrapperClassArr.push(`${ns}-datetime-wrapper`);
      if (this.suffix) {
        this.suffixClassArr.push(`${ns}-suffix`);
      }
      if (this.prefix) {
        this.prefixClassArr.push(`${ns}-prefix`);
      }
      if (this.disabled) {
        this.datetimepickerClassArr.push(`${ns}-disabled`);
      }
      /* eslint-enable */
    },

    initTippy() {
      this.popoverId = this.$children[1]._uid;
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
        theme: 'datetimepicker',
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
        },
      });

      if (this.disabled) {
        this.instance.disable();
      }
    },

    parseContext(val) {
      const tmp = val.split(' ');
      this.dater = tmp[0].split('-');
      this.timer = tmp[1].split(':');
    },

    focusHandler() {
      this.$el.classList.add('focus');
      document.getElementById(this._uid).querySelector('input').focus();
      this.$emit('focusin');
    },

    blurHandler() {
      this.$el.classList.remove('focus');
      this.$emit('focusout');
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

    chooseDatetimer(val) {
      this.selected = val;
    },

    confirmDatetimer() {
      this.$emit('confirm', this.selected);
      document.getElementById(this._uid).click();
    },
  },
};
</script>
