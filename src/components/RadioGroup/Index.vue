<template>
  <div :class="radioGroupClassList" @change="change">
    <slot></slot>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}RadioGroup`,
  /*eslint-enable*/
  mixins: [emitter],

  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      radioGroupClassArr: []
    };
  },

  computed: {
    radioGroupClassList() {
      return this.radioGroupClassArr;
    }
  },

  created() {
    this.init();
  },

  mounted() {
    this.update();
  },

  methods: {
    init() {
      /* eslint-disable */
      this.radioGroupClassArr.push(`${ns}-radio-group`);
      /* eslint-enable */
    },

    update() {
      for (let child of this.$children) {
        const { _uid } = child;
        document.getElementById(_uid).checked = true;
      }
    },

    change($event) {
      this.$emit('change', $event.target.value);
      this.dispatch('C4itFormItem', 'c4it.form.change', [$event.target.value]);
    }
  }
};
</script>
