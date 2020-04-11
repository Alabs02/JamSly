<template>
    <div>
        <app-bar></app-bar>
        <v-content class="mt-5">
            <v-sheet class="ml-5 mr-5">
                <v-card
                 class="mx-auto"
                >
                    <v-toolbar color="grey lighten-4">
                        <v-toolbar-title class="title font-weight-bold blue-grey--text text--lighten-1">Read Full Post</v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-container>
                        <v-card flat>
                            <v-img
                             src="@/assets/celeb.jpeg"
                             contain
                            ></v-img>
                        </v-card>
                        <v-sheet class="ml-3">
                            <h2 class="font-weight-bold primary--text ">Celebrity Marraige in Nigeria</h2>
                            <v-card flat class="mx-auto mt-5">
                                <blockquote class="blockquote">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, dolores aliquid 
                                    iure alias voluptate architecto explicabo quasi, praesentium ut nulla molestiae fugit 
                                    dolorum cumque nisi sapiente, accusamus officia? Consequuntur, expedita.
                                </blockquote>
                            </v-card>
                             <v-container class="text-center">
                                <v-row justify="center">
                                    <v-col col="12" sm="12" md="6">
                                        <v-btn depressed rounded color="grey lighten-2" class="font-weight-thin">Time: 2:30<span class="text-lowercase">pm</span></v-btn>
                                    </v-col>

                                    <v-col col="12" sm="12" md="6">
                                        <v-btn class="ml-5" depressed rounded color="grey lighten-2">Sunday 24 April</v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-sheet>
                    </v-container>
                </v-card><br><br>
            </v-sheet>
        </v-content>
    </div>
</template>

<script>
import AppBar from '../AppBar';

export default {
    components: {
        'app-bar': AppBar,
    }
}
</script>

<style scoped>

</style>