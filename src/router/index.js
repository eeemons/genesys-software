import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import Dashboard from "../views/Dashboard.vue";

function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "dashboard" });
  } else {
    next();
  }
}

function gaurd(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else {
    next({ name: "login" });
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    beforeEnter: guest,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    before: gaurd,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: guest,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    beforeEnter: guest,
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: ForgotPasswordView,
    beforeEnter: guest,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    before: gaurd,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
