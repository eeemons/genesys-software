<template>
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">
        Shop<span><img src="../assets/dropdown-button.svg" alt="" /></span>
      </button>
      <div class="dropdown-content">
        <a href="1">Shop Item</a>
        <a href="2">Shop Item</a>
        <a href="3">Shop Item</a>
        <a href="1">Shop Item</a>
        <a href="2">Shop Item</a>
        <a href="3">Shop Item</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 10px;
}

.dropdown-content > a {
  padding: 10px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
}
.dropdown-content > a:hover {
  text-decoration: underline;
}
.dropbtn:hover ~ .dropdown-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
}
button {
  all: unset;
}
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}

.no-decoration {
  all: unset;
  cursor: pointer;
}
</style>
