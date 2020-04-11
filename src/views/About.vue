<template>
  <div class="about">
      <app-bar></app-bar>
      <v-content class="mt-5">
        <v-layout>
            <v-flex>
                <v-container>
                    <v-row>
                        <v-col 
                        cols="12" 
                        class="mx-auto"
                        md="5"
                        >
                            <v-card elevation="1" flat color="grey-lighten-2">
                                <v-card-title class="text-center">Our Mission</v-card-title>

                                <v-card-text>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat vel mollitia dicta dolorum culpa 
                                ipsum maxime deleniti eaque quo qui, dignissimos, modi blanditiis, saepe neque id autem voluptatibus 
                                libero magni.
                                </span>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col  
                        cols="12" 
                        class="mx-auto"
                        md="5"
                        >
                            <v-card flat elevation="1" color="grey-lighten-2">
                            <v-card-title class="font-weight-bold">Our Story</v-card-title>

                            <v-card-text>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, cupiditate tenetur? Soluta i
                                mpedit illo eos vitae, atque saepe a totam rem necessitatibus in 
                                omnis suscipit dolorem, tenetur numquam quo pariatur.
                                </span>
                            </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-flex>
        </v-layout>
        <core-about></core-about>

        <v-container>
        <v-card
         class="mx-auto"
         width="900"
        >
            <v-toolbar
                color="indigo"
                dark
                dense
                flat
            >
                <v-toolbar-title class="title text-center">Quotes</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                "I like the dreams of the future better than the history of the past"<br>
                "Never underestimate the power you have to take your life in a new direction"
            </v-card-text>
        </v-card>
        </v-container>

        <v-card flat class="mx-auto ml-3 mr-3">
            <v-toolbar
                color="indigo"
                class="ml-12 mr-12"
                dark
                dense
                flat
                >
                <v-toolbar-title class="title font-weight-bold">Team</v-toolbar-title>
                </v-toolbar>
            <v-row dense justify="center">
            
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="12"
            md="5"
            >
                <v-hover v-slot:default="{ hover }">
                <v-card
                class="mx-auto"
                >
                    <v-img
                    class="align-end white--text"
                    :src="card.src"
                    height="260"
                    >
                    <v-card-title class="white--text">Developers</v-card-title>
                    <v-expand-transition>
                        <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out indigo darken-2 v-card--reveal white--text"
                        style="height: 100%;"
                        >
                        <v-card-text>
                            <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            icon
                            class="mx-5 white--text"
                            >
                            <v-icon size="24">{{ icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                        </div>
                    </v-expand-transition>
                    </v-img>

                    <v-card-text
                    class="pt-6"
                    style="position: relative;"
                    >
                    <v-btn
                        absolute
                        color="indigo"
                        class="white--text"
                        fab
                        large
                        right
                        top
                    >
                        <v-icon>fas fa-list</v-icon>
                    </v-btn>
                    </v-card-text>
                    <v-card-text class="grey--text text--darken-4 font-weight-bold">
                    {{ card.title }}
                    </v-card-text>
                </v-card>
                </v-hover>
            </v-col>
            </v-row><br>
        </v-card><br>
      </v-content>
  </div>
</template>


<script>
import AppBar from '../components/AppBar';
import AboutSection from '../components/AboutSection';

  export default {
    components: {
        'app-bar': AppBar,
        'core-about': AboutSection, 
    },
    data: () => ({
      cards: [
        { title: 'Alabura Usman', src: 'http://bit.ly/36NVjjp'},
        { title: "Sly", src: 'http://bit.ly/2GLyeTO'},
      ],

      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],

    }),
  }
</script>

<style scoped>
  .color {
    background: linear-gradient(to bottom right, #1A237E, #880E4F);
  }

  #frame {
    border: none;
  }

  .flix {
    margin-top: -12px;
  }
</style>