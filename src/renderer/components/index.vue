<template>
    <div class="contentBox">
        <Toolbar/>
        <Collection/>
        <Operations/>
    </div>
</template>
<script>

    import Toolbar from '@/components/Toolbar/index'
    import Collection from '@/components/Collection/index'
    import Operations from '@/components/Operations/index'
    export default {
        components:{
            Toolbar,
            Collection,
            Operations
        }
    }
</script>
<style>
    li{
        list-style: none;
    }
    *{
        font-family: Arial,serif;
        font-size: 13px;
    }
    .baseColor{
        color: #00ff5a;
    }
    .API{
        font-weight: bold;
        font-size: 9px;
        display: inline-block;
        padding: 5px 10px;
        width: 24px;
    }
    .API.POST{
        color: #ffc600 !important;
    }
    .API.GET{
        color: #00baff !important;
    }
    div.contentBox{
        background: #292929;
        width: 100%;
        height: 100vh;
    }
</style>