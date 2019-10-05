import Vue from "vue"
import Vuex from "vuex"

import {createPersistedState, createSharedMutations} from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        milad: 0,
        Row: [],
        DirectoryActiveId: 10001,
        DirectoryList: [
            {
                'id': 10001,
                'title': "Blog Post",
                'list': [
                    {
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/01",
                        'Params': [
                            {KEY: 'category', VALUE: 'music', ACTIVE: false},
                            {KEY: 'limit', VALUE: 10, ACTIVE: false},
                        ]
                    },
                    {
                        'method': 'GET',
                        'title': 'get Charge',
                        'url': "http://localhost/ws/02",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'method': 'DEL',
                        'title': 'Reverce Charge',
                        'url': "http://localhost/ws/03",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'method': 'PATCH',
                        'title': 'Reverce Charge',
                        'url': "http://localhost/ws/04",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/05",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                ]
            },
            {
                'id': 10002,
                'title': "Category Post",
                'list': [
                    {
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/01",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'method': 'GET',
                        'title': 'get Charge',
                        'url': "http://localhost/ws/02",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    }
                ]
            }
        ]
    },

    actions: {
        ACTIVE_DIRECTORY(store, ID) {
            store.commit("ACTIVE_DIRECTORY", ID)
        },
        SET_ROW(store, ROW) {
            store.commit("SET_ROW", ROW)
        },
    },

    mutations: {
        ACTIVE_DIRECTORY(state, ID) {
            state.DirectoryActiveId = ID;
        },
        SET_ROW(state, ROW) {
            state.Row = ROW;
        },
    },

    plugins: [createPersistedState(), createSharedMutations()],
    strict: process.env.NODE_ENV !== "production"
})