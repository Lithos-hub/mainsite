<template>
  <div id="navbar">
    <v-app-bar color="secondary accent-4" dark height="180" src="../assets/img/navbar-background.jpg">
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
          <v-btn class="ml-2 float-right" rounded id="git-btn" to="https://github.com/Lithos-hub">
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn class="ml-2 float-right" rounded id="linke-btn" to="https://www.linkedin.com/in/carlos-segura-garcia/">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>

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
#navbar {
  box-shadow: 0px 0px 15px gray;
}

#brand-name {
  letter-spacing: 8px;
  font-size: 3em;
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
  letter-spacing: 6px;
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
  color: white;
  background: url(../assets/img/background-7.jpg) no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(2.5);
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
</style>
