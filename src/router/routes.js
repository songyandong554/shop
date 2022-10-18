// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
// import Pay from "@/pages/Pay";
// import PaySuccess from "@/pages/PaySuccess";
// import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
export default [
  {
    path: "/center",
    component: () => import("@/pages/Center"),
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/home",
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    path: "/paysuccess",
    component: () => import("@/pages/PaySuccess"),
    meta: { show: true },
  },
  {
    path: "/pay",
    component:() => import("@/pages/Pay"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 路由独享守卫
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/login",
    component:() => import("@/pages/Login"),
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/search/:keyWord?",
    component: Search,
    meta: { show: true },
    name: "search",
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name: "AddCartSuccess",
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    name: "dateil",
    meta: { show: true },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    name: "ShopCart",
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    name: "Trade",
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 路由独享守卫
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "*",
    redirect: "/home",
  },
];
