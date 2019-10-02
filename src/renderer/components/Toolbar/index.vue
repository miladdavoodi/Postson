<template>
    <div class="bar">
        <ul>
            <li><div class="logo"></div> </li>
            <li><div class="team">TEAM</div> </li>
            <li> <i class="fas fa-cog"></i> </li>
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
        margin-right: 56px;
    }
    div.bar ul{
        position: relative;
        z-index: 4;
        float: left;
        margin: 10px 0 0 10px;
    }
    div.bar ul li{
        float: left;
        margin-right: 10px;
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
    .fa-cog{
        color: rgba(255,255,255,0.2);
        font-size: 20px;
        position: relative;
        cursor: pointer;
        top: 2px;
    }
    .fa-cog:hover{
        color: rgba(255,255,255,0.6);
    }
</style>