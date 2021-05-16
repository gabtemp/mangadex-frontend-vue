<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Sign In </v-btn>
        </template>
        <sign-in-dialog />
    </v-dialog>
</template>

<script>
import SignInDialog from '../components/SignInDialog';

export default {
    name: 'SignIn',

    components: {
        SignInDialog,
    },
};
</script>
