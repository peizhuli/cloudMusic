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
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getBanners();
          this.getDailyRecomments();
      },
      data() {
          return {
              banners: []
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
        service.getDailyRecomment().then(function(res) {
           console.log(res);
        });
      },
    }
  }
</script>
