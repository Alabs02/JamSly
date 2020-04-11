<template>
    <div>
      <app-bar></app-bar>  
      <v-content>
            <v-container class="mt-5">
                <v-row justify="center">
                    <v-card
                     class="mx-auto"
                     width="600"
                    >
                        <v-toolbar
                         color="grey lighten-3"
                        >
                            <v-toolbar-title class="title blue-grey--text text--lighten-2 text-capitalize">Upload Video</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-card
                         class="mx-auto mt-5"
                         flat
                        >
                            <v-container>
                                <form action="">
                                    <v-text-field
                                     v-model="video.title"
                                     type="text"
                                     required
                                     filled
                                     outlined
                                     label="Title"
                                    ></v-text-field>

                                    <v-text-field
                                     v-model="video.imageUrl"
                                     type="text"
                                     filled
                                     outlined
                                     label="Image Url"
                                    ></v-text-field>

                                    <!-- <v-select
                                     :items="categories"
                                     v-model="category"
                                     filled
                                     outlined
                                     label="Select Catergory"
                                    ></v-select> -->

                                    <v-text-field
                                     v-model="video.videoUrl"
                                     filled
                                     outlined
                                     required
                                     label="Enter Video Url"
                                    ></v-text-field>

                                    <v-textarea
                                     v-model="video.description"
                                     name="input-7-4"
                                     filled
                                     outlined
                                     label="video description"
                                    ></v-textarea>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn 
                                            color="primary"
                                            type="submit"
                                            class="font-weight-bold"
                                            @click.prevent="render"
                                        >
                                            Upload  
                                            <v-icon right>mdi-cloud-upload-outline</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </form>
                            </v-container>
                        </v-card>
                    </v-card>
                </v-row>
            </v-container>
      </v-content>
    </div>
</template>

<script>
import AppBar from './AppBar';

export default {
    components: {
        'app-bar': AppBar,
    },
    data: () => ({
       video: {
            title: "",
            imageUrl: "",
            videoUrl: null,
            description: "",
            date: new Date(),
       },
    }),
}
</script>