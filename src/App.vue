<template>
  <div>
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
    //
  }),
};
</script>

<style>
* {
  font-family: "Exo 2", sans-serif;
}

body {
  background-color: rgb(243, 243, 243);
}

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
