<template>
  <div class="header-bar">
    <!--<Icon class="menu-icon" type="md-menu" size="40" @click.stop="showAsideMenu()" />-->
    <!--<div class="icon-group">-->
      <!--<Icon type="ios-musical-notes-outline" size="40" />-->
      <!--<Icon type="ios-person-add-outline" size="40" />-->
    <!--</div>-->
    <!--<Icon class="search-icon" type="ios-search-outline" size="40" />-->
    <slot name="home" v-if="this.$route.name == 'Home'">
      <div class="search-box">
        <input placeholder="音乐、视频、歌词、电台" v-model="keyword" @focus="$router.push('/search')" />
      </div>
    </slot>
    <slot name="subTitle" v-if="this.$route.name != 'Home'">
      <div class="header-title">
        <span @click="goBack">
          <Icon type="ios-arrow-back" />
        </span>
        {{ title }}
      </div>
      <span>
          <Icon class="play-music-icon" type="ios-stats" size="30" @click="$router.push('/playMusic')" />
        </span>
    </slot>
  </div>
</template>

<script>
  export default {
      name: 'header-bar',
    mounted() {
          this.title = this.$route.meta.title;
    },
      data() {
          return {
              title: '',
              keyword: ''
          }
      },
    methods: {
      showAsideMenu: function () {
          document.getElementById('aside-menu-box').style.left = "0";
      },
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scope>
  .header-bar {
    position: fixed;
    width: 100%;
    max-width: 750px;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #fff;
    background: #d6413d;
    z-index: 99;
  }
  .icon-group {
    display: inline-block;
  }
  .menu-icon {
    float: left;
    margin-left: 5%;
    line-height: 4rem;
  }
  .search-icon {
    float: right;
    margin-right: 5%;
    line-height: 4rem;
  }
  .play-music-icon {
    margin-right: 5%;
    line-height: 4rem;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
