<template>
    <div>
        <v-dialog v-model="dialog_sig" persistent max-width="500px">
            <template v-slot:activator="{ on }">
                <div class="hidden-md-and-down">
                    <v-btn
                     v-on="on"
                     outlined
                     rounded
                     class="ml-4"
                    >
                        <span>Sign-Up</span>
                    </v-btn>
                </div>
                <div class="hidden-lg-only">
                    <v-btn
                    v-on="on"
                    color="white"
                    icon
                    >
                        <v-icon>mdi-face-profile</v-icon>
                    </v-btn>
                </div>
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
                            @submit.prevent="pressed"
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-row>
                                <v-col cols="12" md="12" sm="6">
                                    <v-text-field
                                    required
                                    outlined
                                    v-model="fullName"
                                    type="text"
                                    label="First Name"
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
                    type="submit"
                    @click="test_sig"
                    >
                    <span>Sign-Up</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    data: () => ({
        dialog_sig: false,
        fullName: '',
        email_sig: '',
        pass_sig: '',

        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

    }),
    methods: { 
        reset_sig () {
            this.email_sig = '';
            this.fullName = '';
            this.pass_sig = '';
        },
        test_sig () {
            console.log(this.fullName);
            console.log(this.email_sig);
            console.log(this.pass_sig);
            
        },
    }
}
</script>