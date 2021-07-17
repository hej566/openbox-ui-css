<template>
  <div :class="accordionGroupClassList" @blur="blurHandler" tabindex="0">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: `${ns}AccordionGroup`,
  /* eslint-enable */
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      accordionGroupClassArr: [],
      groupItems: []
    };
  },

  computed: {
    accordionGroupClassList() {
      return this.accordionGroupClassArr;
    }
  },

  created() {
    this.init();
  },

  mounted() {
    if (Object.keys(this.$slots).length) {
      this.groupItems = this.$slots.default.filter(item => {
        return item.componentInstance;
      });
    }
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.accordionGroupClassArr.push(`${ns}-accordion-group`);
      /*eslint-enable*/
    },
    select(target) {
      /*eslint-disable*/
      const targetId = target.dataset['id'];
      if (targetId) {
        for (let item of this.groupItems) {
          let itemHeaderElm = item.elm.querySelector(`.${ns}-accordion-header`);
          let { id } = itemHeaderElm.dataset;
          if (id !== targetId && itemHeaderElm.classList.contains('open')) {
            item.child.toggleHandler();
            
          } 
          if (id === targetId) {
            item.child.toggleHandler();
          } 
        }
      }
      /*eslint-enable*/
    },

    blurHandler($event) {
      /*eslint-disable*/
      for (let item of this.groupItems) {
        let itemHeaderElm = item.elm.querySelector(`.${ns}-accordion-header`);
        let itemBodyElm = item.elm.querySelector(`.${ns}-accordion-body`);
        let cascaderWrapperElm = itemBodyElm.querySelector(`.${ns}-cascader-nav-group-wrapper`)
        if (cascaderWrapperElm && itemHeaderElm.classList.contains('open')) {
          item.child.toggleHandler('clear');
        }
      }
      /*eslint-enable*/
    }
  }
};
</script>
