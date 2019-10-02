<template>
    <div class="bar">
        <ul>
            <li><div class="logo"></div> </li>
            <li><div class="team">TEAM</div> </li>
        </ul>
    </div>
</template>
<style scoped>
    div.bar{
        height: 40px;
        background: #171a1e;
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    div.logo{
        background: url("../../assets/logoType.png");
        background-size: cover;
        height: 12px;
        width: 83px;
        position:relative;
        top: 5px;
    }
    div.bar ul{
        float: left;
        margin: 10px 0 0 10px;
    }
    div.bar ul li{
        float: left;
        margin-right: 20px;
    }
    div.team{
        background: rgba(255,255,255,0.2);
        color: #ccc;
        cursor: pointer;
        padding: 5px 10px;
        position: relative;
        top: -2px;
        border-radius: 4px;
    }
    div.team:hover{
        color: #fff;
    }
</style>