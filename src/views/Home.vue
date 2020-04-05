<template>
  <div class="home">
    <app-bar></app-bar>

    <v-content>
      <v-parallax
      dark
      src="../assets/mus.jpg"
      max-height="800"
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
    

      <v-card
      flat=""
      class="mx-auto mt-8"
      max-width="1100"
      >
      <v-row justify="center" class="ml-2 mr-2">
        <v-col cols="12" md="8" class="">
          <v-card class="mx-auto text-center">
            <v-card-title class="title ml-12 primary--text">Blog News</v-card-title>
            <v-container fluid>
              <v-img
                src="../assets/celeb.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="340px"
                
              >
                  <v-card-title>Celebrating 10 Nigerian celebrity couples on Valentine's Day</v-card-title>
              </v-img>
            </v-container>
              <v-row dense class="ml-2 mr-2">
                <v-col
                v-for="(l_card, n) in l_cards"
                :key="n"
                cols="12"
                md="6"
                >
                <v-card
                :color="l_card.color"
                dark
                height="178"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="l_card.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="l_card.artist"></v-card-subtitle>
                    </div>
                  </div>
                </v-card>
                
                </v-col>
              </v-row>
          </v-card>
        </v-col>

      <v-col cols="12" md="4">
          <v-card class="mx-auto text-center">
            <v-card-title class="title ml-12 primary--text">Trending</v-card-title>
                <v-container fluid>
                  <v-img
                    src="https://netstorage-legit.akamaized.net/images/25656ed882de3aa3.jpg"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                      <v-card-title>Trending Shit</v-card-title>
                  </v-img>
                </v-container>

                <v-row justify="center">
                  <v-col
                  v-for="(t_card, i) in t_cards"
                  :key="i"
                  cols="12">
                    <v-card
                    class="mx-auto"
                    height="110"
                    >

                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title
                            class="header"
                            v-text="t_card.title"
                          ></v-card-title>

                          <v-card-subtitle v-text="t_card.sub"></v-card-subtitle>
                        </div>
                        <v-avatar
                          class="mr-2 mt-1"
                          size="100"
                          tile
                        >
                          <v-img src="../assets/misc_08.jpg"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
          </v-card>
        </v-col>
      </v-row>

      </v-card>

      <v-container fluid>
        <v-card
        class="mx-auto"
        max-width="1000"
        >
        </v-card>
      </v-container>

      <music-section></music-section>


    </v-content>  
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '../components/AppBar';
import MusicSection from '../components/MusicSection';



export default {
  name: 'home',
  components: {   
    'app-bar': AppBar,
    'music-section': MusicSection,
  },

  data: () => ({
    l_cards: [
      { title: "Supermodel", artist: "Bruce", color: "blue-grey" },
      { title: "Supermodel", artist: "Bruce", color: "teal darken-2" },
      { title: "Supermodel", artist: "Bruce", color: "purple darken-2" },
      { title: "Supermodel", artist: "Bruce", color: "red" },
    ],

    t_cards: [
      { title: "Hello", sub: "Funny Tales", src: '' },
      { title: "Halcoy", sub: "Funny Tales", src: "" },
      { title: "Halcoy", sub: "Funny Tales", src: "", },
      { title: "Halcoy", sub: "Funny Tales", src: "", },
    ],
  }),
}
</script>