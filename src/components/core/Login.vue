<template>
    <div>
        <v-dialog v-model="dialog_log" persistent max-width="500px">
            <template v-slot:activator="{ on }">
                <div class="hidden-md-and-down">
                    <v-btn
                     v-on="on"
                     outlined
                     rounded
                     class="ml-4"
                    >
                        <span>Login</span>
                    </v-btn>
                </div>
                <div class="hidden-lg-only">
                    <v-btn
                    v-on="on"
                    icon
                    class="hidden-lg-only"
                    >
                        <v-icon color="white">mdi-account-circle</v-icon>
                    </v-btn>
                </div>
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
                                    v-model="email"
                                    type="email"
                                    label="E-mail"
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
                    type="submit"
                    >
                    <span>Login</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    data: () => ({
        dialog_log: false,
        email: '',
        pass: '',
    }),

    methods: {
        pressed() {
            alert("Submitted");
        },

        reset() {
            this.email = null;
            this.pass = null;
        },

        test() {
            console.log(this.email);
            console.log(this.pass);
        }
    }
}
</script>