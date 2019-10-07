<template>
    <div>
        <div class="box">
            <div class="methods">
                <span v-bind:class="Row.method" class="API">{{Row.method}}</span>
                <i class="fas fa-caret-down"></i>
            </div>
            <div class="url">
                <input placeholder="url the address" v-bind:value="Row.url">
            </div>
            <div v-on:click="$store.dispatch('RUN_QUERY')" class="send"><span>SEND</span></div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex"
    export default {
        computed: {
            ...mapState([
                'Row'
            ]),
        },
    }
</script>
<style scoped>
    div.box{
        height: 30px;
        background: rgba(0,0,0,0.5);
        margin-right: 10px;
        margin-left: 10px;
        position: relative;
        top: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 4px;
    }
    div.methods{
        height: 30px;
        width: 80px;
        float: left;
        cursor: pointer;
        position: relative;
        border-right: 1px solid rgba(255,255,255,0.2);
    }
    div.methods i{
        color: #999;
        position: absolute;
        top: 7px;
        right: 10px;
    }
    div.methods span{
        color: #999;
        position: absolute;
        top: 4px;
        left: 10px;
    }
    div.url{
        position: relative;
        height: 30px;
        width: calc(100% - 191px);
        float: left;
        background: none;
    }
    div.send{
        position: relative;
        height: 32px;
        width: 110px;
        float: left;
        background: #295afc;
        border-radius: 0 4px 4px 0;
        top: -1px;
        cursor: pointer;
        right: -1px;
    }
    div.send:hover{
        background: #4d76ff;
    }
    div.send span{
        display: block;
        text-align: center;
        font-weight: bold;
        color: #fff;
        line-height: 2.4;
    }
    div.url input{
        border: none;
        position: absolute;
        right: 10px;
        left: 4px;
        width: calc(100% - 20px);
        display: block;
        top: 2px;
        padding: 5px;
        background: none;
        color: #fff;
        outline: none;
    }
</style>