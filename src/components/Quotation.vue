<template>
  <nav id='quotation'>
  <v-card
    class="mx-auto"
    dark
    height="100%"
    min-width="340px"
  >
    <v-navigation-drawer width="100%"  permanent color="dark-primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{titleNav}}
          </v-list-item-title>

        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
            <v-row class='header__pair text-center'>
              <v-col>Валютные пары</v-col>
              <v-col>Изменение</v-col>
              <v-col>Цена</v-col>
            </v-row>
        <v-list-item
          v-for="pair in allPairs"
          :key="pair.title"
          link
          @click='change(pair)'
        >
          <SinglePair :pair='pair'/>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>

  </nav>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import SinglePair from "./SinglePair.vue";
export default {
    data () {
      return {
        titleNav:'ПАНЕЛЬ КОТИРОВОК',
        right: null,
      }
    },
    components:{
      SinglePair,
    },
    methods:{
      ...mapActions(['quotation','changePair']),
      change:function(pair){
        this.changePair(pair);
      }
    },
    created() {
        this.quotation();
    },
      computed: {
    ...mapGetters([
      'allPairs',
    ])
  }
}


</script>

<style>
.dark-primary{
  background: #191A20!important;
}
.header__pair{
  font-size: 11px;
}
#quotation {
  grid-area: quotation;
}


</style>