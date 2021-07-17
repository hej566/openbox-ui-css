<template>
  <div :class="datetimerClasses" :id="_uid">
    <div :class="datetimerBodyClasses">
      <div :class="daterClasses">
        <div :class="daterHeaderClasses">
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
          <div :class="daterHeaderTitleClasses">
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
        <div :class="daterBodyClasses">
          <div :class="weekClasses">
            <div v-for="day in week" :key="day.key">
              {{ day.val }}
            </div>
          </div>
          <div :class="daysTableClasses">
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
                  `${day.year}-${
                    day.month < 10 ? '0' + day.month : day.month
                  }-${day.value < 10 ? '0' + day.value : day.value}`
                "
                @click="chooseDater"
                tabindex="0"
              >
                {{ day.value }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="timerClasses">
        <div :class="timerHeaderClasses">
          {{ showTimer }}
        </div>
        <div :class="timerBodyClasses">
          <c4it-scrollbar :height="224" is-vertical>
            <div :class="hourClasses">
              <div
                v-for="(item, idx) in hours"
                :key="idx"
                :data-val="item"
                @click="chooseTimer({ type: 'hour', value: item })"
              >
                {{ item }}
              </div>
            </div>
          </c4it-scrollbar>
          <c4it-scrollbar :height="224" is-vertical>
            <div :class="minuteClasses">
              <div
                v-for="(item, idx) in minutes"
                :key="idx"
                :data-val="item"
                @click="chooseTimer({ type: 'minute', value: item })"
              >
                {{ item }}
              </div>
            </div>
          </c4it-scrollbar>
          <c4it-scrollbar :height="224" is-vertical>
            <div :class="secondClasses">
              <div
                v-for="(item, idx) in seconds"
                :key="idx"
                :data-val="item"
                @click="chooseTimer({ type: 'second', value: item })"
              >
                {{ item }}
              </div>
            </div>
          </c4it-scrollbar>
        </div>
      </div>
    </div>
    <div :class="datetimerFooterClasses">
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
import c4itScrollbar from '@/components/Scrollbar/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Datetimer`,
  /*eslint-enable*/
  components: { c4itScrollbar },
  props: {
    timer: {
      type: Array,
      default: () => {
        return [];
      }
    },
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
      datetimerClassArr: [],
      daterClassArr: [],
      daterHeaderClassArr: [],
      daterBodyClassArr: [],
      datetimerBodyClassArr: [],
      datetimerFooterClassArr: [],
      daterHeaderTitleClassArr: [],
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
      timerClassArr: [],
      hourClassArr: [],
      minuteClassArr: [],
      secondClassArr: [],
      timerHeaderClassArr: [],
      timerBodyClassArr: [],
      timerFooterClassArr: [],
      hour: null,
      minute: null,
      second: null,
      hours: [],
      minutes: [],
      seconds: [],
      hoursElm: null,
      minutesElm: null,
      secondsElm: null,
      nowDate: null,
      nowMonth: null,
      nowYear: null
    };
  },

  computed: {
    datetimerClasses() {
      return this.datetimerClassArr;
    },
    datetimerBodyClasses() {
      return this.datetimerBodyClassArr;
    },
    daterClasses() {
      return this.daterClassArr;
    },
    daterHeaderClasses() {
      return this.daterHeaderClassArr;
    },
    daterBodyClasses() {
      return this.daterBodyClassArr;
    },
    datetimerFooterClasses() {
      return this.datetimerFooterClassArr;
    },
    daterHeaderTitleClasses() {
      return this.daterHeaderTitleClassArr;
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
    },
    timerClasses() {
      return this.timerClassArr;
    },
    timerHeaderClasses() {
      return this.timerHeaderClassArr;
    },
    timerBodyClasses() {
      return this.timerBodyClassArr;
    },
    timerFooterClasses() {
      return this.timerFooterClassArr;
    },
    hourClasses() {
      return this.hourClassArr;
    },
    minuteClasses() {
      return this.minuteClassArr;
    },
    secondClasses() {
      return this.secondClassArr;
    },
    showTimer() {
      const strHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      const strMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
      const strSecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
      return `${strHour}:${strMinute}:${strSecond}`;
    }
  },

  watch: {
    year: {
      immediate: false,
      handler() {
        this.computeDays();
      }
    },
    month: {
      immediate: false,
      handler() {
        this.computeDays();
      }
    },
    dateInMonth: {
      handler(val) {
        this.highlight(val);
      }
    },
    timer: {
      handler(val) {
        if (val.length === 3) {
          this.parseTimer(val);
        } else {
          this.resetTimer();
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
          this.setTimer();
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
      this.datetimerClassArr.push(`${ns}-datetimer`);
      this.daterClassArr.push(`${ns}-dater`);
      this.daterHeaderClassArr.push(`${ns}-dater-header`);
      this.daterHeaderTitleClassArr.push(`${ns}-dater-header-title`);
      this.daterBodyClassArr.push(`${ns}-dater-body`);
      this.datetimerBodyClassArr.push(`${ns}-datetimer-body`)
      this.datetimerFooterClassArr.push(`${ns}-datetimer-footer`);
      this.weekClassArr.push(`${ns}-days-in-week`);
      this.daysTableClassArr.push(`${ns}-days-in-grid`);
      this.dayItemClassArr.push(`${ns}-day-item`);

      this.timerClassArr.push(`${ns}-timer`);
      this.timerHeaderClassArr.push(`${ns}-timer-header`);
      this.timerBodyClassArr.push(`${ns}-timer-body`);
      this.timerFooterClassArr.push(`${ns}-timer-footer`);
      this.hourClassArr.push(`${ns}-hour`);
      this.minuteClassArr.push(`${ns}-minute`);
      this.secondClassArr.push(`${ns}-second`);
      /* eslint-enable */
    },

    setTimer() {
      this.hours = [];
      this.minutes = [];
      this.seconds = [];

      for (let i = 0; i < 24; i++) {
        if (i < 10) {
          this.hours.push(`0${i}`);
        } else {
          this.hours.push(`${i}`);
        }
      }

      for (let i = 0; i < 60; i++) {
        if (i < 10) {
          this.minutes.push(`0${i}`);
        } else {
          this.minutes.push(`${i}`);
        }
      }

      for (let i = 0; i < 60; i++) {
        if (i < 10) {
          this.seconds.push(`0${i}`);
        } else {
          this.seconds.push(`${i}`);
        }
      }

      this.hoursElm = this.$el.querySelector('.c4it-hour');
      this.minutesElm = this.$el.querySelector('.c4it-minute');
      this.secondsElm = this.$el.querySelector('.c4it-second');
      this.$nextTick(() => {
        const itemHeight = this.hoursElm.children[0].offsetHeight;
        this.hoursElm.style.height = `${(24 + 7) * itemHeight}px`;
        this.minutesElm.style.height = `${(60 + 7) * itemHeight}px`;
        this.secondsElm.style.height = `${(60 + 7) * itemHeight}px`;
        if (this.timer.length === 3) {
          this.parseTimer(this.timer);
        } else {
          this.resetTimer();
        }
      });
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
        this.parseDater(this.dater);
      });
    },

    resetDater() {
      this.setDater();
    },

    parseTimer(val) {
      for (let hourElm of this.hoursElm.children) {
        hourElm.classList.remove('active');
        if (hourElm.dataset['val'] === val[0]) {
          hourElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
          hourElm.classList.add('active');
        }
      }

      for (let minuteElm of this.minutesElm.children) {
        minuteElm.classList.remove('active');
        if (minuteElm.dataset['val'] === val[1]) {
          minuteElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
          minuteElm.classList.add('active');
        }
      }

      for (let secondElm of this.secondsElm.children) {
        secondElm.classList.remove('active');
        if (secondElm.dataset['val'] === val[2]) {
          secondElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
          secondElm.classList.add('active');
        }
      }

      this.hour = Number(val[0]);
      this.minute = Number(val[1]);
      this.second = Number(val[2]);
    },

    resetTimer() {
      for (let hourElm of this.hoursElm.children) {
        hourElm.classList.remove('active');
        if (hourElm.dataset['val'] === '00') {
          hourElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
        }
      }

      for (let minuteElm of this.minutesElm.children) {
        minuteElm.classList.remove('active');
        if (minuteElm.dataset['val'] === '00') {
          minuteElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
        }
      }

      for (let secondElm of this.secondsElm.children) {
        secondElm.classList.remove('active');
        if (secondElm.dataset['val'] === '00') {
          secondElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start'
          });
        }
      }

      this.hour = 0;
      this.minute = 0;
      this.second = 0;
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
            year: Number(this.year) - 1,
            month: 12,
            active: false,
            mark: false
          });
        } else {
          this.days.push({
            disable: true,
            value: i,
            year: Number(this.year),
            month: Number(this.month) - 1,
            active: false,
            mark: false
          });
        }
      }

      for (let i = 1; i <= monthLength; i++) {
        this.days.push({
          disable: false,
          value: i,
          year: Number(this.year),
          month: Number(this.month),
          active: false,
          mark: false
        });
      }

      for (let i = 1; i <= daysFromNextMonth; i++) {
        if (this.month === 12) {
          this.days.push({
            disable: true,
            value: i,
            year: Number(this.year) + 1,
            month: 1,
            active: false,
            mark: false
          });
        } else {
          this.days.push({
            disable: true,
            value: i,
            year: Number(this.year),
            month: Number(this.month) + 1,
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
              year: Number(this.year) + 1,
              month: 1,
              active: false,
              mark: false
            });
          } else {
            this.days.push({
              disable: true,
              value: lastDay.value + i,
              year: Number(this.year),
              month: Number(this.month) + 1,
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

    setDatetimer() {
      if (!this.dateInMonth) {
        this.dateInMonth = this.nowDate;
      }
      const strYear = this.year < 10 ? `0${this.year}` : `${this.year}`;
      const strMonth = this.month < 10 ? `0${this.month}` : `${this.month}`;
      const strDate =
        this.dateInMonth < 10 ? `0${this.dateInMonth}` : `${this.dateInMonth}`;
      const strHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      const strMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
      const strSecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
      this.$emit(
        'choose-datetimer',
        `${strYear}-${strMonth}-${strDate} ${strHour}:${strMinute}:${strSecond}`
      );
    },

    chooseDater($event) {
      const dater = $event.target.dataset.date.split('-');
      this.year = Number(dater[0]);
      this.month = Number(dater[1]);
      this.dateInMonth = Number(dater[2]);
      this.setDatetimer();
    },

    chooseTimer({ type, value }) {
      if (type === 'hour') {
        this.hour = Number(value);
      } else if (type === 'minute') {
        this.minute = Number(value);
      } else {
        this.second = Number(value);
      }
      this.setDatetimer();
    },

    setNow() {
      this.now = new Date();
      this.year = this.now.getFullYear();
      this.month = this.now.getMonth() + 1;
      this.nowDate = this.now.getDate();
      this.hour = this.now.getHours();
      this.minute = this.now.getMinutes();
      this.second = this.now.getSeconds();
      this.nowMonth = this.month;
      this.nowYear = this.year;
      this.dateInMonth = null;
    },

    chooseNow() {
      this.setNow();
      this.dateInMonth = this.nowDate;
      const strYear = this.year < 10 ? `0${this.year}` : `${this.year}`;
      const strMonth = this.month < 10 ? `0${this.month}` : `${this.month}`;
      const strDate =
        this.dateInMonth < 10 ? `0${this.dateInMonth}` : `${this.dateInMonth}`;
      const strHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      const strMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
      const strSecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
      this.$emit(
        'choose-datetimer',
        `${strYear}-${strMonth}-${strDate} ${strHour}:${strMinute}:${strSecond}`
      );
    },

    confirm() {
      this.$emit('confirm');
    }
  }
};
</script>
