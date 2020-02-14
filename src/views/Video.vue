<template>
    <div>
        <app-bar></app-bar>
        <header
         id="header"
        >

        </header>
        <v-content>
            <v-card
             class="mx-auto mt-5"
             round
             max-width="1000"
             elevation="5"
            >
                <v-toolbar
                 class=""
                >
                    <v-text-field
                        class="mx-4 blue-grey lighten-4 hidden-md-and-down"
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="mdi-database-search"
                        solo-inverted
                    ></v-text-field>
                </v-toolbar>

                <v-row
                 justify="center"
                 class="ml-3 mr-3"
                >
                    <v-col 
                     v-for="n in 12"
                     :key="n"
                     cols="12"
                     md="4"
                    >
                        <v-card
                         class="mx-auto"
                         max-width="320"
                         elevation="5"
                        >

                            <v-img>
                                <img src="https://upload.wikimedia.org/wikipedia/en/4/45/Bloodshot_-_official_film_poster.jpeg" alt="mov" height="200px" width="100%">
                            </v-img>

                            <v-card-text class="trunc">
                                <span class="line blue-grey--text">Bloodshot</span><br>
                               {{ info.slice(0, 50) + '...' }}
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                 outlined
                                 color="blue darken-3"
                                >
                                    proceed
                                </v-btn>

                                <v-spacer></v-spacer>
                              <v-tooltip bottom>
                                  <template v-slot:activator="{ on }">
                                      <div>
                                          <v-btn
                                           v-on="on"
                                           color="blue darken-3"
                                           outlined
                                           icon
                                          >
                                            <v-icon>mdi-cloud-download-outline</v-icon>
                                            
                                          </v-btn>
                                      </div>
                                  </template>
                                  <span>Download</span>
                              </v-tooltip>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
      
            </v-card>
        </v-content>
    </div>
</template>

<script>
import AppBar from '../components/AppBar';

export default {
    components: {
        'app-bar': AppBar,
    },

    data: () => ({
        info: "After he and his wife are suddenly assassinated, Marine Ray Garrison (Vin Diesel) is reborn by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine – Bloodshot",
        
    }),

    methods: {
        
    },
}
</script>

<style scoped>
    .rounded {
        border-radius: 1rem;
    }
    header {

    }
</style>