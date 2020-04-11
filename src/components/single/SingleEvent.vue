<template>
    <div>
        <app-bar></app-bar>
        <v-content class="mt-5">
            <v-container>
                <v-card
                 class="mx-auto"
                >
                    <v-toolbar
                     color="blue-grey lighten-5"
                     flat
                     rad
                    ><v-toolbar-title class="title text-capitalize blue--text">megaparks entertainment annivassary</v-toolbar-title></v-toolbar>
                    <v-divider></v-divider>
                    <v-container>
                        <v-card class="mx-auto" max-width="900">
                            <v-img
                             contain
                             src="@/assets/next-event-1.jpg"
                            ></v-img>
                        </v-card>
                        <v-card flat class="mx-auto text-center mt-3" max-width="900">
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
                        </v-card>
                        <v-card
                         class="mx-auto mt-4"
                         max-width="900"
                        >
                        <v-card-title class="headline ml-6 mt-4 primary--text">About the event</v-card-title>
                        <v-card-text>
                            <blockquote class="blockquote">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ducimus minus voluptas optio, accusantium nesciunt nobis, aliquid excepturi quas 
                                eum aspernatur reprehenderit molestias. Asperiores hic iure veritatis eum totam 
                                exercitationem voluptatem.
                            </blockquote>
                        </v-card-text>
                        <v-sheet class="ml-6">
                            <v-card-text class="text-capitalize subheading-1 blue-grey--text font-weight-bold">buy a ticket to RSVP</v-card-text>
                            <div class="buy  ml-4">
                                <!-- <v-btn depressed class="orange">
                                    <v-icon left class="white--text">mdi-cart</v-icon>
                                    <span class="white--text">Buy Ticket</span>
                                </v-btn> -->
                                <buy-ticket></buy-ticket>
                            </div><br>
                        </v-sheet>
                        </v-card>
                        <v-card
                         class="mx-auto mt-4 text-center"
                         max-width="900"
                         flat
                        > 
                            <v-row justify="center">
                                <v-card-title class="blue-grey--text headline">Hosts</v-card-title>
                            </v-row>  
                            <v-row
                             justify="center"
                             class="ml-1 mr-1"
                            >
                                <v-col
                                 cols="12"
                                 md="4"
                                 sm="12"
                                 v-for="i in 3"
                                 :key="i"
                                >
                                    <v-card
                                     class="mx-auto"
                                    >
                                        <v-img
                                         class="white--text align-end"
                                         height="200px"
                                         src="@/assets/mathew-kane.jpg"
                                        >
                                        <v-card-title>Recheal</v-card-title>
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card
                         class="mx-auto"
                         max-width="900"
                         flat
                        >
                            <v-row justify="center">
                                <v-card-title class="headline blue-grey--text font-weight-bold">Performing Artist</v-card-title>
                            </v-row>
                            <v-row
                             justify="center"
                             class="ml-1 mr-1"
                            >
                                <v-col 
                                 cols="12"
                                 md="4"
                                 sm="12"
                                 v-for="n in 3"
                                 :key="n"
                                >
                                    <v-card
                                     class="mx-auto"
                                     loader-height="10"
                                     shaped
                                     :loading="doneLoading"     
                                    >      
                                        <v-img
                                         contain
                                         src="@/assets/mathew-kane.jpg"
                                        ></v-img> 
                                        <v-card-title class="orange--text text--darken-2">Fireboy</v-card-title>                        
                                    </v-card>
                                </v-col>
                            </v-row>   
                        </v-card>
                    </v-container>
                </v-card>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import AppBar  from '../AppBar';
import BuyTicket from './BuyTicket';

export default {
    components: {
        'app-bar': AppBar,
        'buy-ticket': BuyTicket,
    },
    data: () => ({
        isloading: true,
        doneLoading: false,
    }),
    methods: {
        load() {
            if (this.isloading) {
                this.doneLoading = false;
            } else {
                this.doneLoading = true;
            }
        }
    },
}
</script>

<style scoped>
    .rad {
        border-radius: 5px 0px 5px 0px;
    }
</style>