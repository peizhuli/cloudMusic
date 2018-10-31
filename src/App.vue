<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
  import headerBar from './components/header';
  export default {
  name: 'App',
    components: {
      headerBar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ivu-tabs-bar {
  margin: 0 auto;
  display: inline-block;
  border-bottom: none;
}
.ivu-tabs-ink-bar {
  background-color: #d6413d;
}
.ivu-tabs-nav .ivu-tabs-tab-active {
  color: #d6413d;
}
.nav-text.ivu-tabs-nav  {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
