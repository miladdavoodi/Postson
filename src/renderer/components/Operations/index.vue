<template>
    <div class="box">
        <Tabs/>
    </div>
</template>
<script>
    import Tabs from './Tabs/index'
    export default {
        components:{
            Tabs
        }
    }
</script>
<style scoped>
    div.box{
        background: #060607;
        height: calc(100vh - 42px);
        width: calc(100vw - 251px);
        float: left;
    }
</style>