<template>
    <v-app>
        <v-app-bar app color="white" dark>
            <div class="d-flex align-center">
                <v-img
                    :src="require('./assets/logo.png')"
                    alt="Mangadex Logo"
                    class="shrink mr-2"
                    contain
                    transition="scale-transition"
                    width="40"
                />

                <v-app-bar-title>
                    <v-btn text plain color="black" levation="0" to="/" class="bold">MangaDex Reader</v-btn>
                </v-app-bar-title>
            </div>

            <v-btn
                to="/about"
                :disabled="!isAuthenticated"
                color="orange darken-1"
                style="margin-left: 2px; margin-right: 2px"
                >Browse</v-btn
            >
            <v-btn
                to="/"
                :disabled="!isAuthenticated"
                color="orange darken-1"
                style="margin-left: 2px; margin-right: 2px"
                >Following</v-btn
            >

            <v-spacer></v-spacer>

            <div v-if="!isAuthenticated">
                <v-btn>
                    <SignInDialog />
                </v-btn>
            </div>
            <div v-else>
                <v-btn @click="logout">Logout</v-btn>
            </div>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import SignInDialog from './components/SignInDialog';

export default {
    name: 'App',

    data: () => ({}),
    computed: {
        isAuthenticated() {
            return !!this.$store.state.token;
        },
    },
    methods: {
        logout() {
            this.$store.commit('logout');
        },
    },
    components: {
        SignInDialog,
    },
};
</script>
