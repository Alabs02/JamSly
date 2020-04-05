<template>
    <div>
        <v-card
         class="mx-auto"
         max-width="1000"
        >
            <v-toolbar
             flat
             color="blue-grey lighten-1"
            >
                <v-toolbar-title  class="headline white--text text text--darken-4">Abouts Us</v-toolbar-title>
            </v-toolbar>
            <v-card
             flat
            >
                <v-card-text class="grey--text text--darken-3">
                    {{ text }}
                </v-card-text>
            </v-card>
        </v-card>
    </div>
</template>


<script>
export default {
    data: () => ({
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusamus dolorum sequi recusandae magnam id quasi aperiam optio saepe. Suscipit totam et natus enim magni officia iste ipsum in quidem.",
    }),
}
</script>