<template>
  <div class="breadcrumb">
    <a
      v-for="(item, index) in items"
      :class="customClass"
      @click="$emit('click', item)"
      :key="index"
      class="bread_link"
    >
      <span :class="textClass" class="link_text" style="float: left">{{ item.text }}</span>
      <div
        :class="separateClass"
        v-if="index < items.length - 1"
        class="separate"
        style="float: left"
      >
        <svg-icon
          :icon-class="separateIcon"
          :class="separateIconClass"
          class="separateIconClass"
        ></svg-icon>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Breadcrumb`,
  /*eslint-enable*/
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    customClass: {
      type: String,
      default: '',
    },
    textClass: {
      type: String,
      default: '',
    },
    separateClass: {
      type: String,
      default: '',
    },
    separateIcon: {
      type: String,
      default: 'arrow-right',
    },
    separateIconClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
};
</script>
