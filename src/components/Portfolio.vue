<template>
  <div id="portfolio">
    <v-container>
      <h1 id="portfolio-title">Portfolio</h1>
    </v-container>

    <v-container fluid id="portfolio-content">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <h2 class="display-1 text-center" id="design-title">Designs</h2>
          <hr class="bg-white" />
          <div class="mx-auto" max-width="100%">
            <ul class="list-group" id="designs-list">
              <li class="list-group-item no-background designs-text">
                Blog
                <small style="color: orange" class="d-block"
                  >(A simple miscellaneous blog design)</small
                >
              </li>
              <li class="list-group-item no-background designs-text">
                IT Company
                <small style="color: orange" class="d-block"
                  >(Main website of a ficticial technology company)</small
                >
              </li>
              <li class="list-group-item no-background designs-text">
                Travel Agency
                <small style="color: orange" class="d-block"
                  >(Main website of a ficticial travel agency)</small
                >
              </li>
              <li class="list-group-item no-background designs-text">
                Product<small style="color: orange" class="d-block">
                  (Main website of a ficticional smartphone model)</small
                >
              </li>
              <li class="list-group-item no-background designs-text">
                NGO<small style="color: orange" class="d-block">
                  (Main website of a ficticional NGO)</small
                >
              </li>
              <!-- I'm not sure about this design, so I'll leave it for now
              <div class="disabled-item">
                <p class="soon-title">SOON</p>
                <div class="disabled-item">
                  <li class="list-group-item no-background text-disabled">
                    Experimental<small style="color: orange" class="d-block">
                      (An artistic website using rare tools and cool animations)</small
                    >
                  </li>
                </div>
              </div>
              -->
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <h2 class="display-1 text-center" id="apps-title">Apps</h2>
          <hr class="bg-white" />
          <div class="mx-auto" max-width="100%">
            <ul class="list-group" id="app-list">
              <li class="list-group-item no-backgroun apps-text">
                Corporate Dashboard
                <small style="color: orange" class="d-block"
                  >(A big and complex administration app for business)</small
                >
              </li>
              <li class="list-group-item no-backgroun apps-text">
                Login / Register system
                <small style="color: orange" class="d-block">(Using LocalStorage)</small>
              </li>
              <li class="list-group-item no-backgroun apps-text">
                Login / Register system
                <small style="color: orange" class="d-block"
                  >(Using Firebase with Google and Facebook authentication systems)</small
                >
              </li>
              <li class="list-group-item no-backgroun apps-text">
                Cover Letter Generator
                <small style="color: orange" class="d-block"
                  >(Create your custom cover letter and download it in PDF)</small
                >
              </li>
              <div class="disabled-item">
                <p class="soon-title">SOON</p>
                <div class="disabled-item">
                  <li class="list-group-item no-background text-disabled">
                    iMovies app<small style="color: orange" class="d-block">
                      (App about movies using the TMDb API)</small
                    >
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </v-container>

    <div id="sub-section2">
      <div class="text-center" id="quote">
        <v-container>
          <blockquote>
            <p id="quote-text">
              “Imagination will often carry us to worlds that
              <span id="never-were">never were</span>, <br />but without it we go
              <span id="nowhere">nowhere</span>.”
            </p>
            <footer class="blockquote-footer" id="quote-author">Carl Sagan</footer>
          </blockquote>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      selectedItem: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#portfolio {
  margin-top: 500px;
}

#portfolio-title {
  font-size: 20em;
  text-align: center;
  font-family: $style2;
  letter-spacing: 40px;
  background: url(../assets/img/section-titles.jpg);
  background-attachment: fixed;
  background-position: top;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#designs-list,
#app-list {
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
}

.no-background {
  background-color: transparent !important;
}

.designs-text,
.apps-text {
  font-size: 2em;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 5px black, 0px 0px 15px black;
  margin-top: 50px;
  letter-spacing: 5px;
  background: transparent;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
    cursor: pointer;
    border: 1px solid #ebdfd5;
  }
}

.soon-title {
  visibility: visible;
  color: rgb(47, 145, 197);
  font-size: 11em;
  opacity: 0.3;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.disabled-item {
  position: relative;
}

.text-disabled {
  font-size: 2em;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 5px black, 0px 0px 15px black;
  margin-top: 50px;
  letter-spacing: 5px;
  background: transparent;
  opacity: 0.5;
}

#portfolio-content {
  height: 100%;
  background: url(../assets/img/portfolio.jpg);
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
}

#design-title,
#apps-title {
  margin-top: 100px;
  letter-spacing: 50px;
  font-family: $style2;
  background: url(../assets/img/background-1.jpg);
  background-attachment: fixed;
  background-position: top;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#sub-section2 {
  height: 800px;
  width: 100%;
  background: url(../assets/img/background-4.jpg);
  background-attachment: fixed;
  background-position: center;
}

#quote {
  position: relative;
  top: 30%;
  font-size: 3em;
}

#quote-text {
  color: wheat;
  text-shadow: 0px 5px 10px black;
  font-family: $style4;
  background: url(../assets/img/background-6.jpg);
  background-position: right;
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(3);
}

#never-were {
  text-shadow: 0px 5px 10px black;
  font-family: $style4;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#nowhere {
  color: wheat;
  text-shadow: 0px 5px 10px black;
  font-family: $style4;
  background: url(../assets/img/background-4.jpg);
  background-position: right;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(2);
}

#quote-author {
  color: rgb(237, 237, 237);
  letter-spacing: 10px;
  background: url(../assets/img/background-7.jpg);
  background-attachment: fixed;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(2.5);
}
</style>
