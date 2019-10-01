<template>
    <div>
        <div class="box">
            <div class="methods">
                <span CLASS="API POST">POST</span>
                <i class="fas fa-caret-down"></i>
            </div>
            <div class="url">
                <input placeholder="url the address">
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.box{
        height: 30px;
        background: rgba(0,0,0,0.5);
        margin-right: 10px;
        margin-left: 10px;
        position: relative;
        top: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 4px;
    }
    div.methods{
        height: 30px;
        width: 80px;
        float: left;
        cursor: pointer;
        position: relative;
        border-right: 1px solid rgba(255,255,255,0.2);
    }
    div.methods i{
        color: #999;
        position: absolute;
        top: 7px;
        right: 10px;
    }
    div.methods span{
        color: #999;
        position: absolute;
        top: 4px;
        left: 10px;
    }
    div.url{
        position: relative;
        height: 30px;
        width: calc(100% - 81px);
        float: left;
    }
    div.url input{
        border: none;
        position: absolute;
        right: 10px;
        left: 4px;
        width: calc(100% - 20px);
        display: block;
        top: 2px;
        padding: 5px;
        background: none;
        color: #ccc;
        outline: none;
    }
</style>