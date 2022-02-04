<template>
  <div>
    <section
      id="home"
      class="home  space-y-10  grid md:items-center grid-cols-1 md:grid-cols-2 gap-10 p-6 pt-36"
    >
      <div class="text text-white text-center md:text-left  ">
        <h1 class="text-5xl md:text-8xl font-semibold mb-4 md:mb-10">
          Hey, I'm <span class="text-red-brand">Jesse</span>
        </h1>
        <h2 class="text-xl sm:text-3xl md:text-5xl">
          a <span class="text-red-brand">self-taught</span> front-end developer
          <br />
          from Nairobi, Kenya.
        </h2>
        <p class="text-gray-200 text-xl md:text-2xl mt-4 md:mt-10">
          Stick around to learn more about me
        </p>
        <a href="#projects" class="btn mt-4 md:mt-10 ">See my work</a>
      </div>
      <div class="image px-6 ">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_pzfq9mm3.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: auto;"
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>

    <section id="about" class="about  p-6 py-20">
      <h1 class="text-white text-2xl md:text-4xl relative mb-10  ">
        <span class="before-line"></span><span class="ml-10">About </span>
      </h1>
      <div class="flex flex-wrap justify-center md:space-x-16 items-center">
        <div class="profile-image">
          <div
            class="image p-4 border-4 border-red-brand inline-block rounded-full hover:border-red-brand-lighter "
          >
            <img
              src="jesse.jpg"
              alt="jesse maingi"
              class="rounded-full block w-40 sm:w-48 md:w-64 h-auto"
            />
          </div>
          <div class="contact">
            <h2
              class="text-white text-center mt-4 text-lg font-semibold tracking-wider"
            >
              Jesse Maingi
            </h2>
            <div class="links flex justify-center mt-4 space-x-6">
              <a href="https://twitter.com/Cjmaingi" target="_blank">
                <svg
                  class="h-8 w-8 text-red-brand"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </a>
              <a href="https://github.com/maingijesse" target="_blank">
                <svg
                  class="h-8 w-8 text-red-brand"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </a>
              <a href="https://codepen.io/JesseMukonza" target="_blank">
                <svg
                  class="h-8 w-8 text-red-brand"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon
                    points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                  />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                  <polyline points="2 15.5 12 8.5 22 15.5" />
                  <line x1="12" y1="2" x2="12" y2="8.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-description text-gray-200  max-w-2xl mt-4 md:mt-0 ">
          <h2 class="text-2xl font-bold mb-4 text-center md:text-left">
            Hello there 🙂
          </h2>
          <p class="text-xl leading-7 ">
            My name is Jesse Maingi. I'm a self-taught developer with some bias
            towards working on the front-end spectrum. I am always learning
            something new and slowly transitioning into full-stack web
            development. I have a passion for creating clean and attractive user
            interfaces, animations and creative user experiences.
          </p>
          <a href="#contact" class="text-red-brand-lighter text-xl mt-4 block"
            >Let's make something special together</a
          >
        </div>
      </div>
    </section>
    <section id="skills" class="about  p-6 py-20">
      <h1 class="text-white text-2xl md:text-4xl relative mb-10  ">
        <span class="before-line"></span><span class="ml-10">Skills </span>
      </h1>
      <h2
        class="text-2xl font-bold mb-4 text-center text-gray-200 md:text-left capitalize"
      >
        Below are some of my skills &amp; tools i use
      </h2>
      <div
        class="skills text-gray-200 grid grid-cols-2 md:grid-cols-4 md:justify-items-center "
      >
        <div>
          <h3
            class=" text-sm sm:text-base md:text-lg hover:underline mb-2 mt-2 underline"
          >
            Experienced In
          </h3>

          <ul class="text-sm">
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>Gsap</li>
            <li>Bootstrap</li>
            <li>TailwindCss</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Vuetify</li>
          </ul>
        </div>
        <div>
          <h3
            class="text-sm sm:text-base md:text-lg hover:underline mb-2 mt-2 underline"
          >
            Tools I Use
          </h3>
          <ul class="text-sm">
            <li>Git</li>
            <li>Github</li>
            <li>Snowpack</li>
            <li>Visual Studio Code</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h3
            class="text-sm sm:text-base md:text-lg hover:underline mb-2 mt-2 underline"
          >
            Currently Learning
          </h3>
          <ul class="text-sm">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div>
          <h3
            class="text-sm sm:text-base md:text-lg hover:underline mb-2 mt-2 underline"
          >
            Interested In
          </h3>
          <ul class="text-sm">
            <li>Quasar</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="projects" class="projects p-6 py-20">
      <h1 class="text-white text-2xl md:text-4xl relative mb-10  ">
        <span class="before-line"></span><span class="ml-10">Projects </span>
      </h1>
      <h2
        class="text-2xl font-bold mb-4 text-center text-gray-200 md:text-left capitalize"
      >
        See some of my creations
      </h2>

      <div class="portfolio grid md:grid-cols-2   gap-10 md:gap-16 my-24 ">
        <div
          class="portfolio-item  hover:shadow-2xl"
          v-for="project in projects"
          :key="project.id"
        >
          <h2
            class="text-white text-lg md:text-2xl uppercase font-semibold mb-2"
          >
            {{ project.name }}
          </h2>
          <a :href="project.link" target="_blank">
            <div class="images flex items-center">
              <div class="image1 w-full md:w-4/5 z-10">
                <img
                  :src="project.imageLarge"
                  alt=""
                  class="block w-full h-auto"
                />
              </div>
              <div class="image-2 hidden md:block md:w-1/5 -ml-1 ">
                <img
                  :src="project.imageSmall"
                  alt=""
                  class="block w-full h-auto"
                />
              </div>
            </div>
            <div class="description my-4">
              <h3 class="text-gray-200 text-base">{{ project.description }}</h3>
              <div class="text-white">
                <span> Made Using: &#xa0; </span>
                <span v-for="st in project.stack" :key="st">
                  #{{ st }} &#xa0;
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="contact" class="contact p-6 py-20">
      <h1 class="text-white text-2xl md:text-4xl relative mb-10  ">
        <span class="before-line"></span><span class="ml-10">Contact Me </span>
      </h1>
      <h2
        class="text-2xl font-bold mb-4 text-center text-gray-200 md:text-left capitalize"
      >
        Say Hi 👋 ...
      </h2>
      <p class="text-gray-200 text-xl md:text-2xl mt-4 md:mt-10">
        Let me know if you are interested in my services, collaboration or you
        just wanna say hi. I will reply as soon as possible.
      </p>
      <div class="contacts mt-10 flex flex-col lg:flex-row">
        <!-- form -->
        <form
          class=""
          action="https://formsubmit.co/c5e276116d6ca57ac08244e46e56f8f2"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-200"
                  >Name</label
                >
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-800 bg-opacity-40  border border-gray-300 focus:border-red-brand-lighter focus:bg-gray-900 focus:ring-2 focus:ring-red-brand text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-200"
                  >Email</label
                >
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-800 bg-opacity-40  border border-gray-300 focus:border-red-brand-lighter focus:bg-gray-900 focus:ring-2 focus:ring-red-brand text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-200"
                  >Message</label
                >
                <textarea
                  required
                  id="message"
                  name="message"
                  class="w-full bg-gray-800 bg-opacity-40  border border-gray-300 focus:border-red-brand-lighter focus:bg-gray-900 focus:ring-2 focus:ring-red-brand h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full flex justify-center">
              <button
                type="submit"
                class="text-white text-lg flex items-center  bg-red-brand py-3 md:py-4 px-8 md:px-10 hover:bg-red-brand-lighter transition"
              >
                <span>Send</span
                ><span
                  ><svg
                    class="h-6 w-6 ml-2 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" /></svg
                ></span>
              </button>
            </div>
          </div>
        </form>
        <!-- end of form -->
        <!-- talk -->
        <div class="p-24">
          <h2 class="text-2xl font-bold mb-4  text-gray-200 capitalize">
            Let's Talk 📧 ...
          </h2>
          <Mailto
            mail="maingijesse@gmail.com"
            title="Write me an email"
            class="text-red-brand-lighter text-lg "
          />
        </div>
        <!-- end of talk -->
      </div>
    </section>
    <hr class="text-gray-400" />
    <section id="footer" class="footer p-6  py-10">
      <footer class="flex justify-between items-center">
        <div class="links flex space-x-1 sm:space-x-4">
          <a href="https://twitter.com/Cjmaingi" target="_blank">
            <svg
              class="h-4 md:h-8 sm:h-6 sm:w-6  w-4 md:w-8  text-red-brand"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </svg>
          </a>
          <a href="https://github.com/maingijesse" target="_blank">
            <svg
              class="h-4 md:h-8  sm:h-6 sm:w-6 w-4 md:w-8  text-red-brand"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
          </a>
          <a href="https://codepen.io/JesseMukonza" target="_blank">
            <svg
              class="h-4 md:h-8 sm:h-6 sm:w-6  w-4 md:w-8  text-red-brand"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
              <polyline points="2 15.5 12 8.5 22 15.5" />
              <line x1="12" y1="2" x2="12" y2="8.5" />
            </svg>
          </a>
        </div>
        <div class="copy">
          <p class="text-gray-200 text-base md:text-2xl ">
            <a href="https://twitter.com/Cjmaingi" target="_blank"
              >Jesse Maingi</a
            >
            &copy; {{ year }}. <br class="block md:hidden" />
            All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "MovieApi",
          imageLarge: "/portfolio/movieapi.png",
          imageSmall: "portfolio/movieapi-phone.png",
          stack: ["Vue", "Vuetify", "sass"],
          description:
            "A Movie Listing Website built using data from themoviedb.org  api",
          link: "https://movieapi.vercel.app"
        },
        {
          id: 2,
          name: "KPLMLtd",
          imageLarge: "/portfolio/kpml.png",
          imageSmall: "portfolio/kpml-phone.png",
          stack: ["Parcel", "Html", "JavaScript", "Sass"],
          description: "A fictional AirBnb porperty management company website",
          link: "https://kpmltd.vercel.app"
        },
        {
          id: 3,
          name: "KwetuBikes",
          imageLarge: "/portfolio/kwetubikes.png",
          imageSmall: "portfolio/kwetubikes-phone.png",
          stack: ["Snowpack", "JavaScript", "Bootstrap", "Sass"],
          description: "A superbikes shop custom website",
          link: "https://kwetu-bikes.vercel.app"
        },
        {
          id: 4,
          name: "Kimshots",
          imageLarge: "/portfolio/kimshots.png",
          imageSmall: "portfolio/kimshots-phone.png",
          stack: ["Vue", "Nuxt", "Sass"],
          description: "A fictional photography company website",
          link: "https://kimshots.vercel.app"
        },
        {
          id: 4,
          name: "Jesse Maingi",
          imageLarge: "/portfolio/maingijesse.png",
          imageSmall: "portfolio/maingijesse-phone.png",
          stack: ["Vue", "Nuxt", "TailwindCss"],
          description: "My portfolio website",
          link: "https://maingijesse.github.io"
        }
      ]
    };
  },
  computed: {
    year() {
      let today = new Date();
      return today.getFullYear();
    }
  },
  methods: {}
};
</script>

<style scoped>
.skills ul li {
  @apply pl-6 relative lg:text-lg;
}

.skills ul li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  font-size: 1.2rem;
  color: #ff5d8a;
}
</style>
