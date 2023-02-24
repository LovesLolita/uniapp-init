"use strict";
const common_vendor = require("../../common/vendor.js");
const useCounterStore = common_vendor.defineStore("counter", () => {
  const count = common_vendor.ref(0);
  const doubleCount = common_vendor.computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});
exports.useCounterStore = useCounterStore;
