<template>
    <div>
        <div class="TabList">

            <div v-for="(row,key) in Tabs" v-bind:class="{active:row.focused}" class="tab animated fadeInUp">
                <div class="baseColorBg"></div>
                <span v-on:click="focusTab(key)" v-bind:class="row.method" class="API POST">{{row.method}}</span>
                <span v-on:click="focusTab(key)">{{row.title}}</span>
                <i v-on:click="removeTab(key)" class="fas fa-times"></i>
            </div>
            <div v-if="Tabs.length<=4" v-on:click="addTab" class="tab plus">
                <span><i class="fa fa-plus"></i></span>
            </div>
        </div>

        <div class="UrlMtd">
            <Url/>
        </div>
        <div>

            <Query/>
        </div>
    </div>
</template>
<script>
    import Url from './url';
    import Query from './Query/index';
    import { mapState } from "vuex"

    export default {
        computed: {
            ...mapState([
                'Tabs',
                'DirectoryActiveId'
            ]),
        },
        data() {
            return {

            }
        },
        methods: {
            removeTab: function (key) {
                this.$store.dispatch('REMOVE_TAB',key)
            },
            focusTab: function (id) {
                this.$store.dispatch('FOCUS_TAB',id)
            },
            addTab: function () {

            }
        },
        components: {
            Url,
            Query
        }
    }
</script>
<style scoped>
    div.TabList {
        margin: 10px 0 0 10px;
        height: 30px;
        overflow: auto;
    }

    div.TabList .tab {
        cursor: pointer;
        display: inline-block;
        background: #2f363c;
        padding: 8px 4px 4px 4px;
        position: relative;
        min-width: 20px;
        text-align: center;
        margin-right: 3px;
    }

    div.TabList .tab .baseColorBg {
        width: 100%;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px 8px 0 0;
    }

    div.TabList .tab:not(.active) .baseColorBg {
        background: #444;
    }

    .plus {
        background: none !important;
        cursor: pointer;
    }

    .plus i {
        font-size: 12px;
        position: relative;
        top: -2px;
    }
    .fa-times{
        margin-right:5px;
        color: red;
        cursor: pointer;
    }

    div.TabList .tab span {
        color: #999;
        font-size: 13px;
        display: inline-block;
    }

    div.TabList .tab span:nth-child(3) {
        margin-right: 10px;
    }

    div.UrlMtd {
        background: #2f363c;
        height: 50px;
    }
</style>