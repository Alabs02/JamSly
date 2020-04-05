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
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="blue-grey darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Jam<span class="font-weight-thin">Sly</span></strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Musics',
        'Videos',
        'Events',
        'Blog',
        'About'
      ],
    }),
  }
</script>