<template>
   <v-app-bar
      app
      color="dark"
      dark
      id='header'
      class='d-flex justify-center'
    >
      <div class="logo">
          
          <p class="gradient-text">CRYPTO</p>
      </div>


    </v-app-bar>

</template>

<script>
export default {

}
</script>

<style>
#header {
  grid-area: header;
   background: #191A20!important;
}
/* .logo{
      -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    
    text-decoration: underline;
    color:rgba(31, 70, 106, 0.88);
} */

.gradient-text {
  font-family: 'Rubik One', sans-serif;
  font-size: 30px;
  background: linear-gradient(90deg, rgba(31, 70, 106, 0.88) 14.34%, rgba(255, 255, 255, 0) 161.93%), #FFFFFF;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0,0,0,0.3);
  color: #0B2349;
  text-decoration: underline;
  display: table;
  margin: 20px auto;
}
</style>