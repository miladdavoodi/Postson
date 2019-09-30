<template>
    <div class="box">
        <Search/>
        <New/>
        <Directory/>
    </div>
</template>
<script>
    import Search from './Search/index';
    import New from './New/index';
    import Directory from './Directory/index';
    export default {
        components:{
            Search,
            New,
            Directory,
        }
    }
</script>
<style scoped>
    div.box{
        position: relative;
        height: calc(100vh - 42px);
        background: #24292e;
        border-right: 1px solid rgba(255,255,255,0.1);
        width: 250px;
        float: left;
    }
</style>