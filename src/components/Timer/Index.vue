<template>
  <div :class="timerClasses" :id="_uid">
    <div :class="timerHeaderClasses"></div>
    <div :class="timerBodyClasses">
      <c4it-scrollbar :height="224" is-vertical>
        <div :class="hourClasses">
          <div
            v-for="(hour, idx) in hours"
            :key="idx"
            :data-val="hour"
            @click="chooseTimer({ type: 'hour', value: hour })"
          >
            {{ hour }}
          </div>
        </div>
      </c4it-scrollbar>
      <c4it-scrollbar :height="224" is-vertical>
        <div :class="minuteClasses">
          <div
            v-for="(minute, idx) in minutes"
            :key="idx"
            :data-val="minute"
            @click="chooseTimer({ type: 'minute', value: minute })"
          >
            {{ minute }}
          </div>
        </div>
      </c4it-scrollbar>
      <c4it-scrollbar :height="224" is-vertical>
        <div :class="secondClasses">
          <div
            v-for="(second, idx) in seconds"
            :key="idx"
            :data-val="second"
            @click="chooseTimer({ type: 'second', value: second })"
          >
            {{ second }}
          </div>
        </div>
      </c4it-scrollbar>
    </div>
    <div :class="timerFooterClasses">
      <div class="btns">
        <div @click="chooseNow" class="now">此刻</div>
        <div @click="confirm" class="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import c4itScrollbar from '@/components/Scrollbar/Index.vue';

export default {
  /*eslint-disable*/
  name: `${ns}Timer`,
  /*eslint-enable*/
  components: { c4itScrollbar },
  props: {
    timer: {
      type: Array,
      default: () => {
        return [];
      },
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timerClassArr: [],
      hourClassArr: [],
      minuteClassArr: [],
      secondClassArr: [],
      timerHeaderClassArr: [],
      timerBodyClassArr: [],
      timerFooterClassArr: [],
      hours: [],
      minutes: [],
      seconds: [],
      hour: '',
      minute: '',
      second: '',
      hoursElm: null,
      minutesElm: null,
      secondsElm: null,
    };
  },

  computed: {
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
  },

  watch: {
    timer: {
      handler(val) {
        if (val.length === 3) {
          this.parseTimer(val);
        } else {
          this.resetTimer();
        }
      },
    },

    open: {
      handler(val) {
        if (val) {
          this.setTimer();
        }
      },
    },
  },

  created() {
    this.initClasses();
  },

  methods: {
    initClasses() {
      /* eslint-disable */
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
      this.hoursElm = this.$el.querySelector('.c4it-hour');
      this.minutesElm = this.$el.querySelector('.c4it-minute');
      this.secondsElm = this.$el.querySelector('.c4it-second');

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

      this.$nextTick(() => {
        const itemHeight = this.hoursElm.childNodes[0].offsetHeight;
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

    resetTimer() {
      for (let hourElm of this.hoursElm.children) {
        hourElm.classList.remove('active');
        if (hourElm.dataset['val'] === '00') {
          hourElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start',
          });
        }
      }

      for (let minuteElm of this.minutesElm.children) {
        minuteElm.classList.remove('active');
        if (minuteElm.dataset['val'] === '00') {
          minuteElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start',
          });
        }
      }

      for (let secondElm of this.secondsElm.children) {
        secondElm.classList.remove('active');
        if (secondElm.dataset['val'] === '00') {
          secondElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start',
          });
        }
      }

      this.hour = 0;
      this.minute = 0;
      this.second = 0;
    },

    parseTimer(val) {
      for (let hourElm of this.hoursElm.children) {
        hourElm.classList.remove('active');
        if (hourElm.dataset['val'] === val[0]) {
          hourElm.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'start',
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
            inline: 'start',
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
            inline: 'start',
          });
          secondElm.classList.add('active');
        }
      }

      this.hour = Number(this.timer[0]);
      this.minute = Number(this.timer[1]);
      this.second = Number(this.timer[2]);
    },

    chooseTimer({ type, value }) {
      if (type === 'hour') {
        this.hour = Number(value);
      } else if (type === 'minute') {
        this.minute = Number(value);
      } else {
        this.second = Number(value);
      }
      const strHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      const strMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
      const strSecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
      this.$emit('choose-timer', `${strHour}:${strMinute}:${strSecond}`);
    },

    confirm() {
      this.$emit('confirm');
    },

    setNow() {
      this.now = new Date();
      this.hour = this.now.getHours();
      this.minute = this.now.getMinutes();
      this.second = this.now.getSeconds();
    },

    chooseNow() {
      this.setNow();
      const strHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
      const strMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
      const strSecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
      this.$emit('choose-timer', `${strHour}:${strMinute}:${strSecond}`);
    },
  },
};
</script>
