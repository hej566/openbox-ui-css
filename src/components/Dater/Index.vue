<template>
  <div :class="dateClasses" :id="_uid">
    <div :class="dateHeaderClasses">
      <div class="left">
        <svg-icon
          @click="prevYear"
          icon-class="angle-double-left"
          class="angle-double-left"
        ></svg-icon>
        <svg-icon
          @click="prevMonth"
          icon-class="angle-left"
          class="angle-left"
        ></svg-icon>
      </div>
      <div :class="dateHeaderTitleClasses">
        {{ yearMonth }}
      </div>
      <div class="right">
        <svg-icon
          @click="nextMonth"
          icon-class="angle-right"
          class="angle-right"
        ></svg-icon>
        <svg-icon
          @click="nextYear"
          icon-class="angle-double-right"
          class="angle-double-right"
        ></svg-icon>
      </div>
    </div>
    <div :class="dateBodyClasses">
      <div :class="weekClasses">
        <div v-for="day in week" :key="day.key">
          {{ day.val }}
        </div>
      </div>
      <div :class="daysTableClasses" @click.stop="chooseDater">
        <div v-for="(day, idx) in days" :key="idx">
          <div
            :class="
              dayItemClasses.concat([
                { disable: day.disable },
                { active: day.active },
                { mark: day.mark }
              ])
            "
            :data-date="
              `${day.year}-${day.month < 10 ? '0' + day.month : day.month}-${
                day.value < 10 ? '0' + day.value : day.value
              }`
            "
            tabindex="0"
          >
            {{ day.value }}
          </div>
        </div>
      </div>
    </div>
    <div :class="dateFooterClasses">
      <div class="btns">
        <div @click="chooseNow" class="now">
          此刻
        </div>
        <div @click="confirm" class="confirm">
          确定
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Dater`,
  /*eslint-enable*/
  props: {
    dater: {
      type: Array,
      default: () => {
        return [];
      }
    },
    open: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dateClassArr: [],
      dateHeaderClassArr: [],
      dateBodyClassArr: [],
      dateFooterClassArr: [],
      dateHeaderTitleClassArr: [],
      weekClassArr: [],
      daysTableClassArr: [],
      dayItemClassArr: [],
      now: null,
      year: null,
      month: null,
      dateInMonth: null,
      week: [
        { key: 'Sun', val: '日' },
        { key: 'Mon', val: '一' },
        { key: 'Tue', val: '二' },
        { key: 'Wed', val: '三' },
        { key: 'Thu', val: '四' },
        { key: 'Fri', val: '五' },
        { key: 'Sat', val: '六' }
      ],
      days: [],
      nowDate: null,
      nowMonth: null,
      nowYear: null
    };
  },

  computed: {
    dateClasses() {
      return this.dateClassArr;
    },
    dateHeaderClasses() {
      return this.dateHeaderClassArr;
    },
    dateBodyClasses() {
      return this.dateBodyClassArr;
    },
    dateFooterClasses() {
      return this.dateFooterClassArr;
    },
    dateHeaderTitleClasses() {
      return this.dateHeaderTitleClassArr;
    },
    daysTableClasses() {
      return this.daysTableClassArr;
    },
    dayItemClasses() {
      return this.dayItemClassArr;
    },
    weekClasses() {
      return this.weekClassArr;
    },
    yearMonth() {
      return `${this.year} 年 ${this.month} 月`;
    }
  },

  watch: {
    year: {
      handler() {
        this.computeDays();
      }
    },
    month: {
      handler() {
        this.computeDays();
      }
    },
    dateInMonth: {
      handler(val) {
        if (val) {
          this.highlight(val);
        }
      }
    },
    dater: {
      handler(val) {
        if (val.length === 3) {
          this.parseDater(val);
        } else {
          this.resetDater();
        }
      }
    },
    open: {
      handler(val) {
        if (val) {
          this.setDater();
        }
      }
    }
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
      this.dateClassArr.push(`${ns}-dater`);
      this.dateHeaderClassArr.push(`${ns}-dater-header`);
      this.dateHeaderTitleClassArr.push(`${ns}-dater-header-title`);
      this.dateBodyClassArr.push(`${ns}-dater-body`);
      this.dateFooterClassArr.push(`${ns}-dater-footer`);
      this.weekClassArr.push(`${ns}-days-in-week`);
      this.daysTableClassArr.push(`${ns}-days-in-grid`);
      this.dayItemClassArr.push(`${ns}-day-item`);
      /* eslint-enable */
    },

    setDater() {
      this.setNow();
      const monthStart = new Date(this.year, this.month - 1);
      const monthEnd = new Date(this.year, this.month);
      const monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
      const startDayInMonth = monthStart.toString().split(' ')[0];
      const endDayInMonth = monthEnd.toString().split(' ')[0];
      this.filledTable(startDayInMonth, endDayInMonth, monthLength);
      this.$nextTick(() => {
        this.markNowDate(this.nowDate);
      });
    },

    resetDater() {
      this.setDater();
    },

    parseDater(val) {
      if (val.length === 3) {
        this.year = Number(val[0]);
        this.month = Number(val[1]);
        this.dateInMonth = Number(val[2]);
        this.$nextTick(() => {
          this.highlight(this.dateInMonth);
        });
      }
    },

    highlight(date) {
      for (let day of this.days) {
        day.active = false;
      }
      for (let day of this.days) {
        if (day.value === date && day.month === this.month) {
          day.active = true;
        }
      }
    },

    markNowDate(date) {
      for (let day of this.days) {
        if (
          day.value === date &&
          day.month === this.nowMonth &&
          day.year === this.nowYear
        ) {
          day.mark = true;
        }
      }
    },

    computeDays() {
      const monthStart = new Date(this.year, this.month - 1);
      const monthEnd = new Date(this.year, this.month);
      const monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
      const startDayInMonth = monthStart.toString().split(' ')[0];
      const endDayInMonth = monthEnd.toString().split(' ')[0];
      this.filledTable(startDayInMonth, endDayInMonth, monthLength);
      this.$nextTick(() => {
        this.markNowDate(this.nowDate);
      });
    },

    chooseDater($event) {
      this.$emit('choose-dater', $event.target.dataset.date);
    },

    filledTable(startDayInMonth, endDayInMonth, monthLength) {
      this.days = [];
      let daysFromPrevMonth = null;
      let daysFromNextMonth = null;
      this.week.forEach((day, idx) => {
        if (day.key === startDayInMonth) {
          daysFromPrevMonth = idx;
        }
        if (day.key === endDayInMonth) {
          daysFromNextMonth = 7 - idx;
        }
      });
      const prevMonthLength = this.computeMonthLength(
        this.year,
        this.month - 1
      );

      for (
        let i = prevMonthLength - daysFromPrevMonth + 1;
        i <= prevMonthLength;
        i++
      ) {
        if (this.month === 1) {
          this.days.push({
            disable: true,
            value: i,
            year: this.year - 1,
            month: 12,
            active: false,
            mark: false
          });
        } else {
          this.days.push({
            disable: true,
            value: i,
            year: this.year,
            month: this.month - 1,
            active: false,
            mark: false
          });
        }
      }

      for (let i = 1; i <= monthLength; i++) {
        this.days.push({
          disable: false,
          value: i,
          year: this.year,
          month: this.month,
          active: false,
          mark: false
        });
      }

      for (let i = 1; i <= daysFromNextMonth; i++) {
        if (this.month === 12) {
          this.days.push({
            disable: true,
            value: i,
            year: this.year + 1,
            month: 1,
            active: false,
            mark: false
          });
        } else {
          this.days.push({
            disable: true,
            value: i,
            year: this.year,
            month: this.month + 1,
            active: false,
            mark: false
          });
        }
      }

      if (this.days.length / 7 === 5) {
        let lastDay = this.days[this.days.length - 1];
        for (let i = 1; i <= 7; i++) {
          if (this.month === 12) {
            this.days.push({
              disable: true,
              value: lastDay.value + i,
              year: this.year + 1,
              month: 1,
              active: false,
              mark: false
            });
          } else {
            this.days.push({
              disable: true,
              value: lastDay.value + i,
              year: this.year,
              month: this.month + 1,
              active: false,
              mark: false
            });
          }
        }
      }
    },

    computeMonthLength(year, month) {
      const monthStart = new Date(year, month - 1);
      const monthEnd = new Date(year, month);
      return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    },

    prevYear() {
      this.year -= 1;
    },

    prevMonth() {
      if (this.month > 1) {
        this.month -= 1;
      } else {
        this.year -= 1;
        this.month = 12;
      }
    },

    nextMonth() {
      if (this.month < 12) {
        this.month += 1;
      } else {
        this.year += 1;
        this.month = 1;
      }
    },

    nextYear() {
      this.year += 1;
    },

    setNow() {
      this.now = new Date();
      this.year = this.now.getFullYear();
      this.month = this.now.getMonth() + 1;
      this.nowYear = this.year;
      this.nowDate = this.now.getDate();
      this.nowMonth = this.month;
      this.dateInMonth = null;
    },

    chooseNow() {
      this.setNow();
      this.dateInMonth = this.nowDate;
      const strYear = this.year < 10 ? `0${this.year}` : `${this.year}`;
      const strMonth = this.month < 10 ? `0${this.month}` : `${this.month}`;
      const strDate =
        this.dateInMonth < 10 ? `0${this.dateInMonth}` : `${this.dateInMonth}`;
      this.$emit('choose-dater', `${strYear}-${strMonth}-${strDate}`);
    },

    confirm() {
      this.$emit('confirm');
    }
  }
};
</script>
