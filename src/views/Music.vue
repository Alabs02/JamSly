<template>
    <div>
        <v-app-bar
        app
        color="blue-grey darken-4"
        dark
        >
            <v-app-bar-nav-icon class="hidden-lg-only" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="title">
                Naija<span class="font-weight-thin">Connect</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-md-and-down">
                <v-btn
                v-for="(nav_item, i) in nav_items"
                :key="i"
                router :to="nav_item.route"
                class="ml-1"
                text
                >   
                    <span>{{ nav_item.title }}</span>
                </v-btn>

                <v-dialog v-model="dialog_sig" persistent max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                        v-on="on"
                        outlined
                        rounded
                        class="ml-4"
                        >
                            <span>Sign-Up</span>
                        </v-btn>
                    </template>

                    <v-card
                        class="mx-auto"
                    >
                        <v-card-title>
                            <span class="headline blue-grey--text text--darken-1">Sign-Up</span>
                            <v-spacer></v-spacer>
                            <v-btn 
                            icon
                            @click="dialog_sig = !dialog_sig">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="fname"
                                            type="text"
                                            label="First Name"
                                            :rules="nameRules"
                                            placeholder="Someone"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="lname"
                                            type="text"
                                            label="Last Name"
                                            :rules="nameRules"
                                            placeholder="Someone"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="email_sig"
                                            type="email"
                                            label="E-mail"
                                            :rules="nameRules"
                                            placeholder="Someone"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="pass_sig"
                                            type="password"
                                            label="Password"
                                            placeholder="Create Password"
                                            :rules="passRules"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                            outlined
                            color="blue-grey"
                            @click="reset_sig"
                            >Reset</v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                            color="blue-grey"
                            dark
                            outlined
                            @click="test_sig"
                            >
                            <span>Sign-Up</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-dialog v-model="dialog_log" persistent max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn
                        v-on="on"
                        outlined
                        rounded
                        class="ml-4"
                        >
                            <span>Login</span>
                        </v-btn>
                    </template>

                    <v-card
                        class="mx-auto"
                    >
                        <v-card-title>
                            <span class="headline blue-grey--text text--darken-2">Login</span>
                            <v-spacer></v-spacer>
                            <v-btn 
                            icon
                            @click="dialog_log = !dialog_log">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="email"
                                            type="email"
                                            label="E-mail"
                                            :rules="emailRules"
                                            placeholder="someone@gmail.com"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="12" md="12" sm="6">
                                            <v-text-field
                                            required
                                            outlined
                                            v-model="pass"
                                            type="password"
                                            label="Password"
                                            :rules="passRules"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                            outlined
                            color="blue-grey darken-1"
                            @click="reset"
                            >Reset</v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                            color="blue-grey"
                            dark
                            outlined
                            @click="test"
                            >
                            <span>Login</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>          
        </v-app-bar>

       <v-navigation-drawer
            v-model="drawer"
            :color="color"
            absolute
            app
        >
            <v-flex>
                <v-img>
                    <img src="../assets/music_theme.jpg" alt="music_theme" width="100%" height="200px">
                </v-img>
            </v-flex>

            <v-list
             dense
             class="blue-grey darken-3 ml-2 mr-2 text-center"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            Kyla La Grange - The Knife <span class="font-weight-thin">(Remix)</span>
                        </v-list-item-title>

                         <v-flex class="mt-2">
                            <v-btn
                            color="white"
                            small
                            outlined
                            >
                                <v-icon left dark>mdi-cloud-download</v-icon>Download Here
                            </v-btn>
                        </v-flex>

                        <v-flex class="mt-2">
                            <v-progress-linear
                                color="blue"
                                height="7"
                                value="40"
                                striped=""
                            ></v-progress-linear>
                        </v-flex>
                        <v-list
                         dense
                         class="mt-2 blue-grey darken-2"
                        >
                        <v-list-item>
                            <v-list-item-content>
                                <v-btn
                                 icon
                                ></v-btn>
                            </v-list-item-content>
                        </v-list-item>

                        </v-list>
                            <v-divider></v-divider>

                        <v-list dark color="blue-grey darken-2">
                            
                        <v-list-item
                        v-for="misc_list in misc_lists"
                        :key="misc_list.title"
                        link
                        >   
                            <v-list-item-content>
                                <v-list-item-title v-text="misc_list.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
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


export default {
    // components: { Login },

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