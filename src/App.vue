<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header-bar v-if="!this.$route.meta.noHeader">
      <slot name="home"></slot>
      <slot name="subTitle" :title="this.$route.meta.title"></slot>
    </header-bar>
    <router-view/>
    <tab-bar v-if="this.$route.name != 'login'"></tab-bar>
  </div>
</template>

<script>
  import headerBar from './components/header';
  import tabBar from './components/tabBar';
  import leftSideMenu from './components/asideMenu'
  export default {
  name: 'App',
    components: {
      headerBar,
      tabBar,
      leftSideMenu
    }
}
</script>

<style>
html,body {
  width: 750px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  background: #F3F4F6;
  font-family: PingFang SC, san Francisco;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-content {
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  overflow: auto;
}
.padBtm {
  padding-bottom: 4rem;
}
img {
  max-width: 100%;
}
.ivu-tabs {
  text-align: center;
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
.header-title {
  font-size: 2rem;
  text-align: center;
}
.header-title > span {
  float: left;
  padding-left: 1rem;
  line-height: 4rem;
  cursor: pointer;
}
.search-box {
  width: 90%;
  height: 70%;
  margin: 0 auto;
  position: relative;
  top: 10px;
  border-radius: 40px;
  background: #fff;
}
.search-box input {
  width: 100%;
  height: 100%;
  padding: 0 8% 0 20px;
  top: -9px;
  position: relative;
  border: none;
  background: transparent;
  outline: none;
}
.search-box input::placeholder {
  color: #999;
}
.search-box > i {
  position: absolute;
  right: 3%;
  top: 10%;
}

.right-content-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-info-box {
  padding-left: 1rem;
  font-size: 1.4rem;
  line-height: 2;
}
.music-play-count {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 5px;
  color: #fff;
  background: linear-gradient(left,rgba(9,9,9,0.2),rgba(3,3,3,0.8));
}
.creator {
  position: absolute;
  bottom: 10%;
  left: 5%;
  padding: 2px 5px;
  color: #fff;
  background: linear-gradient(left,rgba(9,9,9,0.2),rgba(3,3,3,0.8));
}
.play-name {
  height: 56px;
}

.ivu-slider-button,
.ivu-slider-button-dragging,
.ivu-slider-button:focus,
.ivu-slider-button:hover {
  border: 2px solid #d6413d;
}
.ivu-slider-bar {
  background: #d6413d;
}
</style>
