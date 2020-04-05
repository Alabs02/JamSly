<template>
    <div>
        <app-bar></app-bar>
        <v-content>
            <v-container>
                <v-container>
                    <v-text-field
                        class="hidden-md-and-down mx-4 blue-grey lighten-4"
                        flat
                        hide-details
                        label="Search"
                        prepend-inner-icon="mdi-database-search"
                        solo-inverted
                    ></v-text-field>
                </v-container>
                <v-flex class="mt-5">
                    <v-icon class="blue-grey--text">mdi-cloud-upload</v-icon>
                    <span class="ml-4 title blue-grey--text">Latest Upload</span>
                </v-flex>
                <v-row
                justify="center"
                >   
                    
                    <v-col
                    v-for="n in 12 "
                    :key="n"
                    cols="12"
                    class=""
                    md="3"
                    >
                        <v-card
                        class="mx-auto"
                        elevation="4"
                        >
                            <v-flex>
                                <v-img
                                src="../assets/misc_02.jpg"
                                max-width="100%"
                                max-height="100%"
                                ></v-img>
                            </v-flex>
                            <v-card-text>
                                Kyla La Grange - Missing
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                small
                                rounded
                                color="blue-grey darken-3"
                                text
                                >
                                    <v-icon left>mdi-cloud-download</v-icon>
                                    Download
                                </v-btn>
                                <v-btn
                                small
                                rounded
                                color="blue-grey darken-3"
                                class="ml-9"
                                text
                                >
                                    <v-icon left>mdi-play-circle</v-icon>
                                    Play
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>


<script>
import AppBar from '../components/AppBar';

export default {
    components: {
         'app-bar': AppBar, 
    },

    data: () => ({
        drawer: null,
        dialog_log: false,
        dialog_sig: false,
        color: 'blue-grey darken-4',
        alert: false,
        valid: true,
        fname: '',
        lname: '',
        email: '',
        email_sig: '',
        pass: '',
        pass_sig: '',
        nav_items: [
            { title: 'Home', route: '/' },
            { title: 'Music', route: '/musics' },
            { title: 'Videos', route: '/videos' },
            { title: 'Events', route: '/events' },
            { title: 'Blog', route: '#' },
        ],
    
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        passRules: [

        ],

        misc_lists: [
            { title: 'Wonder-woman --- Davido', num: 1 },
            { title: 'Wonder-woman --- Davido', num: 2 },
            { title: 'Wonder-woman --- Davido', num: 3  },
            { title: 'Wonder-woman --- Davido', num: 4  },
            { title: 'Wonder-woman --- Davido', num: 5  },
            { title: 'Wonder-woman --- Davido', num: 1 },
            { title: 'Wonder-woman --- Davido', num: 2 },
            { title: 'Wonder-woman --- Davido', num: 3  },
            { title: 'Wonder-woman --- Davido', num: 4  },
            { title: 'Wonder-woman --- Davido', num: 5  },
        ],
    }),

    miscs: [
        { title: 'Kyla grant -- Missing', src: '../assest/misc_01.jpg'},
        { title: 'Wonder woman|Davido ', src: '../assest/misc_02.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_03.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_04.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_05.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_06.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
        { title: 'Kyla La Grange - The Knife ', src: '../assest/misc_07.jpg'},
    ],

    volume: 10,
    min: 0,
    max: 100,
    vertical: false,
    range: false,

    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.alert = true;
            }
        },

        reset () {
            this.email = '';
            this.pass = '';
        },

        reset_sig () {
            this.email_sig = '';
            this.fname = '';
            this.lname = '';
            this.pass_sig = '';
        },

        test () {
            console.log(this.email);
            console.log(this.pass);
        },

        test_sig () {
            console.log(this.fname);
            console.log(this.lname);
            console.log(this.email_sig);
            console.log(this.pass_sig);
            
        },
    },
}
</script>


<style scoped>
    #play_cont {
        color: transparent;
    }
</style>