<template>
  <div>
    <div id="loader-background">
      <div id="loader">{{ percent }}%</div>
    </div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    percent: 0,
  }),
  methods: {
    startLoading() {
      document.body.style.overflow = "hidden";

      this.loading = setInterval(this.load, 25);
    },
    load() {
      this.percent < 100 ? this.percent++ : this.doneLoading();
    },
    doneLoading() {
      clearInterval(this.loading);

      let loaderTransition = (document.getElementById(
        "loader-background"
      ).style.transition = "2s");
      let loaderOpacity = (document.getElementById("loader-background").style.opacity =
        "0");
      let loaderIndex = (document.getElementById("loader-background").style.zIndex =
        "-10000");

      this.showScrollBar();
    },
    showScrollBar() {
      let loader = document.getElementById("loader-background");

      if (loader.style.opacity === "0") {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      } else {
        loader.style.opacity = "1";
      }
    },
  },
  mounted() {
    this.startLoading();
    this.showScrollBar();
  },
};
</script>

<style lang="scss">
* {
  font-family: "Exo 2", sans-serif;
}

body {
  background-color: rgb(243, 243, 243);
}

body,
html {
  overflow: hidden;
}

#loader-background {
  background: #151515;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99999;
}
#loader {
  font-size: 40em;
  background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #loader-background {
    background: #151515;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999;
  }
  #loader {
    font-size: 10em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #loader-background {
    background: #151515;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999;
  }
  #loader {
    font-size: 25em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #loader-background {
    background: #151515;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99999;
  }
  #loader {
    font-size: 40em;
    background: linear-gradient(to right, rgb(13, 8, 104), rgb(12, 196, 156));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}

/* ***************************** SCROLL BAR ***************************** */

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: url(./assets/img/section1-1.jpg);
  background-position: center;
  background-size: cover;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(196, 196, 196);
  background-position: center;
  background-attachment: scroll;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: url(./assets/img/scroll-background.jpg);
}
</style>
