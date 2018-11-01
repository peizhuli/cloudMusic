<template>
  <div>
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
            <div class="circle-border">
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
          <Row class="recommend-play-list" :gutter="24" justify="center" align="left">
            <Col span="8" class="recommend-play-item" v-for="item in recommendMusic" :key="item.id" @click="goPlayMusic(item.id)">
              <div class="play-pic-box">
                <img :src="item.picUrl" />
                <div class="music-play-count"><Icon type="ios-headset-outline" />{{ item.playCount > 10000 ? (item.playCount / 10000).toFixed(0) + '万' : (item.playCount.toFixed(0) + '人') }}</div>
              </div>
              <!--<p>推荐理由：{{ item.copywriter }}</p>-->
              <p class="play-name">{{ item.name }}</p>
            </Col>
          </Row>
        </div>

        <div class="recommend-item">
          <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />推荐MV<span class="check-more">更多&gt;</span></div>
          <ul class="recommend-play-list">
            <li class="recommend-play-item" v-for="item in recommendMVs" :key="item.id" @click="goPlayMV(item.id)">
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
            <li class="recommend-play-item" v-for="item in getRecommendDJs" :key="item.id" @click="">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane label="歌单" name="name2">
      </TabPane>
      <TabPane label="主播电台" name="name4">
      </TabPane>
      <TabPane label="排行榜" name="name5">
      </TabPane>
    </Tabs>
    <div class="bottom-music-box">
      <current-music></current-music>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import currentMusic from '../../components/currentMusic';
  export default {
      mounted() {
          this.getBanners();
          this.getDailyRecomments();
          this.getRecommendMVs();
          this.getPrivateContents();
          this.g
        etRecommendDJs();
      },
      data() {
          return {
              banners: [],
            recommendMusic: [],
            recommendMVs: [],
            recommendDJs: [],
            privateContents: []
          }
      },
    components: {
      currentMusic
    },
    methods: {
          getBanners: function() {
              var vm = this;
              service.getBanner().then(function(res) {
                  console.log(res);
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
           console.log(res);
           if(res.code == 200) {
               vm.recommendMusic = res.result;
             vm.recommendMusic.length = 9;
           }
        });
      },
      getRecommendMVs: function() {
        let vm = this;
        service.getRecommendMV().then(function (res) {
          console.log(res);
          if(res.code == 200) {
              vm.recommendMVs = res.result;
          }
        })
      },
      getPrivateContents: function () {
        let vm = this;
        service.getPrivateContent().then(function(res) {
            console.log(res);
            if(res.code == 200) {
                vm.privateContents = res.result;
            }
        })
      },
      getRecommendDJs: function() {
              let vm = this;
              service.getRecommendDJ().then(function (res) {
                console.log(res);
                if(res.code == 200) {
                    vm.recommendDJs = res.result;
                }
              });
      },
      goPlayMusic: function(id) {
              this.$router.push({path: '/playMusic', query: { id: id }});
      },
      goPlayMV: function(id) {
              this.$router.push({path: '/playMV', query: { id: id }});
      }
    }
  }
</script>

<style scoped>
  .recommend-play-list {
    clear: both;
    text-align: left;
  }
  .recommend-play-item img {
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
    right: 0;
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
</style>
