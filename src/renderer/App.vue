<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'postson'
  }
</script>

<style>
  *, *::after, *::before {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
    cursor: default;
  }
  ul,li,body,html,p,h1,h2{
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    background-color: rgba(0,0,0,0.2);
    width: 5px
  }

  ::-webkit-scrollbar-thumb:window-inactive,
  ::-webkit-scrollbar-thumb {
    background:  rgba(255,255,255,0.1)
  }
</style>
