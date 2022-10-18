import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
//注册三级联动全局组件
import TypeNav from "@/components/TypeNav";
// 第一个参数组件的名字，第二个组件哪一个组件
Vue.component(TypeNav.name, TypeNav);
import Carousel from "@/components/Carousel";
Vue.component(Carousel.name, Carousel);
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name, Pagination);
import { MessageBox } from "element-ui";
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import "@/mock/mockServe";
import "swiper/css/swiper.css";
Vue.config.productionTip = false;
import * as API from "@/api";
import VueLazyload from "vue-lazyload";
import jzt from "@/assets/1.gif";
Vue.use(VueLazyload, {
  // 懒加载默认图片
  loading: jzt,
});
import myPlugin from "./plugins/myPlugins";
Vue.use(myPlugin, {
  name: "张三",
});
import "@/plugins/validate";
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
    Vue.prototype.$API = API;
  },
  router,
  // 注册仓库
  store,
}).$mount("#app");
