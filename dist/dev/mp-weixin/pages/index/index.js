"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_index = require("../../stores/index.js");
const api_index = require("../../api/index.js");
require("../../stores/module/counter.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
const _sfc_main = {
  __name: "index",
  props: {},
  emits: [],
  setup(__props, { emit: emits }) {
    const store = stores_index.mainStore();
    const count = common_vendor.computed(() => store.counterStore.count);
    const title = common_vendor.ref("Hello 马骁骁");
    const handleCount = () => {
      store.counterStore.increment();
    };
    const testApi = async () => {
      try {
        const res = await api_index.API.getList();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    common_vendor.onBeforeMount(() => {
      testApi();
    });
    common_vendor.onMounted(() => {
    });
    common_vendor.watchEffect(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.t(common_vendor.unref(count)),
        c: common_vendor.o(handleCount),
        d: common_vendor.p({
          type: "primary",
          text: "+1"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "C:/Users/Blues Ma/Desktop/my-vue3-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
