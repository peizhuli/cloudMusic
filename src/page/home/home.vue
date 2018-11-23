<template>
  <div class="app-content">
    <div class="tab-bar">
      <span :class="{tabBarItem: true, active: currentIndex == index }" v-for="(item, index) in menuList" @click="goToPage(item.path, index)">{{ item.name }}</span>
    </div>
    <router-view></router-view>
    <!--<div class="bottom-music-box">-->
      <!--<current-music></current-music>-->
    <!--</div>-->
    <go-top></go-top>
  </div>
</template>

<script>
  import currentMusic from '../../components/currentMusic';
  import goTop from '../../components/goTop';
  export default {
    components: {
      currentMusic,
      goTop
    },
    data() {
        return {
            menuList: [
              {
                path: '/homeSpecialRecommend',
                name: '个性推荐'
              },
              {
                path: '/homePlayList',
                name: '歌单'
              },
              {
                  path: '/homeDJ',
                name: '主播电台'
              },
              {
                path: '/homeTopMusicList',
                name:'排行榜'
              }
            ],
          currentIndex: 0
        }
    },
    methods: {
        goToPage: function (path, index) {
          this.$router.push(path);
          this.currentIndex = index;
        }
    }
  }
</script>

<style scoped>
  .circle-border {
    height: 6rem;
    width: 6rem;
    margin: 0 auto;
    line-height: 5rem;
    text-align: center;
    border: 2px solid #d6413d;
    border-radius: 50%;
    font-size: 3rem;
  }
  .circle-border.daily-recommend-music-count {
    line-height: 6rem;
    color: #d6413d;
  }
  .tab-bar {
    padding-top: 1rem;
    text-align: center;
  }
  .tabBarItem {
    margin: 0 2rem;
    display: inline-block;
    font-size: 1.6rem;
    cursor: pointer;
  }
  .tabBarItem.active {
    border-bottom: 4px solid #d6413d;
  }
</style>
