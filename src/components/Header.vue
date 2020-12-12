<template>
  <div>
    <h1 id="main-title">Welcome to my personal website as front-end developer</h1>

    <div id="scroll-down">
      <div>
        <v-icon id="scroll-arrow">mdi-chevron-down</v-icon>
      </div>
      <v-img src="../assets/img/mouse.png" width="80" id="mouse-img"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #main-title {
    margin-top: 100px;
    font-size: 4em;
    text-align: center;
    font-family: $style1;
    color: white;
    background: url(../assets/img/background-1.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #scroll-down {
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  #scroll-arrow {
    margin-top: 20px;
    position: relative;
    margin: 0 auto;
    animation: move 2s infinite;
    color: #2692a9;
    font-size: 50px;
  }
  #mouse-img {
    display: none;
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  @keyframes move {
    from {
      bottom: -60px;
      opacity: 1;
    }
    to {
      bottom: -90px;
      opacity: 0;
    }
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #main-title {
    margin-top: 100px;
    font-size: 7em;
    text-align: center;
    font-family: $style1;
    color: white;
    background: url(../assets/img/background-1.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #scroll-down {
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  #scroll-arrow {
    margin-top: 20px;
    position: relative;
    margin: 0 auto;
    animation: move 2s infinite;
    color: #2692a9;
    font-size: 30px;
  }
  #mouse-img {
    display: block;
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  @keyframes move {
    from {
      bottom: -60px;
      opacity: 1;
    }
    to {
      bottom: -90px;
      opacity: 0;
    }
  }
}
// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #main-title {
    margin-top: 150px;
    font-size: 10em;
    text-align: center;
    font-family: $style1;
    color: white;
    background: url(../assets/img/background-1.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #scroll-down {
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  #scroll-arrow {
    margin-top: 20px;
    position: relative;
    margin: 0 auto;
    animation: move 2s infinite;
    color: #2692a9;
    font-size: 30px;
  }
  #mouse-img {
    display: block;
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto !important;
  }

  @keyframes move {
    from {
      bottom: -60px;
      opacity: 1;
    }
    to {
      bottom: -90px;
      opacity: 0;
    }
  }
}
</style>
