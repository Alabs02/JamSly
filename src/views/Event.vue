<template>
    <div>
        <app-bar></app-bar>
        <v-content>
            <v-parallax
             dark
             src="../assets/33.jpg"
             width="100%"
             max-height="auto"
            >
                <v-row
                align="center"
                justify="center"
                >
                <v-col class="text-center" cols="12">
                    <h1 class="display-3 font-weight-bold mb-4">Jam<span class="font-weight-thin">Sly</span></h1>
                    <h4 class="subheading display-1">Engineered for entertainment!</h4>
                    <v-flex>
                
                    </v-flex>
                </v-col>
                </v-row>
            </v-parallax>       
        
             <v-banner single-line>
                <v-icon
                color="warning"
                size="36"
                >
                mdi-account-group
                </v-icon>
                <span class="font-weight-bold ml-2 mt-3 blue-grey--text fam hidden-md-and-down">Create and organise new Events</span>

                <template v-slot:actions>
                <v-btn
                    color="primary"
                    text
                    rounded
                    router to="/events/new"
                >
                    Create new Event
                    <v-icon right>mdi-plus</v-icon>
                </v-btn>
                </template>
            </v-banner>

            <v-card
            flat
            >
                <v-container>
                    <v-row justify="center" class="mr-5 ml-5">
                        <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        class="mt-5"
                        >

                            <v-text-field
                            label="Search Events"
                            prepend-inner-icon="mdi-database-search"
                            color="blue-grey"
                            outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card><br>

            <v-container class="text-center">
                <v-row class="text-center" justify="center"
                 v-for="n in 10"
                 :key="n"
                >
                    <v-col
                     cols="12"
                     md="4"
                    >
                        <v-card 
                         class="mx-auto ml-1 mr-1"
                         flat
                        >
                                <v-img
                                 cover
                                 class="resp"
                                 src="@/assets/mathew-kane.jpg"
                                 height="250px"
                                 width="100%"
                                >
                                </v-img>
                        </v-card>
                    </v-col>

                    <v-col
                     cols="12"
                     md="6"
                    >
                      <v-card
                       class="mx-auto"
                       max-width="600"
                       id="data"
                       elevation="5"
                      >
                        <v-card-title class="headline font-weight-bold blue--text text--darken-2 text-center">Pacific new album A Lost Light came to him in a dream</v-card-title>
                    
                        <v-layout>
                            <v-flex>
                                <v-btn
                                 class="mr-2"
                                 color="orange darken-2"
                                 rounded
                                 text
                                >   
                                    <v-icon left class="fonti">mdi-calendar-blank</v-icon>
                                    <span class="font">March 11, 2020</span>
                                    
                                </v-btn>

                                <v-btn
                                 class="mr-2"
                                 color="orange darken-2"
                                 rounded
                                 text
                                >
                                    <v-icon class="fonti">mdi-clock-outline</v-icon>
                                    <span class="font">19.00-24.00</span>
                                    
                                </v-btn>

                                <v-btn
                                 class="mr-2"
                                 color="orange darken-2"
                                 rounded
                                 text
                                >
                                    <v-icon class="fonti">mdi-map-marker-outline</v-icon>
                                    <span class="font">Plateau Hotel</span> 
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-card-text>
                            {{ text.slice(0, 80) + '...' }}
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                            <v-btn
                             text
                             color="blue-grey"
                             router to="/event/more"
                            >
                            Read More
                            <v-icon right>mdi-chevron-right</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>
                            
                            <buy-ticket></buy-ticket>
                            <br><br>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </v-content>
    </div>
</template>


<script>
import AppBar from '../components/AppBar';
import BuyTicket from '../components/single/BuyTicket';


export default {
    components: {
        'app-bar': AppBar,
        'buy-ticket': BuyTicket,
    },

    data: () => ({
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus labore perspiciatis natus voluptas magnam sequi iure officiis quos autem ea nesciunt, dignissimos, odio omnis unde at odit, nulla ducimus est."
    }),
}
</script>


<style scoped>

    .font {
        font-size: 10px;
    }

    .fonti {
        font-size: 15px;
    }
    .fam {
        font-style: normal;
        font-size: 1rem;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>