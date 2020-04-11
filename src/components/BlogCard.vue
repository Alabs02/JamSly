<template>
    <v-container fluid>
        <v-card
         class="mx-auto"
         max-width="1000"
        >
        <v-row dense>
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            >
            <v-card
            class="mx-auto"
            router :to="card.route"
            >
                <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                >
                <v-card-title class="back" v-text="card.title"></v-card-title>
                </v-img>

                <!-- <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                </v-card-actions> -->
            </v-card>
            </v-col>
        </v-row>
        </v-card>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12, route: '/singlepost' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, route: '/singlepost' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, route: '/singlepost' },
      ],
    }),
  }
</script>

<style scoped>
  .back {
    padding: 5px;
    border-radius: 0.6rem;
    background-image: rgba(255, 250, 0, 0);
  }
</style>