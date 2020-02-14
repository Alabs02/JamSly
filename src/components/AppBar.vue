<template>
    <div>
        <v-app-bar
        app
        color="blue-grey darken-4"
        dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="title">
                Jam<span class="font-weight-thin">Sly</span>
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
                            <span class="headline primary--text darken-1">Sign-Up</span>
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
                            color="primary"
                            @click="reset_sig"
                            >Reset</v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                            color="blue"
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
                            <span class="headline primary--text text--darken-1">Login</span>
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
                            color="primary"
                            @click="reset"
                            >Reset</v-btn>
                            <v-spacer></v-spacer>

                            <v-btn
                            color="blue"
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
            temporary
        >
           
        </v-navigation-drawer>
    </div>
</template>


<script>


export default {
    // components: { Login },

    data: () => ({
        drawer: null,
        dialog_log: false,
        dialog_sig: false,
        color: 'blue-grey darken-3',
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
    }),

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