<script setup>
import CarouselComponent from "@/components/Carousel/Carousel.vue";
import Card from "@/components/Card.vue";
import ProductGrid from "@/components/ProductGrid.vue";

let hidden = false;
const toggleHidden = () => {
  hidden = !hidden;
  console.log(hidden);
};
</script>

<template>
  <div class="container">
    <CarouselComponent />
    <div class="card-collections top">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div class="card-collections" v-show="hidden">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <button @click="toggleHidden()">View all</button>

    <ProductGrid />
  </div>
</template>

<style scoped>
.container {
  width: auto;
}
.card-collections {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
  margin: 0 70px;
}
button {
  all: unset;
  cursor: pointer;
  border: 1px solid black;
  width: 200px;
  height: 48px;
  text-align: center;
  margin: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.top {
  margin-top: 70px;
}
</style>
