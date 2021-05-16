<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Sign In</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">MangaDex Sign In</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="username" label="Username" required></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn :disabled="!valid" color="orange darken-1" text @click="signIn">Log In</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import * as axios from 'axios';

export default {
    data: () => ({
        valid: false,
        dialog: false,
        username: '',
        password: '',
    }),
    methods: {
        signIn() {
            this._data.dialog = false;

            axios
                .post(`${process.env.VUE_APP_MANGADEX_BASEURL}/auth/login`, {
                    username: this._data.username,
                    password: this._data.password,
                })
                .then((res) => {
                    console.log(res.status);
                    if (res.data.result === 'ok') {
                        this.$store.commit('login', res.data.token);
                    } else {
                        // TODO: Show error
                    }
                })
                .catch((error) => {
                    // TODO: Show error
                    console.log(error);
                });
        },
    },
};
</script>
