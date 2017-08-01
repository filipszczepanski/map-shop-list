if (!Object.getOwnPropertyDescriptors) {
  Object.getOwnPropertyDescriptors = function (prototype) {
    return Object.getOwnPropertyNames(prototype).reduce((p, n) => {
      p[n] = Object.getOwnPropertyDescriptor(prototype, n);
      return p;
    }, {});
  }
}
