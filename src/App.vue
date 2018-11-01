<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header-bar v-if="!this.$route.meta.noHeader"></header-bar>
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
html,body {
  width: 100%;
  height: 100%;
  background: #F3F4F6;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ivu-tabs-bar {
  margin: 0 auto;
  display: inline-block;
  border-bottom: none;
}
.ivu-tabs-nav-container {
  line-height: 2;
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
ul,li {
  list-style: none;
}
</style>
