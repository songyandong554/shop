import { reqShopCart, reqdleShopCart, reqChangeIsChecked } from "@/api";
const actions = {
  async getShopCart({ commit }) {
    let result = await reqShopCart();
    if (result.code === 200) {
      commit("GTESHOPCART", result.data);
    }
  },
  async deleteShopCart({ commit }, skuId) {
    let result = await reqdleShopCart(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async changeIsChecked({ commit }, { skuId, isChecked }) {
    let result = await reqChangeIsChecked(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  deleteAllChecked({ dispatch, getters }) {
    let PromiseAll = [];
    getters.shopCartList.cartInfoList.forEach((element) => {
      let Promise =
        element.isChecked == 1 ? dispatch("deleteShopCart", element.skuId) : "";
      PromiseAll.push(Promise);
    });
    return Promise.all(PromiseAll);
  },
  updataAllChecked({ dispatch, state }, isAllChecked) {
    let PromiseAll = [];
    state.shopCartList[0].cartInfoList.forEach((element) => {
    let Promise= dispatch("changeIsChecked", {
            skuId: element.skuId,
            isChecked: isAllChecked,
          })
        PromiseAll.push(Promise)
    });
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  GTESHOPCART(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
};
//准备state——用于存储数据
const state = {
  shopCartList: [],
};
//准备getters——用于将state中的数据进行加工
const getters = {
  shopCartList(state) {
    return state.shopCartList[0] || {};
  },
};

//创建并暴露store
export default {
  actions,
  mutations,
  state,
  getters,
};
