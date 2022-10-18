import { reqAddressInfo, reqOrderInfo } from "@/api";
const actions = {
  async getAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETADDRESS", result.data);
    }
  },
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
    }
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  GETADDRESS(state, address) {
    state.address = address;
  },
  GETORDERINFO(state, orderinfo) {
    state.orderinfo = orderinfo;
  },
};
//准备state——用于存储数据
const state = {
  address: [],
  orderinfo: {},
};
//准备getters——用于将state中的数据进行加工
const getters = {};

//创建并暴露store
export default {
  actions,
  mutations,
  state,
  getters,
};
