<template>
    <div class="DirectoryList">
        <ul>
            <li v-for="rw in DirectoryList" >
                <div v-on:click="activeDirectory(rw.id)" class="title">
                    <i class="fas fa-caret-right"></i>
                    <i class="fas fa-folder"></i>
                    <span>{{rw.title}}</span>
                </div>
                <ul v-for="nrow in rw.list" v-bind:class="{show:(DirectoryActiveId==rw.id)}" class="sub animated fadeIn">
                    <li>
                        <span v-bind:class="nrow.method" class="API POST">{{nrow.method}}</span>
                        <span class="_name">{{nrow.title}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        methods:{
            activeDirectory:function (id) {
                let _DirId = this.DirectoryActiveId;
                this.DirectoryActiveId = (_DirId==id)?0:id;
            }
        },
        data() {
            return {
                DirectoryActiveId:0,
                DirectoryList: [
                    {
                        'id':10001,
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
                                'method': 'POST',
                                'title': 'Reverce Charge'
                            }
                        ]
                    },
                    {
                        'id':10002,
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
            }
        }
    }
</script>
<style scoped>
    div.DirectoryList {
        position: absolute;
        margin: 0;
        border-radius: 2px;
        background: #1a1a1a;
        bottom: 0;
        left: 0;
        right: 0;
        top: 86px;
    }

    div.DirectoryList ul li {
        cursor: pointer;
    }

    div.DirectoryList ul li.active {
        background: rgba(255, 255, 255, 0.05);
    }

    div.DirectoryList ul li:hover i,
    div.DirectoryList ul li.active i {
        color: rgba(255, 255, 255, 0.3);
    }

    div.DirectoryList > ul > li:hover span,
    div.DirectoryList > ul > li.active span {
        color: #ccc;
    }

    div.DirectoryList > ul > li span {
        color: #999;
        font-weight: bold;
    }

    div.DirectoryList > ul > li div.title {
        padding: 8px 10px;
    }

    div.DirectoryList > ul > li:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    div.DirectoryList > ul > li i {
        color: rgba(255, 255, 255, 0.2);
        font-size: 16px;
        display: inline-block;
        margin-left: 1px;
        margin-right: 5px;
    }

    div.DirectoryList ul li ul.sub {
        background: #101010;
        display: none;
    }

    div.DirectoryList ul li ul.sub li {
        padding: 8px 0;
    }

    div.DirectoryList ul li ul.sub li:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
    }

    span._name {
        font-size: 12px;
        font-weight: normal !important;
        color: #666 !important;
    }

    div.DirectoryList ul li ul.sub li:hover span._name {
        color: #999 !important;
    }
    div.DirectoryList ul li ul.sub.show{
        display: block;
    }
</style>