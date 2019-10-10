import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/Register")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("./views/Settings")
  },
  {
    path: "/editor",
    name: "editor_new",
    component: () => import("./views/ArticleCreate")
  },
  {
    path: "/editor/:article_slug",
    name: "editor_edit",
    component: () => import("./views/ArticleEdit")
  },
  {
    path: "/article/:article_slug",
    name: "article",
    component: () => import("./views/Article")
  },
  {
    path: "/:username",
    name: "profile",
    component: () => import("./views/Profile")
  }
];

export default new Router({
  routes,
  mode: "history"
});
