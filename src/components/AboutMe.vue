<template>
  <div id="AboutMe">
  <v-container>
  <h1 id="aboutme-title">About me</h1>
  </v-container>
    <div id="about-me">
      <div class="row">
        <div class="col-md-6 col-xs-12" id="left-col"></div>

        <div class="col-md-6 col-xs-12" id="right-col">
        

            <v-container class="p-5">
          <v-sheet height="100%" width="100%" class="align-center m-auto">
<h3 class="text-center">Hello!</h3>
              <p id="about-text">
<br><br>
I'm Carlos. I am a chocolate lover <i class="em em-chocolate_bar" aria-role="presentation" aria-label="CHOCOLATE BAR"></i>, guitarist <i class="em em-guitar" aria-role="presentation" aria-label="GUITAR"></i> and this is my presentation website as a web developer <i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>. My first steps in the field of web technologies started in 2019, but actually, I have been interested in computers and computing since I was a child <i class="em em-baby" aria-role="presentation" aria-label="BABY"></i>.
<br><br>
Below you will find a series of projects that I have been doing where I test myself with the handling of design, layout and web programming technologies. Some of those technologies are:
<br><br>
<ul  style="list-style-type:none;">
<li>HTML<v-icon id="html-icon">mdi-language-html5</v-icon></li>
<hr class="bg-info">
<li>CSS<v-icon id="css-icon">mdi-language-css3</v-icon></li>
<hr class="bg-info">
<li>SCSS / SASS<v-icon id="sass-icon">mdi-sass</v-icon></li>
<hr class="bg-info">
<li>JavaScript<v-icon id="js-icon">mdi-language-javascript</v-icon></li>
<hr class="bg-info">
<li>Vue.js (vuex, axios, vuetify, etc.) <v-icon id="vue-icon">mdi-vuejs</v-icon> + <v-icon id="vuetify-icon">mdi-vuetify</v-icon></li>
<hr class="bg-info">
<li>Bootstrap<v-icon id="bootstrap-icon">mdi-bootstrap</v-icon></li>
<hr class="bg-info">
<li>APIs<v-icon id="api-icon">mdi-api</v-icon></li>
<hr class="bg-info">
<li>Google Firebase<v-icon id="firebase-icon">mdi-firebase</v-icon></li>
<hr class="bg-info">
</ul>
<br><br>
I have tried to cover different fields with each of these projects: a blog, a store, a business dashboard, a fictitious smartphone homepage, etc.
<br><br>
<br><br>
                </p>
<h3 class="text-center">
Keep on scrolling! <i class="em em-three_button_mouse" aria-role="presentation" aria-label=""></i></h3>
          </v-sheet>
            </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section1",
};
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';






// ******* MOBILE RESPONSIVE ******* // 
@media only screen and (min-width: 360px) {

#AboutMe {
  margin-top: 300px;
}

#aboutme-title {
  font-size: $mobile;
  text-align: center;
  font-family: $style2;
  letter-spacing: 40px;
  background: url(../assets/img/section-titles.jpg);
background-attachment: fixed;
background-position: top;
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

#left-col {
  display: none;
  height: 600px;
  background: url(../assets/img/section1-1.jpg);
  background-position: bottom;
  background-attachment: fixed;
  background-size: cover;
}

#right-col {
  background-color: #ffffff;
  height: 1300px;
}

#about-text {
    font-size: 14px;
    text-align: justify;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 auto;
}

#html-icon{
  color: #E45923 !important;
  font-size: 2em;
}

#css-icon {
  color: #1864A0 !important;
    font-size: 2em;
}

#sass-icon {
  color: #C96195 !important;
    font-size: 2em;
}

#js-icon {
  color: #EFD81D !important;
    font-size: 2em;
}

#bootstrap-icon {
  color: #533B78 !important;
    font-size: 2em;
}

#firebase-icon {
  color: #F7C428 !important;
    font-size: 2em;
}

#vue-icon {
  color: #3FB27F !important;
    font-size: 2em;
}

#vuetify-icon {
  color:#79C1F7 !important;
    font-size: 2em;
}

#api-icon {
    color:#b1277e !important;
    font-size: 2em;
}

}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {   

#AboutMe {
  margin-top: 500px;
}

#aboutme-title {
  font-size: $laptop;
  text-align: center;
  font-family: $style2;
  letter-spacing: 40px;
  background: url(../assets/img/section-titles.jpg);
background-attachment: fixed;
background-position: top;
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

#left-col {
  display: inline;
  height: 1700px;
  background: url(../assets/img/section1-1.jpg);
  background-position: bottom;
  background-attachment: fixed;
  background-size: cover;
}

#right-col {
  background-color: #ffffff;
  height: 1700px;
}

#about-text {
    font-size: 20px;
    text-align: justify;
    padding-left: 80px;
    padding-right: 80px;
    margin: 0 auto;
}

#html-icon{
  color: #E45923 !important;
  font-size: 2em;
}

#css-icon {
  color: #1864A0 !important;
    font-size: 2em;
}

#sass-icon {
  color: #C96195 !important;
    font-size: 2em;
}

#js-icon {
  color: #EFD81D !important;
    font-size: 2em;
}

#bootstrap-icon {
  color: #533B78 !important;
    font-size: 2em;
}

#firebase-icon {
  color: #F7C428 !important;
    font-size: 2em;
}

#vue-icon {
  color: #3FB27F !important;
    font-size: 2em;
}

#vuetify-icon {
  color:#79C1F7 !important;
    font-size: 2em;
}

#api-icon {
    color:#b1277e !important;
    font-size: 2em;
}
  
}


// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {


#AboutMe {
  margin-top: 500px;
}

#aboutme-title {
  font-size: $desktop;
  text-align: center;
  font-family: $style2;
  letter-spacing: 40px;
  background: url(../assets/img/section-titles.jpg);
background-attachment: fixed;
background-position: top;
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

#left-col {
  display: inline;
  height: 1300px;
  background: url(../assets/img/section1-1.jpg);
  background-position: bottom;
  background-attachment: fixed;
  background-size: cover;
}

#right-col {
  background-color: #ffffff;
  height: 1000px;
}

#about-text {
    font-size: 20px;
    text-align: justify;
    padding-left: 80px;
    padding-right: 80px;
    margin: 0 auto;
}

#html-icon{
  color: #E45923 !important;
  font-size: 2em;
}

#css-icon {
  color: #1864A0 !important;
    font-size: 2em;
}

#sass-icon {
  color: #C96195 !important;
    font-size: 2em;
}

#js-icon {
  color: #EFD81D !important;
    font-size: 2em;
}

#bootstrap-icon {
  color: #533B78 !important;
    font-size: 2em;
}

#firebase-icon {
  color: #F7C428 !important;
    font-size: 2em;
}

#vue-icon {
  color: #3FB27F !important;
    font-size: 2em;
}

#vuetify-icon {
  color:#79C1F7 !important;
    font-size: 2em;
}

#api-icon {
    color:#b1277e !important;
    font-size: 2em;
}
  
}

</style>
