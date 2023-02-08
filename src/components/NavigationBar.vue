<template>
  <nav>
    <div class="logo">
      <span>Lighteniam</span>
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
    <div class="user-links">
      <router-link to="/registration"></router-link>
      <button><img src="../assets/user.svg" alt="" /></button>
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
  width: 100vwmin !important;
  /* border: 1px solid black; */
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}
.nav-links > * {
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
</style>
