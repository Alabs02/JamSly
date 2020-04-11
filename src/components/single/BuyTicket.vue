<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
           <v-btn v-on="on"  class="orange">
                <v-icon left class="white--text">mdi-cart</v-icon>
                <span class="white--text">Buy Ticket</span>
            </v-btn>
      </template>
      <v-card
       class="mx-auto"
       width="700px"
      >
        <v-card-title>
            <span class="primary--text text--darken-1">Vougue Pay System</span>
            <v-spacer></v-spacer>
            <v-btn 
            icon
            @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>