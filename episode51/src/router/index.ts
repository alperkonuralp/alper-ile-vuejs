import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import * as User from "../user";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/accessdenied/:name",
    name: "accessdenied",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccessDeniedView.vue"),
  },
  {
    path: "/userprofile",
    name: "userprofile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserProfileView.vue"),
    meta: {
      role: "User",
    },
  },
  {
    path: "/management",
    name: "management",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "manager" */ "../views/ManagementView.vue"),
    meta: {
      role: "Manager",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.role) {
    //console.log(to.meta.role);
    if (to.meta.role == User.userRole) {
      next();
    } else {
      next("/accessdenied/" + to.name);
    }
  } else {
    next();
  }
});

export default router;
