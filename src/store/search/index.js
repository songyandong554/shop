import { reqGetSearchInfo } from "@/api";
const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  GETSEARCHLIST(state, SearchList) {
    state.SearchList = SearchList;
  },
};
//准备state——用于存储数据
const state = {
  SearchList: {},
};
//准备getters——用于将state中的数据进行加工
const getters = {
  goodsList(state) {
    return state.SearchList.goodsList || [];
  },
  trademarkList(state) {
    return state.SearchList.trademarkList || [];
  },
  attrsList(state) {
    return state.SearchList.attrsList || [];
  },
};

//创建并暴露store
export default {
  actions,
  mutations,
  state,
  getters,
};
