// 当前的这个模块：api进行同意管理
import requests from "./request";
import mockRequest from "./mockAjax";
// 三级联动接口
// /api/product/getBaseCategoryList   get请求 无参数
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
export const reqMockBannerList = () =>
  mockRequest({ url: "/banner", method: "get" });
export const reqFloorList = () => mockRequest({ url: "/floor", method: "get" });
// /api/list post
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
export const reqGoodsInfo = (skuid) =>
  requests({ url: `/item/${skuid}`, method: "get" });
export const reqAddupDateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
export const reqShopCart = () =>
  requests({ url: "/cart/cartList", method: "get" });
export const reqdleShopCart = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });
export const reqChangeIsChecked = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
export const reqGetphoneCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
export const reqUserRegister = (data) =>
  requests({
    url: `user/passport/register`,
    data: data,
    method: "post",
  });
export const reqUserLogin = (data) =>
  requests({ url: "user/passport/login", data: data, method: "post" });
// user/passport/auth/getUserInfo
export const reqUserInfo = () =>
  requests({
    url: "user/passport/auth/getUserInfo",
    method: "get",
  });
export const reqclearToken = () =>
  requests({
    url: "/user/passport/logout",
    method: "get",
  });
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "GET",
  });
export const reqOrderInfo = () =>
  requests({ url: "/order/auth/trade", method: "GET" });
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data,
  });
export const reqPayMent = (orderId) =>
  requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });
export const reqPayStatus = (orderId) =>
  requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" });
// /api/order/auth/{page}/{limit}
export const reqmyOrderList = (page, limit) =>
  requests({ url: `/order/auth/${page}/${limit}`, method: "get" });
