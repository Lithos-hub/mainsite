<template>
  <div>
    <h1 id="about-title">About</h1>
    <v-divider></v-divider>

    <v-container>
      <p id="about-text">
       <ul class="text-center" style="list-style-type:none;">
       <li>- All images used on this website are non copyrighted.</li>
       <li>- For the design I used Vuetify and Bootstrap with custom CSS/SCSS.</li>
       <li>- Each app in my portfolio is documented with details about its functionality and features.</li>
       <li>- I will be updating my designs and applications with improvements and additions of features and new functionalities.</li>
       <li>- All my designs and apps are available in my GitHub repository.</li>
       <hr>
       <li>You may contact me<li>
       <li>
      
       <span id="via-linke">via LinkedIn</span> or <span id="via-email">via email</span></li> 
       <li> <a href="https://www.linkedin.com/in/carlos-segura-garcia/" id="tolinke"><v-icon id="linke-icon">mdi-linkedin</v-icon></a><a href="mailto:lithos.contact@gmail.com" id="mailto"><v-icon id="email-icon">mdi-email</v-icon></a></li>
      
  
       
       </ul>
      </p>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#about-title {
  font-size: 20em;
  text-align: center;
  font-family: $style2;
  letter-spacing: 40px;
  background: url(../assets/img/background-2.jpg);
  background-attachment: fixed;
  background-position: top;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#about-text {
  font-size: 25px;
}

#linke-icon {
    font-size: 3em;
  color: #0A66C2;
  margin-right: 200px;
}

#email-icon {
  font-size: 3em;
  color: #DF4D47;
  margin-left: 200px;
}
#via-linke {
  margin-right: 350px;
}

#linke-icon:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
#email-icon:hover{
    transform: scale(1.1);
    cursor: pointer;
  }

  #mailto:hover {
    text-decoration: none;
  }

  #tolinke:hover{
    text-decoration: none;

  }

</style>
