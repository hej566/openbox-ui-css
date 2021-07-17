<template>
  <div :class="selectListClasses" :id="_uid" v-if="multiple">
    <div
      v-for="(item, idx) in deepCloneOptions"
      :key="idx"
      :class="selectItemClassObj[idx]"
      @click.self="selectListHandler(item, idx)"
    >
      <c4it-checkbox
        :aria="false"
        v-model="checked[idx]"
        @change="changeHandler(item)"
        :disabled="item.type === 'disabled'"
        shape="circle"
      >
        <span :class="{ checked: checked[idx] }">{{ item.label }}</span>
      </c4it-checkbox>
    </div>
  </div>
  <div :class="selectListClasses" :id="_uid" v-else>
    <div
      v-for="(item, idx) in deepCloneOptions"
      :key="idx"
      :class="selectItemClassObj[idx]"
      @click="selectItemHandler(item)"
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
  name: `${ns}SelectList`,
  /*eslint-enable*/
  components: { c4itCheckbox },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  data() {
    return {
      selectListClassArr: [],
      selectItemClassObj: {},
      items: null,
      checked: {}
    };
  },

  computed: {
    selectListClasses() {
      return this.selectListClassArr;
    },
    deepCloneOptions() {
      return deepClone(this.options);
    }
  },

  watch: {
    list: {
      immediate: true,
      handler(val) {
        this.deepCloneOptions.forEach((option, idx) => {
          this.$set(this.checked, idx, false);
        });
        for (let item of val) {
          this.deepCloneOptions.forEach((option, idx) => {
            if (item.value === option.value) {
              this.$set(this.checked, idx, true);
            }
          });
        }
        this.deepCloneOptions.forEach((option, idx) => {
          /*eslint-disable*/
          this.$set(this.selectItemClassObj, idx, [`${ns}-select-item`]);
           /*eslint-enable*/
          this.selectItemClassObj[idx].push(`${option.type}`);
          if (
            option.value === val &&
            !option.type.split(' ').includes('disabled')
          ) {
            this.selectItemClassObj[idx].push(`active`);
          }
        });
      }
    },

    value: {
      immediate: true,
      handler(val) {
        this.deepCloneOptions.forEach((option, idx) => {
          /*eslint-disable*/
          this.$set(this.selectItemClassObj, idx, [`${ns}-select-item`]);
          /*eslint-enable*/
          this.selectItemClassObj[idx].push(`${option.type}`);
          if (
            option.value === val &&
            !option.type.split(' ').includes('disabled')
          ) {
            this.selectItemClassObj[idx].push(`active`);
          }
        });
      }
    }
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.selectListClassArr.push(`${ns}-select-list`);
      /* eslint-enable */
    },

    selectItemHandler({ value, type }, idx) {
      if (!type.split(' ').includes('disabled')) {
        this.$emit('selected-item', value);
      }
    },

    selectListHandler({ value, type }, idx) {
      if (type !== 'disabled') {
        this.checked[idx] = !this.checked[idx];
        const selectedList = Object.entries(this.checked)
          .filter(item => item[1])
          .map(item => item[0]);
        this.$emit('selected-list', selectedList);
      }
    },

    changeHandler({ type }) {
      if (type !== 'disabled') {
        const selectedList = Object.entries(this.checked)
          .filter(item => item[1])
          .map(item => item[0]);
        this.$emit('selected-list', selectedList);
      }
    }
  }
};
</script>
