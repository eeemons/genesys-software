<template>
  <div class="container">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="image-container">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#"
      ><img src="../../assets/previous.svg" alt=""
    /></a>
    <a class="next" @click="next" href="#"
      ><img src="../../assets/next.svg" alt=""
    /></a>

    <div class="content-container">
      <p class="hero-content">ORGINAL SMOOTHIES</p>
      <h2 class="hero-title">Make the Most of Morning</h2>
      <p class="hero-banner-lines">
        The quickest, easiest way to get in your fruits and veggies
      </p>
      <div class="btn-group">
        <button class="btn btn-white">Learn More</button>
        <button class="btn btn-black">Shop Now</button>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "@/assets/banner.png";
import AnotherBanner from "@/assets/anotherbanner.jpg";
export default {
  name: "Slider",
  data() {
    return {
      images: [banner, AnotherBanner], //could use link to populate the arrays
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      // this.timer = setInterval(this.next, 4000); //for auto scrolling feature
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
<style scoped>
.container {
  height: fit-content;
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
.image-container {
  width: 100vmax;
  overflow: hidden;
  position: relative;
}

.content-container {
  position: absolute;
  bottom: 10%;
  left: 10%;
}
.btn {
  all: unset;
  width: 200px;
  height: 48px;
  text-align: center;
  margin: 20px;
  cursor: pointer;
}

.btn-white {
  background-color: white;
  margin-left: 0;
}

.btn-black {
  background-color: black;
  color: white;
  margin-right: 0;
}

img {
  height: auto;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 32px;
  height: 32px;
  transition: 0.7s ease;
  overflow: hidden;
  border-radius: 0 4px 4px 0;
}

.hero-content {
  font-weight: 700;
  font-size: 16px;
  color: white;
}
.hero-title {
  font-weight: 700;
  font-size: 57.33px;
  color: white;
}
.hero-banner-lines {
  font-weight: 600;
  font-size: 19.2px;
  color: white;
}
.next {
  right: 5vw;
}

.prev {
  left: 5vw;
}

.prev:hover,
.next:hover {
  background-color: rgba(216, 203, 203, 0.9);
}
</style>
