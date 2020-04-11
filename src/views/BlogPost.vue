<template>
    <div class="blog">
        <app-bar></app-bar>

        <v-content class="mt-10">
            <v-container>
                <v-row
                    justify="center"
                >
                    <v-col 
                        cols="12"
                        md="8"
                        lg="8"
                        sm="12"
                    >
                        <v-text-field
                            class="mx-4 lighten-4"
                            color="blue-grey"
                            hide-details
                            label="Search"
                            prepend-inner-icon="mdi-database-search"
                            outlined
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                        lg="4"
                        sm="12"
                        class="text-center"
                    >
                        <v-btn
                            color="blue"
                            outlined
                            large
                            router to="/blogposts/new"
                        >
                            Make new post
                            <v-icon right>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <blog-card />
        </v-content>
    </div>
</template>


<script>
import AppBar from '../components/AppBar';
import BlogCard from '../components/BlogCard';


export default {
  components: {
        'app-bar': AppBar,
        'blog-card': BlogCard,
  },
}
</script>