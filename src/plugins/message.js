import c4itMessage from '@/components/Message';

export default {
  install(Vue) {
    Vue.prototype.$message = c4itMessage;
  }
};
