<template>
  <div class="app antialiased min-h-screen bg-app-dark ">
    <nav-bar></nav-bar>
    <div class="container mx-auto">
      <!-- <h1>test</h1> -->
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar }
};
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: #202833;
}
body {
  background-color: #202833;
}
.app {
  /* background: rgb(76, 105, 147);
  background: radial-gradient(
    circle,
    rgba(76, 105, 147, 1) 0%,
    rgba(48, 62, 82, 1) 100%
  ); */

  /* background-color: #202833; */
  /* background-color: #141628; */
  /* min-height: 100vh; */

  font-family: "Source Sans Pro", sans-serif;
}

.btn {
  @apply text-white text-lg inline-block  bg-red-brand py-3 md:py-4 px-8 md:px-10 hover:bg-red-brand-lighter transition;
}

.before-line::before {
  content: "";
  position: absolute;
  width: 3rem;
  height: 4px;
  background-color: #fd4370;
  left: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
