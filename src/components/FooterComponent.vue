<template>
  <div class="container">
    <div class="col col-1">
      <h2>About your store</h2>
      <br />
      <p>
        We dare to be different and we invite you to do the same. We'd love you
        to join us on this colourful adventure of being you. You are here to be
        yourself. Fully and unapologetically.
      </p>
      <br />
      <p>Now, let's show to the world what we are made of!</p>
      <br />
      <div class="social-links">
        <img src="../assets/social-icons/insta.svg" alt="" class="item-1" />
        <img src="../assets/social-icons/fb.svg" alt="" />
        <img src="../assets/social-icons/twitter.svg" alt="" />
        <img src="../assets/social-icons/pinterest.svg" alt="" />
      </div>
    </div>
    <div class="col">
      <h2>Helpful Links</h2>
      <br />
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="col">
      <h2>Quick Shop</h2>
      <br />
      <ul>
        <li>Blended Smoothies</li>
        <li>Juices</li>
        <li>Original Smoothies</li>
        <li>Seasonal Favorites</li>
      </ul>
    </div>
    <div class="col">
      <h2>Let's stay in touch</h2>
      <br />
      <p>Sign up for exclusive offers, original stories, events and more.</p>
      <br />
      <input type="text" name="" id="" placeholder="Enter your email address" />
      <br />
      <br />
      <button>Subscribe</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #fafafa;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  padding: 20px;
  margin: 60px 0 0 0;
  min-width: 100%;
  grid-gap: 5%;
}
input {
  padding: 10px;
  width: 100%;
}
button {
  all: unset;
  background-color: black;
  width: 200px;
  height: 48px;
  color: white;
  text-align: center;
  cursor: pointer;
}
li {
  cursor: pointer;
  margin: 5px;
}
.social-links > * {
  margin: 16px;
}
.item-1 {
  margin-left: 0;
}

@media screen and (max-width: 850px) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
  .col {
    height: fit-content;
    margin: 15px 0 0 15px;
  }
  .social-links {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 440px) {
  .container {
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  .col {
    height: fit-content;
    margin-bottom: 10px;
    overflow: hidden;
  }
}
</style>
