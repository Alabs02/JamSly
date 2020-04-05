<template>
    <div class="blog">
        <app-bar></app-bar>

        <v-content class="mt-10">
            <blog-card />
            <core-about></core-about>
        </v-content>

    </div>
</template>


<script>
import AppBar from '../components/AppBar';
import AboutSection from '../components/AboutSection';
import BlogCard from '../components/BlogCard';


export default {
  components: {
        'app-bar': AppBar,
        'core-about': AboutSection, 
        'blog-card': BlogCard,
  },
}
</script>