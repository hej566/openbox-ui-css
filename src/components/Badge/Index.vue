<template>
  <div :class="badgeClassList">
    <div v-if="count" class="count">
      <div>{{ count }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Badge`,
  /*eslint-enable*/
  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      badgeClassArr: []
    };
  },

  computed: {
    badgeClassList() {
      return this.badgeClassArr;
    }
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      /* eslint-disable */
      this.badgeClassArr.push(`${ns}-badge`)
      /* eslint-enable */
    }
  }
};
</script>
