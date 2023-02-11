<template>
  <div class="container">
    <div class="login-form">
      <div class="form-detail">
        <h2>Login</h2>
        <br />
        <form action="submit">
          <div class="login-credential">
            <div>
              <input
                type="email"
                name=""
                id=""
                class="user"
                placeholder="Enter your email address"
              />
            </div>
            <div class="password-and-account">
              <input
                type="password"
                name=""
                id=""
                class="password"
                placeholder="Enter your password"
              />
              <br />
              <RouterLink to="/forgot_password" class="no-decoration"
                >Forgot Password</RouterLink
              >
            </div>
          </div>
          <br />
          <br />
          <button>Sign In</button>
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

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
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
</style>
