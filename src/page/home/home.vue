<template>
  <div>
    <div class="search-box">
      <Input placeholder="search text" style="width: auto">
        <Icon type="ios-search" slot="suffix" />
      </Input>
    </div>
    <Carousel :autoplay="true" :loop="true" :autoplay-speed="2000">
      <CarouselItem v-for="item in banners" :key="item.url">
        <div class="demo-carousel">
          <img :src="item.picUrl" @click="goTarget(item.targetId)" />
        </div>
      </CarouselItem>
    </Carousel>

    <p>个性推荐</p>
    <div>推荐歌单</div>
    <ul class="recommend-play-list">
      <li class="recommend-play-item" v-for="item in recommendMusic" :key="item.id" @click="goPlayMusic(item.id)">
        <img :src="item.picUrl" />
        <p>推荐理由：{{ item.copywriter }}</p>
        <p>{{ item.name }}</p>
        <p>播放次数：{{ item.playCount }}</p>
      </li>
    </ul>

    <div>推荐MV</div>
    <ul class="recommend-play-list">
      <li class="recommend-play-item" v-for="item in recommendMVs" :key="item.id" @click="goPlayMV(item.id)">
        <img :src="item.picUrl" />
        <p>推荐理由：{{ item.copywriter }}</p>
        <p>{{ item.name }}</p>
        <p>播放次数：{{ item.playCount }}</p>
      </li>
    </ul>

    <div>独家放送</div>
    <ul class="recommend-play-list">
      <li class="recommend-play-item" v-for="item in privateContents" :key="item.id" @click="">
        <img :src="item.picUrl" />
        <p>推荐理由：{{ item.copywriter }}</p>
        <p>{{ item.name }}</p>
      </li>
    </ul>

    <div>推荐电台</div>
    <ul class="recommend-play-list">
      <li class="recommend-play-item" v-for="item in getRecommendDJs" :key="item.id" @click="">
        <img :src="item.picUrl" />
        <p>推荐理由：{{ item.copywriter }}</p>
        <p>{{ item.name }}</p>
      </li>
    </ul>
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
            privateContents: []
          }
      },
    methods: {
          getBanners: function() {
              var vm = this;
              service.getBanner().then(function(res) {
                  console.log(res);
                  vm.banners = res.banners;
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

<style scope>
  .recommend-play-list {
    clear: both;
    text-align: left;
  }
  .recommend-play-item {
    float: left;
    width: 33.3%;
  }
  .recommend-play-item img {
    width: 100%;
  }
</style>
