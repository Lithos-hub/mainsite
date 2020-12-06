<template>
  <div>
    <Header id="header" />
    <AboutMe id="AboutMe" />
    <Portfolio id="portfolio" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

import { scrollfade } from "../hooks/scrollfade";

export default {
  name: "Home",
  components: {
    Header,
    AboutMe,
    Portfolio,
    Footer,
  },
  mounted() {
    scrollfade();
  },
};
</script>

<style lang="scss" scoped>
.fadeOut {
  opacity: 0;
  transition: 0.5s;
}
</style>
