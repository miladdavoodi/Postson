<template>
    <div>
        <Tabs/>
        <div class="fixed">
            <Params/>

        </div>
    </div>
</template>
<style scoped>
    .fixed{
        height: calc(100vh - 174px);
        overflow: auto;
    }
</style>
<script>
    import Tabs from './tab';
    import Params from './params';
    export default {
        components:{
            Tabs,
            Params
        }
    }
</script>