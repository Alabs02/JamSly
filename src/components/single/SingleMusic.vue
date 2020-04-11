<template>
    <div>
        <app-bar></app-bar>
        <v-content class="mt-5">
            <v-sheet class="ml-5 mr-5">
                <v-card
                 class="mx-auto"
                >
                    <v-toolbar color="grey lighten-4">
                        <v-toolbar-title class="title font-weight-bold blue-grey--text text--lighten-1">Download Music</v-toolbar-title>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <v-container>
                        <v-card flat>
                            <v-img
                             src="@/assets/misc_06.jpg"
                             contain
                            ></v-img>
                        </v-card>
                        <v-sheet class="ml-3">
                            <h2 class="font-weight-bold primary--text ">Sly-Unknown</h2>
                            <v-card flat class="mx-auto mt-5">
                                <v-card-text>
                                    <span class="font-weight-bold mb-5 fon">Download Music</span><br>
                                    <div class="blue-grey lighten-5 down mt-4">
                                        <p><v-icon left>mdi-cloud-download</v-icon><span class="">Sly</span>Be There</p>
                                    </div>
                                </v-card-text>

                                <div class="text-center">
                                    <v-btn
                                     class="text-center"
                                     small
                                     color="primary"
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
    }
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
</style>