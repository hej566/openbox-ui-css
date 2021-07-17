<template>
  <div :class="pageWrapClassList">
    <div v-show="prePage" @click="goPrePage" :class="computedliPageClassLeft()">
      <svg-icon icon-class="angle-left" class="page-left-arrow"></svg-icon>
    </div>
    <div :class="pageInnerClassList">
      <div
        @mouseenter="hoverIndex = i"
        @mouseleave="hoverIndex = null"
        v-for="(i, index) in showPageBtn"
        :key="index"
        :class="computedClass(i)"
        @click="goPage(i)"
      >
        <a v-if="!isNaN(Number(i))" :class="noPointerClassList">{{ i }}</a>
        <a v-else-if="i === 'left'" :class="computedQuickClass(i)">
          <svg-icon
            v-if="i === hoverIndex"
            icon-class="angle-double-left"
            class="angle-double-left"
          ></svg-icon>
          <span v-else>···</span>
        </a>
        <a v-else-if="i === 'right'" :class="computedQuickClass(i)">
          <svg-icon
            v-if="i === hoverIndex"
            icon-class="angle-double-right"
            class="angle-double-right"
          ></svg-icon>
          <span v-else>···</span>
        </a>
      </div>
    </div>
    <div
      v-show="nextPage"
      @click="goNextPage"
      :class="computedliPageClassRight()"
    >
      <svg-icon icon-class="angle-right" class="page-right-arrow"></svg-icon>
    </div>
  </div>
</template>

<script>
const DEFAULT_PER_PAGE = 20;
const DEFAULT_TOTAL_ROWS = 500;
const DEFAULT_CURRENT_PAGE = 1;
export default {
  /*eslint-disable*/
  name: `${ns}Pagination`,
  /*eslint-enable*/
  props: {
    size: {
      type: [Number, String],
      default: DEFAULT_PER_PAGE
    },
    totalCount: {
      type: [Number, String],
      default: DEFAULT_TOTAL_ROWS
    },
    current: {
      type: [Number, String],
      default: DEFAULT_CURRENT_PAGE
    }
  },
  data() {
    return {
      pageWrapClassListArr: [],
      noPointerClassListArr: [],
      pageInnerClassListArr: [],
      perPage: DEFAULT_PER_PAGE,
      total: DEFAULT_TOTAL_ROWS,
      currentPage: DEFAULT_CURRENT_PAGE,
      leftText: '<',
      rightText: '>',
      hoverIndex: null
    };
  },
  computed: {
    pageInnerClassList() {
      return this.pageInnerClassListArr;
    },
    pageWrapClassList() {
      return this.pageWrapClassListArr;
    },
    noPointerClassList() {
      return this.noPointerClassListArr;
    },
    totalPage() {
      return Math.ceil(this.total / this.perPage);
    },
    prePage() {
      // return this.currentPage !== 0 && this.total > this.perPage;
      return true;
    },
    nextPage() {
      // return this.currentPage + this.perPage < this.total && this.total;
      return true;
    },
    showPageBtn() {
      let pageNum = this.totalPage,
        index = this.currentPage,
        arr = [];
      if (pageNum === 0) {
        return [1];
      }
      if (pageNum <= 7) {
        for (let i = 1; i <= pageNum; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (index <= 4) return [1, 2, 3, 4, 5, 6, 'right', pageNum];
      if (index >= pageNum - 3)
        return [
          1,
          'left',
          pageNum - 5,
          pageNum - 4,
          pageNum - 3,
          pageNum - 2,
          pageNum - 1,
          pageNum
        ];
      return [
        1,
        'left',
        index - 2,
        index - 1,
        index,
        index + 1,
        index + 2,
        'right',
        pageNum
      ];
    }
  },
  watch: {
    totalCount(value) {
      this.total = value;
    },
    current(value) {
      if (value > 1 && (value - 1) * this.perPage < this.totalCount) {
        this.currentPage = value;
      } else {
        this.currentPage = 1;
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    computedClass(i) {
      const classMap = {};
      /*eslint-disable*/
      classMap[`${ns}-page-temp`] = true;
      classMap[`${ns}-page-active`] = i === this.currentPage;
      classMap[`${ns}-page-pointer`] = true;
      classMap[`${ns}-page-hover`] = !isNaN(Number(i)) && i !== this.currentPage;
      /*eslint-enable*/
      return classMap;
    },
    computedQuickClass(i) {
      const classMap = {};
      /*eslint-disable*/
      classMap[`${ns}-quick`] = true;
      if (i === 'left') {
        classMap[`${ns}-quick-left`] = true;
      } else {
        classMap[`${ns}-quick-right`] = true;
      }
      /*eslint-enable*/
      return classMap;
    },
    computedliPageClassLeft() {
      const classMap = {};
      /*eslint-disable*/
      classMap[`${ns}-out-btn`] = true;
      classMap[`${ns}-out-btn-disable`] = this.currentPage === 1;
      /*eslint-enable*/
      return classMap;
    },
    computedliPageClassRight() {
      const classMap = {};
      /*eslint-disable*/
      classMap[`${ns}-out-btn`] = true;
      classMap[`${ns}-out-btn-disable`] = (this.currentPage === this.totalPage) || (this.totalPage === 0);
      /*eslint-enable*/
      return classMap;
    },
    init() {
      /*eslint-disable*/
      this.pageWrapClassListArr.push(`${ns}-page-wrap`)
      this.noPointerClassListArr.push(`${ns}-no-pointer`)
      this.pageInnerClassListArr.push(`${ns}-inner-btn`)
      if (this.current > 1 && (this.current - 1) * this.perPage < this.totalCount) {
        this.currentPage = this.current;
      } else {
        this.currentPage = 1;
      }
      this.perPage = this.size
      this.total = this.totalCount
      /*eslint-enable*/
    },
    goPage(i) {
      if (i === this.currentPage) return;
      if (i === 'left') {
        const pre = this.currentPage;
        this.currentPage = this.currentPage -= 5;
        if (this.currentPage <= 1) {
          this.currentPage = 1;
        }
        this.$emit('current-change', this.currentPage, pre);
      } else if (i === 'right') {
        const pre = this.currentPage;
        this.currentPage = this.currentPage += 5;
        if (this.currentPage >= this.totalPage) {
          this.currentPage = this.totalPage;
        }
        this.$emit('current-change', this.currentPage, pre);
      } else {
        const pre = this.currentPage;
        this.currentPage = i;
        this.$emit('current-change', i, pre);
      }
    },
    goPrePage() {
      if (this.currentPage > 1) {
        const pre = this.currentPage;
        this.currentPage -= 1;
        this.$emit('current-change', this.currentPage, pre);
      }
    },
    goNextPage() {
      if (this.currentPage < this.totalPage) {
        const pre = this.currentPage;
        this.currentPage += 1;
        this.$emit('current-change', this.currentPage, pre);
      }
    }
  }
};
</script>

<style></style>
