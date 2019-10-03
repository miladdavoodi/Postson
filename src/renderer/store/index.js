import Vue from "vue"
import Vuex from "vuex"

import {createPersistedState, createSharedMutations} from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        milad: 0,
        DirectoryActiveId: 10001,
        DirectoryList: [
            {
                'id': 10001,
                'title': "Blog Post",
                'list': [
                    {
                        'method': 'POST',
                        'title': 'Result Charge'
                    },
                    {
                        'method': 'GET',
                        'title': 'get Charge'
                    },
                    {
                        'method': 'DEL',
                        'title': 'Reverce Charge'
                    },
                    {
                        'method': 'PATCH',
                        'title': 'Reverce Charge'
                    },
                    {
                        'method': 'POST',
                        'title': 'Result Charge'
                    },
                ]
            },
            {
                'id': 10002,
                'title': "Category Post",
                'list': [
                    {
                        'method': 'POST',
                        'title': 'Result Charge'
                    },
                    {
                        'method': 'GET',
                        'title': 'get Charge'
                    }
                ]
            }
        ]
    },

    actions: {
        ACTIVE_DIRECTORY(store,ID) {
            store.commit("ACTIVE_DIRECTORY",ID)
        },
    },

    mutations: {
        ACTIVE_DIRECTORY(state,ID) {
            state.DirectoryActiveId = ID;
        },
    },

    plugins: [createPersistedState(), createSharedMutations()],
    strict: process.env.NODE_ENV !== "production"
})