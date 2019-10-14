<template>
    <div>
        <Tabs/>
        <div class="fixed">
            <Params v-if="tabActive=='Params'"/>
            <Headers v-if="tabActive=='Headers'"/>
            <Response/>
        </div>
    </div>
</template>
<style scoped>
    .fixed {
        height: calc(100vh - 174px);
        overflow: auto;
    }
</style>
<script>
    import Tabs from './tab';
    import Params from './params';
    import Headers from './headers';
    import Response from './Response';

    export default {
        data() {
            return {
                tabActive: "Params"
            }
        },
        components: {
            Tabs,
            Params,
            Response,
            Headers
        },
        methods: {
            getTabActive(Name) {
                this.tabActive = Name;
            }
        }
    }
</script>