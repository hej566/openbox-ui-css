<template>
  <div :class="checkboxGroupClasses" @change="change">
    <slot></slot>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter';

export default {
  /*eslint-disable*/
  name: `${ns}CheckboxGroup`,
  /*eslint-enable*/
  mixins: [emitter],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      checkboxGroupClassArr: [],
    };
  },

  computed: {
    checkboxGroupClasses() {
      return this.checkboxGroupClassArr;
    },
  },

  watch: {
    checked: {
      handler() {
        this.update();
      },
    },
  },

  created() {
    this.initClasses();
  },

  mounted() {
    this.update();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.checkboxGroupClassArr.push(`${ns}-checkbox-group`);
      /* eslint-enable */
    },
    update() {
      if (this.checked.length !== 0) {
        for (let value of this.checked) {
          for (let child of this.$children) {
            if (value === child.value) {
              const { _uid } = child;
              document.getElementById(_uid).checked = true;
            }
          }
        }
      } else {
        for (let child of this.$children) {
          const { _uid } = child;
          document.getElementById(_uid).checked = false;
        }
      }
      this.$emit('change', this.checked);
    },
    change($event) {
      if ($event.target.checked) {
        this.checked.push($event.target.dataset.value);
      } else {
        const { value } = $event.target.dataset;
        let unchecked;
        this.checked.forEach((item, idx) => {
          if (item === value) unchecked = idx;
        });
        this.checked.splice(unchecked, 1);
      }
      this.dispatch('C4itFormItem', 'c4it.form.change', [this.checked]);
    },
  },
};
</script>

<style lang="scss"></style>
