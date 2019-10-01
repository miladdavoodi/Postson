<template>
    <div>
        <div class="TabList">
            <div class="tab active">
                <div class="baseColorBg"></div>
                <span class="API POST">POST</span>
                <span>Result Charge</span>
            </div>
            <div class="tab">
                <div class="baseColorBg"></div>
                <span class="API POST">POST</span>
                <span>Result Charge</span>
            </div>
            <div class="tab plus">
                <span><i class="fa fa-plus"></i></span>
            </div>
        </div>
        <div class="UrlMtd">
            <Url/>
        </div>
    </div>
</template>
<script>
    import Url from './url';
    export default {
        components:{
            Url
        }
    }
</script>
<style scoped>
    div.TabList{
        margin: 10px 0 0 10px;
    }
    div.TabList .tab{
        cursor: pointer;
        display: inline-block;
        background: #2f363c;
        padding: 8px 4px 4px 4px;
        position: relative;
        border-radius: 8px 8px 0 0;
        min-width: 20px;
        text-align: center;
        margin-right: 1px;
    }
    div.TabList .tab .baseColorBg{
        width: 100%;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px 8px 0 0;
    }
    div.TabList .tab:not(.active) .baseColorBg{
        background: #444;
    }
    .plus{
        background: none !important;
        cursor: pointer;
    }
    .plus i{
        font-size: 12px;
        position: relative;
        top: -2px;
    }
    div.TabList .tab span{
        color: #999;
        font-size: 13px;
        display: inline-block;
    }
    div.TabList .tab span:nth-child(3){
        margin-right: 10px;
    }
    div.UrlMtd{
        background: #2f363c;
        height: 50px;
    }
</style>