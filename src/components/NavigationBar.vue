<script setup>
import DropdownMenu from "./DropdownMenu.vue";
</script>

<template>
  <nav>
    <div class="logo">
      <span>Lighteniam</span>
    </div>
    <router-link class="no-decoration" to="/">Home</router-link>
    <DropdownMenu class="no-decoration" />
    <router-link class="no-decoration" to="/about">About</router-link>
    <router-link class="no-decoration" to="/blog">Blog</router-link>
    <div class="user-links">
      <button>
        <router-link to="/login"
          ><img src="../assets/user.svg" alt=""
        /></router-link>
      </button>
      <button><img src="../assets/search.svg" alt="" /></button>
      <button><img src="../assets/shop.svg" alt="" /></button>
    </div>
  </nav>
</template>

<style scoped>
button {
  all: unset;
}
nav {
  width: 100vmax !important;
  /* border: 1px solid black; */
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.no-decoration {
  margin: 20px;
  text-decoration: none;
  font-weight: 400;
  color: black;
  font-size: 15px;
}
.user-links > * {
  margin: 1rem;
  cursor: pointer;
}
.logo > span {
  font-size: 33px;
  font-weight: 700;
  cursor: pointer;
}
@media screen and (max-width: 1200px) {
  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
@media screen and (max-width: 615px) {
  .no-decoration {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .user-links > * {
    margin: 10px;
    cursor: pointer;
  }
}
</style>
