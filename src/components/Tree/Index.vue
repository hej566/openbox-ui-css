<template>
  <div :class="treeClasses">
    <c4it-tree-node
      v-for="(node, idx) in treeData"
      :key="idx"
      :index="`${idx + 1}`"
      :node="node"
    />
  </div>
</template>

<script>
import c4itTreeNode from '@/components/TreeNode/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Tree`,
  /*eslint-enable*/
  components: {
    c4itTreeNode
  },
  provide: function() {
    return {
      fetchData: this.fetchData,
      removeData: this.removeData
    };
  },

  props: {
    treeData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      treeClassArr: []
    };
  },

  computed: {
    treeClasses() {
      return this.treeClassArr;
    }
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      /*eslint-disable*/
      this.treeClassArr.push(`${ns}-tree`);
      /*eslint-enable*/
    },

    fetchData(node) {
      this.$emit('fetch-data', node);
    },

    removeData(node) {
      this.$emit('remove-data', node);
    }
  }
};
</script>
