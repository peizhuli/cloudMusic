<template>
  <div class="app-content">
    <Tabs value="name1">
      <TabPane label="个性推荐" name="name1">
        <Carousel :autoplay="true" :loop="true" :autoplay-speed="2000">
          <CarouselItem v-for="item in banners" :key="item.url">
            <div class="demo-carousel">
              <img :src="item.picUrl" @click="goTarget(item.targetId)" />
            </div>
          </CarouselItem>
        </Carousel>
        <Row class="special-list">
          <Col span="8">
            <div class="circle-border" @click="$router.push('/privateFM')">
              <Icon type="md-radio" color="#d6413d" />
            </div>
            <p>私人FM</p>
          </Col>
          <Col span="8">
          <div class="circle-border daily-recommend-music-count">
            20
          </div>
          <p>每日歌曲推荐</p>
          </Col>
          <Col span="8">
          <div class="circle-border">
            <Icon type="ios-podium-outline" color="#d6413d" />
          </div>
          <p>云音乐热歌榜</p>
          </Col>
        </Row>

        <div class="recommend-item">
          <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />推荐歌单<span class="check-more">更多&gt;</span></div>
          <Row class="recommend-play-list" :gutter="24" justify="center">
            <Col :xs="{ span: 12 }" :lg="{span: 8}" class="recommend-play-item" v-for="item in recommendMusic" :key="item.id">
              <div class="play-pic-box" @click="$router.push({path: 'songsCategoryDetail', query: {id: item.id}})">
                <img :src="item.picUrl" />
                <div class="music-play-count"><Icon type="ios-headset-outline" />{{ item.playCount > 10000 ? (item.playCount / 10000).toFixed(0) + '万' : (item.playCount.toFixed(0) + '人') }}</div>
              </div>
              <!--<p>推荐理由：{{ item.copywriter }}</p>-->
              <p class="play-name">{{ item.name }}</p>
            </Col>
          </Row>
        </div>

        <div class="recommend-item">
          <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />推荐MV<span class="check-more" @click="$router.push('/MV')">更多&gt;</span></div>
          <ul class="recommend-play-list">
            <li class="recommend-play-item" v-for="item in recommendMVs" :key="item.id" @click="$router.push({path: '/playMV', query: { id: item.id }})">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
              <p>{{ item.copywriter }}</p>
              <p>播放次数：{{ item.playCount }}</p>
            </li>
          </ul>
        </div>

        <div class="recommend-item">
          <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />独家放送<span class="check-more">更多&gt;</span></div>
          <ul class="recommend-play-list">
            <li class="recommend-play-item" v-for="item in privateContents" :key="item.id" @click="">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>

        <div class="recommend-item">
          <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />推荐电台<span class="check-more">更多&gt;</span></div>
          <ul class="recommend-play-list">
            <li class="recommend-play-item" v-for="item in recommendDJs" :key="item.id" @click="">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
              <p>{{ item.copywriter }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
      <!--
      <TabPane label="歌单" name="name2">
        <div class="songs-type-box">
          <span>全部歌单</span>
          <div class="hot-songs-type">
            <span v-for="item in hotPlayType" :key="item.id">
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="well-chosen-play-box">
          <Row :gutter="16">
            <Col span="8" v-for="item in wellChosenPlay" :key="item.id">
              <div class="play-item" @click="getPlayListDetail(item.id)">
                <img :src="item.coverImgUrl" />
                <div class="music-play-count"><Icon type="ios-headset-outline" />{{ item.playCount > 10000 ? (item.playCount / 10000).toFixed(0) + '万' : (item.playCount.toFixed(0) + '人') }}</div>
                <div class="creator"><Icon type="ios-headset-outline" />{{ item.creator.nickname }}</div>
              </div>
              <div>{{ item.name }}</div>
            </Col>
          </Row>
        </div>
      </TabPane>
      -->
      <TabPane label="主播电台" name="name4">
        <div class="">
          <span @click="$router.push('/DJCategory')">电台分类</span>
        </div>
        <div class="payment-dj-box">
          <Row class="payment-list" v-for="item in paymentDJs" :key="item.id">
            <Col :xs="{span: 6}">
              <img :src="item.picUrl" />
            </Col>
            <Col :xs="{span: 18}" class="payment-item-content">
              <div>{{ item.name }}</div>
              <div>{{ item.rcmdText }}</div>
              <div>{{ item.lastProgramName }}</div>
            </Col>
          </Row>
        </div>
      </TabPane>
      <!--
      <TabPane label="排行榜" name="name5">
        <div class="top-list-box">
          <div class="top-music-item" v-for="item in topMusicList" :key="item.id">
            <Row type="flex" justify="start" align="middle">
              <Col span="8">
              <img :src="item.coverImgUrl" />
              <span class="update-frequency">{{ item.updateFrequency }}</span>
              </Col>
              <Col span="16" class="music-top-content">
                <div class="music-top-list">
                  <div class="music-top-name" v-for="(track, index) in item.tracks" :key="index">
                    {{ index + 1 }}. {{ track.first }} - {{ track.second }}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </TabPane>
  -->
    </Tabs>
    <!--<div class="bottom-music-box">-->
      <!--<current-music></current-music>-->
    <!--</div>-->
    <go-top></go-top>
  </div>
</template>

<script>
  import service from '../../service/service';
  import currentMusic from '../../components/currentMusic';
  import goTop from '../../components/goTop';
  export default {
      mounted() {
          this.getBanners();
          this.getDailyRecomments();
          this.getRecommendMVs();
          this.getPrivateContents();
          this.getRecommendDJs();
//          this.getTopMusicList();

//          this.getHotPlayType();
//          this.getPlayType();
          this.getWellChosenPlay();
          this.getPayDJ();
      },
      data() {
          return {
              banners: [],
            recommendMusic: [],
            recommendMVs: [],
            recommendDJs: [],
            privateContents: [],
//            topMusicList: [],
//            hotPlayType: [],
//            playType: [],
            wellChosenPlay: [],

            paymentDJs: []
          }
      },
    components: {
      currentMusic,
      goTop
    },
    methods: {
      getBanners: function() {
              var vm = this;
              service.getBanner().then(function(res) {
                  if(res.code == 200) {
                    vm.banners = res.banners;
                  }
              });
          },
      goTarget: function(id) {
              if(id.length) {
                  if(id.startsWith('http')) {
                      window.location.href = id;
                  } else {
                    this.$router.push({ path: '/album/albumDetail', query: { id : id} });
                  }
              }
      },
      getDailyRecomments: function() {
        var vm = this;
        service.getRecommendMusic().then(function(res) {
           if(res.code == 200) {
               vm.recommendMusic = res.result;
             vm.recommendMusic.length = 9;
           }
        });
      },
      getRecommendMVs: function() {
        let vm = this;
        service.getRecommendMV().then(function (res) {
          if(res.code == 200) {
              vm.recommendMVs = res.result;
          }
        })
      },
      getPrivateContents: function () {
        let vm = this;
        service.getPrivateContent().then(function(res) {
            if(res.code == 200) {
                vm.privateContents = res.result;
            }
        })
      },
      getRecommendDJs: function() {
              let vm = this;
              service.getRecommendDJ().then(function (res) {
                if(res.code == 200) {
                    vm.recommendDJs = res.result;
                }
              });
      },

//      getHotPlayType: function () {
//        let vm = this;
//        service.getHotPlayList().then(function (res) {
//          vm.hotPlayType = res.tags;
//        })
//      },
//      getPlayType: function () {
//        let vm = this;
//        service.getPlayList().then(function (res) {
//        })
//      },
      getWellChosenPlay: function () {
        let vm = this;
        service.getWellChosenList().then(function (res) {;
          vm.wellChosenPlay = res.playlists;
        })
      },

//      getTopMusicList: function () {
//        let vm = this;
//        service.getMusicTopBrief().then(function (res) {
//          vm.topMusicList = res.list;
//        })
//      },

      getPlayListDetail: function (id) {
        this.$router.push({path: '/songsCategoryDetail', query: { id: id }});
      },

      getPayDJ: function () {
        let vm = this;
        service.getDJPayList(3,0).then(function (res) {
          console.log(res);
          vm.paymentDJs = res.data.list;
        })
      }
//      changeRoute: function (path) {
//        this.$router.push(path);
//      },
//      goPlayMusic: function(id) {
//        this.$router.push({path: '/playMusic', query: { id: id }});
//      },
//      goPlayMV: function(id) {
//        this.$router.push({path: '/playMV', query: { id: id }});
//      }
    }
  }
</script>

<style scoped>
  .recommend-play-list {
    clear: both;
    text-align: left;
  }
  .recommend-play-item img,
  .play-item img {
    width: 100%;
  }
  .special-list {
    padding: 2rem 0;
    font-size: 1.2rem;
    line-height: 4rem;
    font-weight: 500;
    text-align: center;
    color: #000;
    border-bottom: 1px solid #DCDDDF;
    background: #F3F4F6;
  }
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
  .check-more {
    float: right;
    color: #68696B;
  }
  .recommend-item {
    padding: 1rem;
    font-size: 1.2rem;
    text-align: left;
    overflow: hidden;
  }
  .recommend-title {
    padding-bottom: 2rem;
    color: #000;
  }
  .play-pic-box {
    position: relative;
    max-height: 224px;
  }
  .music-play-count {
    position: absolute;
    top: 0;
    right: 5%;
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
  .bottom-music-box {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .top-music-item img {
    max-width: 100%;
  }
  .update-frequency {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 3rem;
    color: #fff;
  }
  .music-top-content {
    padding: 5%;
    font-size: 4rem;
    line-height: 3;
  }
  .music-top-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .payment-item-content {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
