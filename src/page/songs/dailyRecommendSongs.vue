<template>
  <div class="app-content">
    <div class="recommend-list">
      <div class="recommend-item" v-for="item in recommends" :key="item.id" @click="$router.push({path: '/playMusic', query: { id: item.id }})">
        <Row class="recommend-item-content">
          <Col :xs="{span: 6}">
            <img :src="item.album.picUrl" />
          </Col>
          <Col :xs="{span: 18}">
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
  .recommend-item-content {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    line-height: 1.8;
  }
  .recommend-reason {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
