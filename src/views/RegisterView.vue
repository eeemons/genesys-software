<template>
  <div class="container">
    <div class="center-items">
      <div class="inner-container">
        <h2>Register Your Account</h2>
        <form action="submit">
          <div class="name-input">
            <input
              type="text"
              name=""
              id=""
              class="first-input"
              placeholder="First Name"
            />
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
          <div class="email-password">
            <input
              type="email"
              name=""
              id=""
              class="first-input"
              placeholder="Email"
            />
            <input type="text" name="" id="" placeholder="Password" />
          </div>
        </form>
        <button>Register</button>
        <br />
        <RouterLink to="/login" class="no-decoration">Cancel</RouterLink>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
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
</style>
