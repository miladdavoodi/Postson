import Vue from "vue"
import Vuex from "vuex"

import {createPersistedState, createSharedMutations} from "vuex-electron"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        milad: 0,
        LOG: [],
        Row: [],
        Tabs: [
            {
                '_id': 1,
                'method': 'GET',
                'title': 'Untitle',
                'active': false,
                'focused': true
            }
        ],
        DirectoryActiveId: 1021,
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
        REMOVE_TAB(store, KEY) {
            store.commit("REMOVE_TAB", KEY)
        },
        FOCUS_TAB(store, KEY) {
            store.commit("FOCUS_TAB", KEY)
        },
        RUN_QUERY(store) {
            store.commit("RUN_QUERY")
        },
    },

    mutations: {
        RUN_QUERY(state) {
            for (let key in state.Tabs) {
                if (key != 3) state.Tabs[key].active = true;
            }
        },
        ACTIVE_DIRECTORY(state, ID) {
            state.DirectoryActiveId = ID;
        },
        CLEAN_ALLTABS(state) {
            state.Tabs = [];
        },
        FOCUS_TAB(state, KEY) {

            for (let index in state.Tabs) {
                if (KEY == index) {
                    state.Tabs[index].focused = true;
                    state.DirectoryActiveId = state.Tabs[index]._id;
                } else {
                    state.Tabs[index].focused = false;
                }
            }

        },
        REMOVE_TAB(state, KEY) {

            let isFindFocusedTab = false;
            for (let index in state.Tabs) {
                if (index == KEY){
                    state.Tabs.splice(index, 1);
                }else{
                    if (state.Tabs[index].focused==true){
                        isFindFocusedTab = true;
                    }
                }
            }

            if (isFindFocusedTab==false && state.Tabs.length){
                state.Tabs[(state.Tabs.length-1)].focused = true;
                state.Tabs[(state.Tabs.length-1)].active = true;
                state.DirectoryActiveId = state.Tabs[(state.Tabs.length-1)]._id;
            }


        },
        SET_ROW(state, ROW) {
            state.Row = ROW;

            let isNotactive = 0;
            state.Tabs.forEach(function (rw) {
                if (rw.active == false) {
                    isNotactive = rw.id;

                    rw._id = ROW.id;
                    rw.method = ROW.method;
                    rw.title = ROW.title;
                    rw.active = false;
                    rw.focused = true;

                    state.DirectoryActiveId = ROW.id;

                } else {
                    rw.focused = false;
                }
            });


            if (isNotactive == 0 && state.Tabs.length <= 4) {

                state.Tabs.push({
                    '_id': ROW.id,
                    'method': ROW.method,
                    'title': ROW.title,
                    'active': false,
                    'focused': true
                });

                state.DirectoryActiveId = ROW.id;

            } else {


            }
        },
    },

    plugins: [createPersistedState(), createSharedMutations()],
    strict: process.env.NODE_ENV !== "production"
})