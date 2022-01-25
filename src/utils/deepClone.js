const deepClone = (target) => {
  if (target === null) {
    return target;
  }
  if (Array.isArray(target)) {
    const copy = [];
    target.forEach((item) => {
      copy.push(deepClone(item));
    });
    return copy;
  }
  if (typeof target === 'object') {
    const copy = {};
    Object.keys(target).forEach((item) => {
      copy[item] = deepClone(target[item]);
    });
    return copy;
  }
  return target;
};

export default deepClone;
