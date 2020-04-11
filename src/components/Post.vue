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
                            <v-toolbar-title class="title blue-grey--text text--lighten-2 text-capitalize">New Post</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-card
                         class="mx-auto mt-5"
                         flat
                        >
                            <v-container>
                                <form action="">
                                    <v-text-field
                                     v-model="blog.title"
                                     type="text"
                                     required
                                     filled
                                     outlined
                                     label="Title"
                                    ></v-text-field>

                                    <v-text-field
                                     v-model="blog.imageUrl"
                                     type="text"
                                     filled
                                     outlined
                                     label="Image Url"
                                    ></v-text-field>

                                    <v-textarea
                                     v-model="blog.description"
                                     name="input-7-4"
                                     filled
                                     outlined
                                     label="Body"
                                    ></v-textarea>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn 
                                            color="primary"
                                            type="submit"
                                            class="font-weight-bold"
                                            @click.prevent="render"
                                        >
                                            Post 
                                            <v-icon right>mdi-open-in-new</v-icon>
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
       blog: {
            title: "",
            imageUrl: "",
            description: "",
            date: new Date(),
       },
    }),
}
</script>