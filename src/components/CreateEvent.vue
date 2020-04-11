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
                            <v-toolbar-title class="title blue-grey--text text--lighten-2 text-capitalize">Create a new event</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-card
                         class="mx-auto mt-5"
                         flat
                        >
                            <v-container>
                                <form action="">
                                    <v-text-field
                                     v-model="event.title"
                                     type="text"
                                     required
                                     filled
                                     outlined
                                     label="Title"
                                    ></v-text-field>

                                    <v-text-field
                                     v-model="event.imageUrl"
                                     type="text"
                                     required
                                     filled
                                     outlined
                                     label="Image Url"
                                    ></v-text-field>

                                    <v-text-field
                                     v-model="event.location"
                                     type="text"
                                     required
                                     filled
                                     outlined
                                     prepend-inner-icon="mdi-map-marker-outline"
                                     label="Location"
                                    ></v-text-field>

                                    <v-menu
                                     ref="menu"
                                     v-model="menu"
                                     :close-on-content-click="false"
                                     :return-value.sync="event.date"
                                     transition="scale-transition"
                                     offset-y
                                     min-width="280"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                             v-model="event.date"
                                             filled
                                             outlined
                                             label="Date"
                                             prepend-inner-icon="mdi-calendar"
                                             v-on="on"
                                             required
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="event.date" no-title scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.menu.save(event.date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>

                                    <v-menu
                                     ref="timeMenu"
                                     v-model="timeMenu"
                                     :close-on-content-click="false"
                                     :return-value.sync="event.time"
                                     transition="scale-transition"
                                     offset-y
                                     min-width="280"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                             v-model="event.time"
                                             filled
                                             outlined
                                             label="Time"
                                             prepend-inner-icon="mdi-clock"
                                             v-on="on"
                                             required
                                            ></v-text-field>
                                        </template>
                                        <v-time-picker v-model="event.time" format="24hr" no-title scrollable>
                                            <v-btn text color="primary" @click="timeMenu = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.timeMenu.save(event.time)">OK</v-btn>
                                        </v-time-picker>
                                    </v-menu>

                                    <v-textarea
                                     v-model="event.description"
                                     filled
                                     outlined
                                     name="input-7-4"
                                     label="Description"
                                     required
                                    ></v-textarea>

                                    <div id="submit">
                                        <v-btn 
                                         color="primary"
                                         type="submit"
                                         class="font-weight-bold"
                                         @click.prevent="render"
                                        >Create Event</v-btn>
                                    </div>
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
        
        menu: false,
        timeMenu: false,
        
        event: {
            title: '',
            location: '',
            imageUrl: '',
            time: '',
            date: new Date().toISOString().substr(0, 10),
            description: ''
        },
    }),
}
</script>