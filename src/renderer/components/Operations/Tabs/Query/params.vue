<template>
    <div>
        <div class="title">Query Params  :: {{DirectoryActiveId}} </div>
        <div class="rowtbl">
            <div v-for="item in listParams" class="_row">
                <div class="check">
                    <div class="checkbox"><i class="fas fa-check"></i></div>
                </div>
                <div class="key"><input v-on:keydown="addParam" v-model="item.KEY" placeholder="KEY"></div>
                <div class="value"><input v-model="item.VALUE" placeholder="VALUE"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex"

    export default {
        computed: {
            ...mapState([
                'DirectoryActiveId'
            ]),
        },

        data() {
            return {
                listParams: [
                    {KEY: "", VALUE: "", ACTIVE: false}
                ]
            }
        },

        methods: {
            addc:function (){
                this.$store.dispatch('increment');
            },
            addParam: function () {

                if (this.listParams[this.listParams.length - 1].KEY) {
                    this.listParams.push({
                        KEY: "",
                        VALUE: "",
                        ACTIVE: false
                    })
                }

            }
        },




    }
</script>
<style scoped>
    div.title {
        display: block;
        padding: 12px 8px;
        color: #888;
        font-size: 13px;
        background: #1c2024;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    div.checkbox {
        width: 15px;
        height: 15px;
        background: #666;
        display: inline-block;
        margin-top: 7px;
        border-radius: 2px;
        cursor: pointer;
        text-align: center;
    }

    div.checkbox i {
        color: #00ff5a;
        font-size: 11px;
        display: inline-block;
    }

    div._row {
        text-align: center;
        height: 30px;
        background: rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    div._row > div {
        float: left;
    }

    div._row > div.check {
        width: 40px;
        height: 30px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    div._row > div.key {
        width: 180px;
        height: 30px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    div._row > div.value {
        width: calc(100% - 240px);
        height: 30px;
    }

    div._row > div input {
        border: none;
        padding: 7px;
        width: calc(100% - 15px);
        background: none;
        color: #fff;
        font-size: 12px;
        outline: none;
    }
</style>