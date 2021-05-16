import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: undefined,
        refresh: undefined,
    },
    mutations: {
        login: (state, token) => {
            state.token = token.session;
            state.refresh = token.refresh;
        },
        logout: (state) => {
            state.token = undefined;
            state.refresh = undefined;
        },
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()],
});
