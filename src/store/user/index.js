import {
  reqGetphoneCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqclearToken,
} from "@/api";
import { setToken, getToken, clearToken } from "@/utils/token";
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetphoneCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async userRegister({ commit }, data) {
    let result = await reqUserRegister(data);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      setToken(result.data.token);
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);

      // return 'ok'
    } else {
      // return Promise.reject(new Error("faile"));
    }
  },
  async clearToken({ commit }) {
    let result = await reqclearToken();
    if (result.code == 200) {
      commit("CLEARTOKEN");
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
//准备mutations——用于操作数据(state)
const mutations = {
  GETCODE(state, phoneCode) {
    state.phoneCode = phoneCode;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEARTOKEN(state) {
    state.token = "";
    state.userInfo = {};
    clearToken();
  },
};
//准备state——用于存储数据
const state = {
  phoneCode: "",
  token: getToken(),
  userInfo: {},
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
