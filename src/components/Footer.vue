<template>
  <v-footer
    color="blue-grey darken-2"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.title"
        color="white"
        text
        rounded
        class="my-2"
        router :to="link.route"
      >
        {{ link.title }}
      </v-btn>
      <v-col
        class="blue-grey darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Jam<span class="font-weight-thin">Sly</span></strong><br>
        <span class="font-weight-bold">Developed by <span class="font-weight-thin">alabson.inc@gmail.com</span></span>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
        { title: 'Home', route: '/'},
        { title: 'Musics', route: '/musics' },
        { title: 'Videos', route: '/videos' },
        { title: 'Events', route: '/events' },
        { title: 'Blog', route: '/blogposts' },
        { title: 'About', route: '/about'}
      ],
    }),
  }
</script>