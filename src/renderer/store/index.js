import Vue from "vue"
import Vuex from "vuex"

import {createPersistedState, createSharedMutations} from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        milad: 0,
        Row: [],
        Tabs:[
            {
                '_id': 2143523,
                'method': 'GET',
                'title': 'Untitle',
                'active':false,
                'focused':true
            }
        ],
        DirectoryActiveId: 10001,
        DirectoryList: [
            {
                'id': 10001,
                'title': "Blog Post",
                'list': [
                    {
                        'id': 10002,
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/01",
                        'Params': [
                            {KEY: 'category', VALUE: 'music', ACTIVE: false},
                            {KEY: 'limit', VALUE: 10, ACTIVE: false},
                        ]
                    },
                    {
                        'id': 10003,
                        'method': 'GET',
                        'title': 'get Charge',
                        'url': "http://localhost/ws/02",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'id': 10004,
                        'method': 'DEL',
                        'title': 'Reverce Charge',
                        'url': "http://localhost/ws/03",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'id': 10005,
                        'method': 'PATCH',
                        'title': 'Reverce Charge',
                        'url': "http://localhost/ws/04",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'id': 10006,
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/05",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                ]
            },
            {
                'id': 10007,
                'title': "Category Post",
                'list': [
                    {
                        'id': 10008,
                        'method': 'POST',
                        'title': 'Result Charge',
                        'url': "http://localhost/ws/01",
                        'Params': [{KEY: '', VALUE: '', ACTIVE: false}]
                    },
                    {
                        'id': 10009,
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
        CLEAN_ALLTABS(store) {
            store.commit("CLEAN_ALLTABS")
        },
    },

    mutations: {
        ACTIVE_DIRECTORY(state, ID) {
            state.DirectoryActiveId = ID;
        },
        CLEAN_ALLTABS(state) {
            state.Tabs = [];
        },
        SET_ROW(state, ROW) {
            state.Row = ROW;

            let isNotactive = 0;
            state.Tabs.forEach(function (rw) {
                if (rw.active==false){
                    isNotactive = rw.id;

                    rw._id = ROW.id;
                    rw.method = ROW.method;
                    rw.title = ROW.title;
                    rw.active = false;
                    rw.focused = true;

                }else{
                    rw.focused = false;
                }
            });


            if (isNotactive==0) {

                state.Tabs.push({
                    '_id': ROW.id,
                    'method': ROW.method,
                    'title': ROW.title,
                    'active': false,
                    'focused': true
                });

            }
        },
    },

    plugins: [createPersistedState(), createSharedMutations()],
    strict: process.env.NODE_ENV !== "production"
})