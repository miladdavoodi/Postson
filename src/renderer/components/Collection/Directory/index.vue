<template>
    <div class="DirectoryList">

        <ul>
            <li v-for="rw in DirectoryList" >
                <div class="title">
                    <div v-on:click="activeDirectory(rw.id)">
                        <i v-bind:class="{'fa-caret-down':(DirectoryActiveId==rw.id),'fa-caret-right':(DirectoryActiveId!=rw.id)}" class="fas "></i>
                        <i class="fas fa-folder"></i>
                        <span>{{rw.title}} <i>/ {{rw.list.length}}</i></span>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <ul v-for="nrow in rw.list" v-bind:class="{show:(DirectoryActiveId==rw.id)}" class="sub">
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
        components:{
        },
        methods:{
            activeDirectory:function (id) {
                let _DirId = this.DirectoryActiveId;
                this.DirectoryActiveId = (_DirId==id)?0:id;
            }
        },
        data() {
            return {
                DirectoryActiveId:10001,
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
        background: #1c2024;
        bottom: 0;
        left: 0;
        right: 0;
        top: 90px;
        overflow: auto;
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
    div.DirectoryList > ul > li span i{
        font-weight: normal;
        font-size: 11px;
    }

    div.DirectoryList > ul > li div.title {
        padding: 8px 10px;
        position: relative;
    }
    div.DirectoryList > ul > li div.title i.fa-ellipsis-h{
        position: absolute;
        top: 8px;
        right: 10px;
        opacity: 0;
        color: #ccc;
        transition: all 0.3s;
    }
    div.DirectoryList > ul > li:hover div.title i.fa-ellipsis-h{
        opacity: 1;
    }
    div.DirectoryList > ul > li div.title > div{
        width: calc(100% - 50px);
        display: block;
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
        background: #171a1e;
        display: none;
    }

    div.DirectoryList ul li ul.sub li {
        padding: 5px 0;
    }
    div.DirectoryList > ul > li > ul.sub li {
        margin: 0;
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