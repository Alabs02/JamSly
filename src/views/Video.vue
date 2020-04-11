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
                <v-container>
                    <v-row
                    justify="center"
                    >
                        <v-col 
                        cols="12"
                        md="8"
                        lg="8"
                        sm="12"
                        >
                            <v-text-field
                                class="mx-4 blue-grey lighten-4"
                                flat
                                hide-details
                                label="Search"
                                prepend-inner-icon="mdi-database-search"
                                solo-inverted
                            ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        md="4"
                        lg="4"
                        sm="12"
                        class="text-center"
                        >
                            <v-btn
                            color="blue"
                            outlined
                            large
                            router to="/videos/upload"
                            >
                                Upload videos
                                <v-icon right>mdi-plus</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-row
                 justify="center"
                 class="ml-3 mr-3 mt-3"
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
                                 router to="/download/video"
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
                </v-row><br>
            </v-card>
        </v-content><br>
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
</style>