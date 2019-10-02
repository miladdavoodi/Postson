<template>
    <div>
        <ul>
            <li v-on:click="tabActive=item" v-for="item in tabs" v-bind:class="{active:(tabActive==item)}"><span>{{item}}</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs:[
                    "Params" , "Authorization" ,"Headers","Body"
                ],
                tabActive: "Params"
            }
        }
    }
</script>
<style scoped>
    ul {
        display: block;
        padding: 0 10px;
        height: 37px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    ul li {
        float: left;
        color: #777;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    ul li span {
        display: block;
        padding: 10px 10px;
    }

    ul li.active {
        color: #fff;
        border-bottom: 2px solid #00ff5a;
    }
</style>