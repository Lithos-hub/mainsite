<template>
  <div id="navbar">
    <v-app-bar
      color="secondary accent-4"
      dark
      height="180"
      src="../assets/img/navbar-background.jpg"
    >
      <v-row>
        <v-col>
          <v-btn class="ml-2" id="home-btn" to="/" depressed>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-toolbar-title
            ><h1 id="brand-name">Carlos Segura García</h1>
            <h2 id="brand-subtitle">Front-end Developer</h2></v-toolbar-title
          >
        </v-col>
        <v-col>
          <a href="https://github.com/Lithos-hub">
            <v-btn class="ml-2 float-right" rounded id="git-btn">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </a>

          <a href="https://www.linkedin.com/in/carlos-segura-garcia">
            <v-btn class="ml-2 float-right" rounded id="linke-btn">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </a>

          <v-btn class="ml-2 float-right" id="about-btn" to="/about">
            <v-list-item-content>About</v-list-item-content>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #navbar {
    box-shadow: 0px 0px 15px gray;
  }

  #brand-name {
    letter-spacing: 1px;
    font-size: 1em;
    text-align: right;
    margin: 0 auto;
    font-weight: 100;
    color: white;
    background: url(../assets/img/background-3.jpg) no-repeat;
    background-attachment: fixed;
    background-position: left;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
  }

  #brand-subtitle {
    letter-spacing: 1px;
    font-size: 15px !important;
    text-align: right;
    margin: 0 auto;
    font-family: $style5;
    color: white;
    background: url(../assets/img/background-7.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
    text-transform: uppercase;
  }

  #git-btn {
    background-color: #1a1e22;

    &:hover {
      text-decoration: none;
    }
  }

  #linke-btn {
    background-color: #0a66c2;
    &:hover {
      text-decoration: none;
    }
  }

  #about-btn {
    background-color: brown;
    &:hover {
      text-decoration: none;
    }
  }

  #home-btn {
    background-color: transparent !important;
    &:hover {
      text-decoration: none;
    }
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #navbar {
    box-shadow: 0px 0px 15px gray;
  }

  #brand-name {
    letter-spacing: 10px;
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
    font-weight: 100;
    color: white;
    background: url(../assets/img/background-3.jpg) no-repeat;
    background-attachment: fixed;
    background-position: left;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
  }

  #brand-subtitle {
    letter-spacing: 20px;
    font-size: 2em !important;
    text-align: center;
    margin: 0 auto;
    font-family: $style5;
    color: white;
    background: url(../assets/img/background-7.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
    text-transform: uppercase;
  }

  #git-btn {
    background-color: #1a1e22;

    &:hover {
      text-decoration: none;
    }
  }

  #linke-btn {
    background-color: #0a66c2;
    &:hover {
      text-decoration: none;
    }
  }

  #about-btn {
    background-color: brown;
    &:hover {
      text-decoration: none;
    }
  }

  #home-btn {
    background-color: transparent !important;
    &:hover {
      text-decoration: none;
    }
  }
}
// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #navbar {
    box-shadow: 0px 0px 15px gray;
  }

  #brand-name {
    letter-spacing: 10px;
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
    font-weight: 100;
    color: white;
    background: url(../assets/img/background-3.jpg) no-repeat;
    background-attachment: fixed;
    background-position: left;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
  }

  #brand-subtitle {
    letter-spacing: 20px;
    font-size: 2em !important;
    text-align: center;
    margin: 0 auto;
    font-family: $style5;
    color: white;
    background: url(../assets/img/background-7.jpg) no-repeat;
    background-attachment: fixed;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(2.5);
    text-transform: uppercase;
  }

  #git-btn {
    background-color: #1a1e22;

    &:hover {
      text-decoration: none;
    }
  }

  #linke-btn {
    background-color: #0a66c2;
    &:hover {
      text-decoration: none;
    }
  }

  #about-btn {
    background-color: brown;
    &:hover {
      text-decoration: none;
    }
  }

  #home-btn {
    background-color: transparent !important;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
