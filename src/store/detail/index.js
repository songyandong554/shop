import { reqGoodsInfo, reqAddupDateShopCart } from "@/api";
import { getUUID } from "@/utils/temp_token";
const actions = {
  async getGoodsInfo({ commit }, skuid) {
    let result = await reqGoodsInfo(skuid);
    if (result.code === 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
  async AddupDateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddupDateShopCart(skuId, skuNum);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  GETGOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo;
  },
};
//准备state——用于存储数据
const state = {
  goodsInfo: {},
  uuid_token: getUUID(),
};
//准备getters——用于将state中的数据进行加工
const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || [];
  },
};

//创建并暴露store
export default {
  actions,
  mutations,
  state,
  getters,
};
