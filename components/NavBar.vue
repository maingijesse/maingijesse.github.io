<template>
  <div class="relative z-30 transition-all duration-500 container mx-auto px-6">
    <nav
      role="navigation"
      :class="{ scrolled: !view.atTopOfPage }"
      class="container  flex justify-between items-center h-16  text-white bg-app-dark  mx-auto"
    >
      <nuxt-link to="/">
        <h1 class="text-white font-bold text-lg md:text-2xl  uppercase">
          <span class="text-red-brand">&#60;</span> Jesse maingi
          <span class="text-red-brand">&#47;</span>
          <span class="text-red-brand">&#62;</span>
        </h1>
      </nuxt-link>
      <div class="px-4 cursor-pointer md:hidden text-white" @click="toggle">
        <svg
          v-if="!open"
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <svg
          v-else
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div class="hidden md:block text-white font-semibold text-lg  uppercase">
        <a href="#" class="p-4">Home</a>
        <a href="#about" class="p-4">About Me</a>
        <a href="#skills" class="p-4">Skills</a>
        <a href="#projects" class="p-4">Work</a>
        <a href="#contact" class="p-4">Contact</a>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class=" absolute top-16 right-0 bg-app-dark  w-full flex flex-col justify-center items-center z-40 duration-300 md:hidden  h-screen border-t-1  "
      >
        <div v-for="link in links" :key="link.name" @click="toggle">
          <a
            :href="link.to"
            class="p-4 block cursor-pointer hover:bg-red-brand-lighter w-full text-center "
            >{{ link.name }}</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      links: [
        { name: "Home", to: "#" },
        { name: "About Me", to: "#about" },
        { name: "Skills", to: "#skills" },
        { name: "Work", to: "#projects" },
        { name: "Contact ", to: "#contact" }
      ],
      view: {
        atTopOfPage: true
      }
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 500) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  /* @apply text-red-brand; */
}
.scrolled {
  @apply fixed origin-center;
}
</style>
