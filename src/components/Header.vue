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
    name: "Header"
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

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

#scroll-arrow{
  margin-top: 20px;
  position: relative;
  margin: 0 auto;
  animation: move 2s infinite;
  color: blue;

}
#mouse-img {
  text-align: center !important;
  align-items: center !important;
  margin: 0 auto !important;
}

@keyframes move {
  from {bottom: -60px; opacity: 1;}
  to {bottom: -90px; opacity: 0;}
}



</style>