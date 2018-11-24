<template>
  <div class="app-content">
    <div class="recommend-list">
      <div v-for="item in recommends" :key="item.id" @click="$router.push({path: '/playMusic', query: { id: item.id }})">
        <Row class="right-content-box">
          <Col span="6">
            <img :src="item.album.picUrl" />
          </Col>
          <Col span="18" class="right-info-box">
            <div>{{ item.name }}</div>
            <div class="recommend-reason">{{ item.reason }}</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getDailyRecommendSongs();
      },
    data() {
          return {
              recommends: []
          }
    },
    methods: {
      getDailyRecommendSongs: function () {
        let vm = this;
        service.getDailyRecommendSongs().then(function (res) {
          console.log(res);
          if(res.code == 200) {
            vm.recommends = res.recommend;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .recommend-reason {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
