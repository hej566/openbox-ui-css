const deepClone = (target: any): any => {
  if (typeof target !== 'object') {
    return target;
  }
  if (target === null) {
    return target;
  }
  if (target instanceof Array) {
    const copy: any[] = [];
    for (const item of target) {
      copy.push(deepClone(item));
    }
    return copy;
  }
  const copy: { [key: string]: any } = {};
  for (const item in target) {
    copy[item] = deepClone(target[item]);
  }
  return copy;
};

export default deepClone;
