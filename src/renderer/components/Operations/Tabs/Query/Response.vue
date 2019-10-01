<template>
    <div>
        <div class="title">Query Response</div>
        <div class="Response">

            <div class="notFind">
                <i class="fab fa-codepen"></i>
                <div>Hit Send to get a response</div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    div.title{
        display: block;
        padding: 12px 8px;
        color: #888;
        background: #1c2024;
        font-size: 13px;
        border-bottom: 1px solid  rgba(255,255,255,0.1);
        border-top: 1px solid  rgba(255,255,255,0.1);
    }
    div.Response{
        min-height: 346px;
    }
    div.Response div.notFind{
        text-align: center;
        font-weight: bold;
        position: relative;
        top: 100px;
        color: rgba(255,255,255,0.3);
    }
    div.Response div.notFind i{
        font-size: 50px;
        display: block;
    }
    div.Response div.notFind > div{
        margin-top: 20px;
    }
</style>