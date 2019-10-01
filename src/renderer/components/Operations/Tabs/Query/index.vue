<template>
    <div>
        <Tabs/>
        <div class="fixed">
            <Params/>
            <Response/>
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
    import Response from './Response';
    export default {
        components:{
            Tabs,
            Params,
            Response
        }
    }
</script>