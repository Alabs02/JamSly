<template>
    <div>
        <app-bar></app-bar>
        <v-content class="mt-5">
            <v-sheet class="ml-5 mr-5">
                <v-card
                 class="mx-auto"
                >
                    <v-toolbar color="grey lighten-4">
                        <v-toolbar-title class="title font-weight-bold blue-grey--text text--lighten-1">Download Video</v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-container>
                        <v-card flat>
                            <v-img
                             src="@/assets/misc_09.jpg"
                             contain
                            ></v-img>
                        </v-card>
                        <v-sheet class="ml-3">
                            <h2 class="font-weight-bold primary--text ">Blood Shot</h2>
                            <v-card flat class="mx-auto mt-5">
                                <v-card-text>
                                    <span class="font-weight-bold mb-5 fon">Info</span><br>
                                    <div class="blue-grey lighten-5 down mt-4">
                                        <blockquote class="mar blockquote">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam excepturi maiores 
                                            placeat molestias voluptatum quod delectus nulla magni tempore odit, voluptates 
                                            sint, reprehenderit dolor molestiae sed saepe deleniti, commodi autem.
                                        </blockquote>
                                    </div>
                                    <div class="mt-3">
                                        <v-chip pill>
                                            <v-avatar
                                                left
                                                color="blue-grey"
                                            >
                                                <v-icon class="white--text">mdi-calendar</v-icon>
                                            </v-avatar>
                                            2020
                                        </v-chip>
                                    </div>
                                </v-card-text>

                                <div class="text-center">
                                    <v-btn
                                     class="text-center"
                                     small
                                     color="primary"
                                     @click="alert"
                                    >
                                            <v-icon left>mdi-cloud-download</v-icon>
                                            <span class="text-capitalize">Download</span>
                                    </v-btn>
                                </div>
                            </v-card>
                        </v-sheet>
                    </v-container>
                </v-card><br>
            </v-sheet>
        </v-content>
    </div>
</template>

<script>
import AppBar from '../AppBar';

export default {
    components: {
        'app-bar': AppBar,
    },

    methods: {
        alert() {
            alert(`Thank you for using Jamsly!`)
        },
    },
}
</script>

<style scoped>
    .down {
        padding: 8px;
        border-radius: 0.5rem;
    }
    .fon {
        font-size: 1.4rem;
    }
    .mar {
        margin: 2px;
    }
    .v-list .v-list-item--active 
    {
    color: inherit;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 1rem; 
    }   
</style>