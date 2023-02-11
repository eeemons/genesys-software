<template>
  <div class="container">
    <div class="form-content">
      <div class="inner-container">
        <h2>Recover Password</h2>
        <br />
        <p>
          Please enter your email and we will send you a password reset link.
        </p>
        <input type="email" placeholder="Email " />
        <br />
        <button>Reset Password</button>
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
h2 {
  font-weight: 400;
  font-size: 42px;
}
p {
  font-size: 13.33px;
  font-weight: 300;
}

input {
  padding: 8px;
  width: 306px;
  margin: 0px 0px 32px 0px;
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
.inner-container {
  width: fit-content;
}
.form-content {
  height: 50vh;
  display: grid;
  place-items: center;
}
</style>
