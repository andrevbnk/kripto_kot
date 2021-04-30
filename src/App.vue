<template>
  <v-app >
    <div class="main">
    <Header />
      <Quotation/>
      <Diagram />
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Diagram from './components/Diagram';
import Quotation from './components/Quotation';

export default {
  name: 'App',

  components: {
    Header,
    Diagram,
    Quotation
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.main{
  display: grid;
  grid-template-areas: 
    "header header header"
    "quotation  diagram diagram"
    "quotation  diagram diagram";
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 20% 1fr 15%;
  grid-gap: 10px;
  height: 100vh;
  margin: 0;
  background: black;
}
</style>
