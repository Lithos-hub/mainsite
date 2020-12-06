<template>
  <v-footer>
    <div class="row d-block text-center">
      <v-col cols="12">
        <v-card-text>
          <v-btn id="linke-icon" class="mx-4 white--text" icon to="https://www.linkedin.com/in/carlos-segura-garcia/">
            <v-icon size="24px"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn id="git-icon" class="mx-4 white--text" icon to="https://github.com/Lithos-hub">
            <v-icon size="24px"> mdi-github </v-icon>
          </v-btn>
        </v-card-text>
      </v-col>

      <v-col cols="12">
        <v-card-text class="white--text">
          <h3 id="madewith">Made with <v-icon id="heart">mdi-heart</v-icon> and <v-icon id="vuejs">mdi-vuejs</v-icon></h3>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>Carlos Segura García</strong> </v-card-text>
      </v-col>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#heart {
  color: red !important;
  font-size: 1em;
}
#vuejs {
  color: #3fb27f;
  font-size: 1em;
}

#madewith {
  font-family: $style3;
  font-size: 3em;
}

#linke-icon,
#git-icon {
  &:hover {
    text-decoration: none;
  }
}
</style>
