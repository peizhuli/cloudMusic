<template>
  <div>
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
      <div class="circle-border daily-recommend-music-count" @click="$router.push('/dailyRecommendSongs')">
        20
      </div>
      <p>每日歌曲推荐</p>
      </Col>
      <Col span="8">
      <div class="circle-border" @click="$router.push('/cloudHotMusic')">
        <Icon type="ios-podium-outline" color="#d6413d" />
      </div>
      <p>云音乐热歌榜</p>
      </Col>
    </Row>

    <div class="recommend-item">
      <div class="recommend-title"><Icon type="md-calendar" size="30" color="#d6413d" />推荐歌单<span class="check-more">更多&gt;</span></div>
      <Row class="recommend-play-list" :gutter="24" type="flex" justify="center">
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
      <Row class="right-content-box" v-for="item in recommendDJs" :key="item.id" @click="$router.push({path: '/DJDetail', query: { id: item.id }})">
        <Col span="6">
        <img :src="item.picUrl" />
        </Col>
        <Col span="18" class="right-info-box">
          <p>{{ item.name }}</p>
          <p>{{ item.copywriter }}</p>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
    mounted() {
      this.getBanners();
      this.getDailyRecomments();
      this.getRecommendMVs();
      this.getPrivateContents();
      this.getRecommendDJs();
    },
    data() {
      return {
        banners: [],
        recommendMusic: [],
        recommendMVs: [],
        recommendDJs: [],
        privateContents: [],
      }
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
            vm.recommendMusic = res.result.splice(0,6);
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
            vm.recommendDJs = res.result.splice(0,3);
          }
        });
      }
    }
  }
</script>

<style scoped>
  .recommend-play-list {
    clear: both;
    text-align: left;
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
