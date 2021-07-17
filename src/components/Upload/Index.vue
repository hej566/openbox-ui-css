<template>
  <div :class="uploadClassList" tabindex="0">
    <input
      @change="changeHandler"
      :id="_uid"
      :disabled="disabled"
      type="file"
      accept="image/jpg, image/jpeg, image/bmp, image/png"
      multiple
    />
    <label :for="_uid" :class="labelClassList">
      <div :class="uploadingClassList" v-if="uploading">
        <div :class="loaderClassList">
          <svg-icon
            :icon-class="`circle-notch`"
            :class="spinnerClassList"
          ></svg-icon>
        </div>
        <div :class="iconUploadingClassList" v-if="icon">
          <svg-icon :icon-class="icon"></svg-icon>
        </div>
        <div :class="textUploadingClassList">
          <slot></slot>
        </div>
      </div>
      <div :class="uploadedClassList" v-else>
        <div :class="iconClassList" v-if="icon">
          <svg-icon :icon-class="icon"></svg-icon>
        </div>
        <div :class="textClassList">
          <slot></slot>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: `${ns}Upload`,
  /*eslint-enable*/
  model: {
    prop: 'uploading',
    event: 'uploading'
  },
  props: {
    elevation: {
      type: Boolean,
      default: false
    },
    aria: {
      type: Boolean,
      default: true
    },
    uploading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadClassArr: [],
      labelClassArr: [],
      uploadingClassArr: [],
      iconClassArr: [],
      textClassArr: [],
      uploadedClassArr: [],
      iconUploadingClassArr: [],
      textUploadingClassArr: [],
      loaderClassArr: [],
      spinnerClassArr: []
    };
  },

  computed: {
    uploadClassList() {
      return this.uploadClassArr;
    },
    labelClassList() {
      return this.labelClassArr;
    },
    uploadingClassList() {
      return this.uploadingClassArr;
    },
    iconClassList() {
      return this.iconClassArr;
    },
    textClassList() {
      return this.textClassArr;
    },
    uploadedClassList() {
      return this.uploadedClassArr;
    },
    iconUploadingClassList() {
      return this.iconUploadingClassArr;
    },
    textUploadingClassList() {
      return this.textUploadingClassArr;
    },
    loaderClassList() {
      return this.loaderClassArr;
    },
    spinnerClassList() {
      return this.spinnerClassArr;
    }
  },

  watch: {
    uploading: {
      immediate: false,
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.uploadingClassArr.push(`${ns}-uploading`);
          this.iconUploadingClassArr.push(`${ns}-icon`);
          this.loaderClassArr.push(`${ns}-center`);
          this.textUploadingClassArr.push(`${ns}-text`);
          this.spinnerClassArr.push(`${ns}-spinner`);
          this.uploadedClassArr.pop();
        } else {
          this.uploadingClassArr.pop();
          this.iconUploadingClassArr.pop();
          this.loaderClassArr.pop();
          this.textUploadingClassArr.pop();
          this.spinnerClassArr.pop();
          this.uploadedClassArr.push(`${ns}-uploaded`);
        }
        /* eslint-enable */
      }
    },
    disabled: {
      handler(val) {
        /* eslint-disable */
        if (val) {
          this.$el.classList.add(`${ns}-disabled`);
        } else {
          this.$el.classList.remove(`${ns}-disabled`);
        }
        /* eslint-enable */
      }
    }
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      /* eslint-disable */
      this.uploadClassArr.push(`${ns}-upload`);
      this.labelClassArr.push(`${ns}-upload-label`);
      if (this.elevation) {
        this.uploadClassArr.push(`${ns}-elevation`);
      }
      if (this.aria) {
        this.uploadClassArr.push(`${ns}-aria`);
      }
      if (this.icon) {
        this.iconClassArr.push(`${ns}-icon`);
      }
      if (this.uploading) {
        this.uploadingClassArr.push(`${ns}-uploading`);
        this.iconUploadingClassArr.push(`${ns}-icon`);
        this.loaderClassArr.push(`${ns}-center`);
        this.textUploadingClassArr.push(`${ns}-text`);
        this.spinnerClassArr.push(`${ns}-spinner`);
      } else {
        this.uploadedClassArr.push(`${ns}-uploaded`);
      }
      if (this.disabled) {
        this.uploadClassArr.push(`${ns}-disabled`)
      }
      /* eslint-enable */
    },
    changeHandler($event) {
      this.$emit('change', $event.target.files);
      this.$emit('uploading', false);
    }
  }
};
</script>
