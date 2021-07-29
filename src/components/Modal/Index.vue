<template>
  <div :class="modalClassList" @click="clickHandler">
    <div :class="modalWrapperClassList" v-if="open">
      <div :class="modalContentClassList">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Modal`,
  /*eslint-enable*/
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      modalClassArr: [],
      modalWrapperClassArr: [],
      modalContentClassArr: [],
      instance: null,
      popoverElm: null,
      targetElm: null,
    };
  },

  computed: {
    modalClassList() {
      return this.modalClassArr;
    },
    modalContentClassList() {
      return this.modalContentClassArr;
    },
    modalWrapperClassList() {
      return this.modalWrapperClassArr;
    },
  },

  watch: {
    open: {
      handler(val) {
        if (val) {
          this.showModal();
        } else {
          this.hideModal();
        }
      },
    },
  },

  created() {
    this.init();
  },

  mounted() {
    this.popoverElm = this.$el;
    this.targetElm = document.getElementsByTagName('html')[0];
  },

  destroyed() {
    console.log('destroyed');
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.modalClassArr.push(`${ns}-modal`);
      this.modalWrapperClassArr.push(`${ns}-modal-wrapper`);
      this.modalContentClassArr.push(`${ns}-modal-content`);
      /*eslint-enable*/
    },

    clickHandler() {
      this.$emit('close');
    },

    showModal() {
      this.targetElm.appendChild(this.popoverElm);
    },

    hideModal() {
      this.targetElm.removeChild(this.popoverElm);
    },
  },
};
</script>
