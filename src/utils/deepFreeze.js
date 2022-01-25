function deepFreeze(target) {
  if (Array.isArray(target)) {
    target.forEach((item) => {
      deepFreeze(item);
    });
    Object.freeze(target);
  } else if (typeof target === 'object' && target !== null) {
    Object.values(target).forEach((value) => {
      deepFreeze(value);
    });
    Object.freeze(target);
  }
  return target;
}

export default deepFreeze;
