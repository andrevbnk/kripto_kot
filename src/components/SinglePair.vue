<template>
            <v-list-item-content>
            <v-row class='text-center'>
              <v-col >{{`${pair.from} | ${pair.to}`}}</v-col>
              <v-col class='d-flex justify-center'><Arrow :direct='pair.arrow' class='mx-1'/> {{`${pair.changed }%`}}</v-col>
              <v-col >{{pair.price}}</v-col>
            </v-row>
          </v-list-item-content>
</template>

<script>
import Arrow from "./Arrow.vue"

export default {
    props: ['pair'],
    components:{
      Arrow,
    },

}
</script>

<style>

</style>