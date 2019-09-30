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
        color: #12b99c !important;
    }
    .API.PUT{
        color: #1b62cc !important;
    }
    .API.PATCH,
    .API.HEAD,
    .API.OPTIONS,
    .API.LINK,
    .API.UNLINK,
    .API.PURGE,
    .API.LOCK,
    .API.UNLOCK,
    .API.PROPFIND,
    .API.VIEW,
    .API.COPY{
        color: #999 !important;
    }
    .API.DEL{
        color: #cc1b34 !important;
    }
    div.contentBox{
        background: #292929;
        width: 100%;
        height: 100vh;
    }
</style>