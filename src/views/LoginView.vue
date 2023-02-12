<template>
  <div class="container">
    <div class="login-form">
      <div class="form-detail">
        <h2>Login</h2>
        <br />
        <form novalidate @submit.prevent>
          <div class="login-credential">
            <div>
              <input
                type="email"
                name=""
                id=""
                :class="`user ${errors.email ? 'is-invalid' : ''}`"
                placeholder="Enter your email address"
                v-model="email"
              />
              <div>{{ errors.email }}</div>
            </div>
            <div class="password-and-account">
              <input
                type="password"
                name=""
                id=""
                :class="`${errors.password ? 'is-invalid' : ''}`"
                class="password"
                placeholder="Enter your password"
                v-model="password"
              />
              <div>{{ errors.password }}</div>
              <br />
              <RouterLink to="/forgot_password" class="no-decoration"
                >Forgot Password</RouterLink
              >
            </div>
          </div>
          <br />
          <br />
          <button @click="loginUser()">Sign In</button>
          <br />
          <RouterLink to="/register" class="no-decoration"
            >Create Account</RouterLink
          >
        </form>
      </div>
    </div>
    <div class="footer">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import LoginValidation from "@/validation/LoginValidation.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },
  components: { FooterComponent },
  methods: {
    loginUser() {
      let credentials = {
        email: this.email,
        password: this.password,
      };
      const { isInvalid, errors } = LoginValidation(credentials);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        let localUsers = localStorage.users;
        localUsers = JSON.parse(localUsers);
        let emailIndex = localUsers.findIndex(
          (user) => user.email === credentials.email
        );
        if (emailIndex > -1) {
          let passwordIndex = localUsers.findIndex(
            (user) => user.password === credentials.password
          );
          if (passwordIndex > -1) {
            let activeUser = localUsers.find(
              (user) => user.email === credentials.email
            );
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            this.$router.push("/dashboard");
            // window.location.reload();
          } else {
            this.errors.password = "Password does not match";
          }
        } else {
          this.errors.email = "Email do not exist";
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 100%;
  height: 100%;
}

input {
  padding: 8px;
  width: 306px;
}

h2 {
  font-weight: 400;
  font-size: 42px;
}

.login-credential {
  display: flex;
}

button {
  all: unset;
  border: 1px solid black;
  width: 200px;
  height: 48px;
  text-align: center;
  cursor: pointer;
}
.user {
  margin-right: 24px;
}
.login-form {
  /* border: 1px solid red; */
  display: grid;
  place-items: center;
  height: 50vh;
}

.form-detail {
  /* border: 1px solid yellow; */
  width: fit-content;
}

.no-decoration {
  all: unset;
  cursor: pointer;
}
.is-invalid {
  border: 1px solid red;
}
@media screen and (max-width: 665px) {
  .login-credential {
    display: flex;
    flex-direction: column;
  }
}
</style>
