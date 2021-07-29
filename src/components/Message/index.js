import Vue from 'vue';
import Message from './Message.vue';

let MessageConstructor = Vue.extend(Message);

let messages = [];

const close = (id) => {
  let len = messages.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === messages[i].id) {
      removedHeight = messages[i].$el.offsetHeight;
      index = i;
      document.body.removeChild(messages[i].$el);
      messages.splice(i, 1);
      break;
    }
  }

  if (len <= 1 || index === -1 || index > messages.length - 1) return;
  for (let i = index; i < len - 1; i++) {
    let messageDom = messages[i].$el;
    messageDom.style['top'] = parseInt(messageDom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

export default (options) => {
  let message = new MessageConstructor({
    data: options,
  });
  message.id = message._uid;
  message.timer = function () {
    setTimeout(() => {
      close(message.id);
    }, 3000);
  };
  message.$mount();
  let verticalOffset = options.offset || 20;
  messages.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  message.verticalOffset = verticalOffset;
  message.$el.style['top'] = `${message.verticalOffset}px`;
  messages.push(message);
  document.body.appendChild(message.$el);
  message.timer();
  return message;
};
