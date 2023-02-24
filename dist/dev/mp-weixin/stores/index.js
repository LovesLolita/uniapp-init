"use strict";
const common_vendor = require("../common/vendor.js");
const stores_module_counter = require("./module/counter.js");
const mainStore = common_vendor.defineStore("mainStore", () => {
  const counterStore = stores_module_counter.useCounterStore();
  return { counterStore };
});
exports.mainStore = mainStore;
