const deepClone = target => {
  if (typeof target !== 'object') {
    return target;
  } else if (target === null) {
    return target;
  } else {
    if (target instanceof Array) {
      const copy = [];
      for (let item of target) {
        copy.push(deepClone(item));
      }
      return copy;
    } else {
      const copy = {};
      for (let item in target) {
        copy[item] = deepClone(target[item]);
      }
      return copy;
    }
  }
};

export default deepClone;
