<template>
    <div class="search">
        <i class="fas fa-search"></i>
     <input placeholder="Search To Collection">
    </div>
</template>
<style scoped>
    div.search {
        position: relative;
        margin: 10px;
        height: 35px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    div.search input {
        padding: 9px 10px 10px 40px;
        width: calc(100% - 50px);
        border: none;
        background: none;
        position: absolute;
        top: 0;
        left: 0;
        color: #999;
        font-size: 13px;
        outline: none;
    }

    div.search i {
        position: absolute;
        color: rgba(255, 255, 255, 0.3);
        left: 10px;
        top: 10px;
    }
</style>