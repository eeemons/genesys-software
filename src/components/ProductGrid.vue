<template>
  <div class="container">
    <div class="grid-span-2 col transparency">
      <img src="../assets/juices.png" alt="" />
      <div class="content">
        <h2>Juices</h2>
        <p>
          This smoothie totally changed my world. Our juices are made from the
          freshest fruits and natural ingredients.
        </p>
        <button>Shop now</button>
      </div>
    </div>
    <div class="grid-span-1 smoothies col transparency">
      <img src="../assets/smoothies.png" alt="" />
      <div class="content">
        <h2>Smoothies</h2>
        <p>Very good for a Saturday morning breakfast!</p>
        <button>Shop now</button>
      </div>
    </div>
    <div class="grid-span-1 col transparency">
      <img src="../assets/shakes.png" alt="" />
      <div class="content">
        <h2>Shakes</h2>
        <p>Weirdly really good. These flavors work really well together.</p>
        <button>Shop now</button>
      </div>
    </div>
    <div class="seasonal-fav col last-col transparency">
      <img src="../assets/seasonal-favourites.png" alt="" />
      <div class="content last-content">
        <h2>Sesonal Favourites</h2>
        <p>
          The best of fresh, seasonal ingredients create healthy and satisfying
          breakfast smoothies all year round. Spring is here, which means we're
          harvesting fresh fruits and veggies for our seasonal favorites!
        </p>
        <button>Shop now</button>
      </div>
    </div>
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
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
h2,
p {
  color: white;
  z-index: 4;
}

p {
  font-size: 16px;
  font-weight: 600;
}
h2 {
  font: 23.04px;
  font-weight: 700;
}
button {
  all: unset;
  background-color: #ffffff;
  width: 200px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  z-index: 4;
}
.grid-span-1 {
  grid-column: span 1;
}
.grid-span-2 {
  grid-column: span 2;
}
.col {
  position: relative;
  overflow: hidden;
}
.content {
  position: absolute;
  bottom: 20%;
  left: 40px;
}
.last-content {
  bottom: 10%;
}

.transparency:before {
  content: "\A";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.transparency:hover:before {
  opacity: 1;
}
</style>
