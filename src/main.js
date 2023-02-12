import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

if (localStorage.users === undefined) {
  let users = [
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin@admin.com",
      password: "admin",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

createApp(App).use(router).mount("#app");
