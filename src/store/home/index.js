import { reqCategoryList, reqMockBannerList ,reqFloorList} from "@/api";
const actions = {
  async categoryList(context) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      context.commit("CATEGORYLIST", result.data);
    }
  },
  async getBannerList(context) {
    let result = await reqMockBannerList();
    if (result.code === 200) {
      context.commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList(context) {
    let result = await reqFloorList();
    if (result.code === 200) {
      context.commit("GETFLOORLIST", result.data);
    }
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
//准备state——用于存储数据
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
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
