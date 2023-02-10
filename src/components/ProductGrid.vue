<template>
  <div class="container">
    <img class="grid-span-2" src="../assets/juices.png" alt="" />
    <img class="grid-span-1 smoothies" src="../assets/smoothies.png" alt="" />
    <img class="grid-span-1" src="../assets/shakes.png" alt="" />
    <img class="seasonal-fav" src="../assets/seasonal-favourites.png" alt="" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  min-width: 100%;
  max-height: fit-content;
  grid-gap: 16px;
}

.smoothies {
  grid-column: -3;
}

.seasonal-fav {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

img {
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: relative;
}
.grid-span-1 {
  grid-column: span 1;
}
.grid-span-2 {
  grid-column: span 2;
}
</style>
