<template>
  <div :class="dropdownListClasses" :id="_uid">
    <div
      v-for="(item, idx) in deepCloneOptions"
      :key="idx"
      :class="dropdownItemClassObj[idx].join(' ')"
      @click.stop="clickHandler(item)"
    >
      <div>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import c4itCheckbox from '@/components/Checkbox/Index.vue';
import deepClone from '@/utils/deepClone';

export default {
  /*eslint-disable*/
  name: `${ns}DropdownList`,
  /*eslint-enable*/
  components: { c4itCheckbox },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },

    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      dropdownListClassArr: [],
      dropdownItemClassObj: {},
    };
  },

  computed: {
    dropdownListClasses() {
      return this.dropdownListClassArr;
    },
    deepCloneOptions() {
      return deepClone(this.options);
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.deepCloneOptions.forEach((option, idx) => {
          /*eslint-disable*/
          this.$set(this.dropdownItemClassObj, idx, [`${ns}-dropdown-item`]);
          /*eslint-enable*/
          this.dropdownItemClassObj[idx].push(`${option.type}`);
          if (option.value === val && !option.type.split(' ').includes('disabled')) {
            this.dropdownItemClassObj[idx].push(`active`);
          }
        });
      },
    },
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.dropdownListClassArr.push(`${ns}-dropdown-list`);
      /* eslint-enable */
    },

    clickHandler({ value, type }) {
      if (!type.split(' ').includes('disabled')) {
        this.$emit('selected-item', value);
      }
    },
  },
};
</script>
