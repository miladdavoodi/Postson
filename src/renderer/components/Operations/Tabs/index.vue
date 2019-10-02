<template>
    <div>
        <div class="TabList">
            <div v-for="row in TabsList" class="tab animated fadeInUp">
                <div class="baseColorBg"></div>
                <span v-bind:class="row.method" class="API POST">{{row.method}}</span>
                <span>{{row.title}}</span>
                <i class="fas fa-times"></i>
            </div>
            <div v-if="TabsList.length<=4" v-on:click="addTab" class="tab plus">
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

    export default {
        data() {
            return {
                TabsList: [
                    {
                        '_id': 2143522,
                        'method': 'POST',
                        'title': 'Result Charge',
                    }
                ]
            }
        },
        methods: {
            addTab: function () {

                this.TabsList.push({
                    '_id': 2143522,
                    'method': 'GET',
                    'title': 'Untitled',
                });


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