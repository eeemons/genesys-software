<template>
  <div class="container">
    <div class="center-items">
      <div class="inner-container">
        <h2>Register Your Account</h2>
        <form @submit.prevent>
          <div class="name-input">
            <input
              type="text"
              name=""
              id=""
              :class="`first-input ${errors.firstName ? 'is-invalid' : ''}`"
              :placeholder="`First Name ${
                errors.firstName ? 'is not valid' : ''
              }`"
              v-model="firstName"
            />
            <!-- <div class="invalid-feedback">{{ errors.firstName }}</div> -->
            <input
              type="text"
              name=""
              id=""
              :class="`${errors.lastName ? 'is-invalid' : ''}`"
              :placeholder="`Last Name ${
                errors.lastName ? 'is not valid' : ''
              }`"
              v-model="lastName"
            />
            <!-- <div class="invalid-feedback">{{ errors.lastName }}</div> -->
          </div>
          <div class="email-password">
            <input
              type="email"
              name=""
              id=""
              :class="`first-input ${errors.email ? 'is-invalid' : ''}`"
              :placeholder="`Email ${errors.email ? 'is not valid' : ''}`"
              v-model="email"
            />
            <!-- <div class="invalid-feedback">{{ errors.email }}</div> -->
            <input
              type="text"
              name=""
              id=""
              :class="`${errors.password ? 'is-invalid' : ''}`"
              :placeholder="`Password ${errors.password ? 'is not valid' : ''}`"
              v-model="password"
            />
            <!-- <div class="invalid-feedback">{{ errors.password }}</div> -->
          </div>
        </form>
        <button @click="registerUser">Register</button>
        <br />
        <RouterLink to="/login" class="no-decoration">Cancel</RouterLink>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import FormValidation from "@/validation/FormValidation.js";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {},
      users: [],
    };
  },
  components: { FooterComponent },
  methods: {
    registerUser() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      const { isInvalid, errors } = FormValidation(user);
      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        if (localStorage.users) {
          let localStorageUsers = localStorage.users;
          this.users = JSON.parse(localStorageUsers);
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  min-width: 100%;
}
.inner-container {
  width: fit-content;
}

.center-items {
  display: grid;
  place-items: center;
  height: 50vh;
}
input {
  padding: 8px;
  width: 306px;
  margin: 32px 24px;
}
button {
  all: unset;
  border: 1px solid black;
  width: 200px;
  height: 48px;
  text-align: center;
  cursor: pointer;
}
.no-decoration {
  all: unset;
  cursor: pointer;
}
.first-input {
  margin-left: 0;
}
.is-invalid {
  border: 1px solid red;
}
@media screen and (max-width: 690px) {
  input {
    margin: 10px 0;
  }
  .inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name-input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .email-password {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
