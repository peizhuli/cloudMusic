<template>
  <div class="app-content">
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
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
    mounted() {
      this.getHotPlayType();
      this.getWellChosenPlay();
    },
    data() {
      return {
        hotPlayType: [],
        wellChosenPlay: [],
      }
    },
    methods: {
      getHotPlayType: function () {
        let vm = this;
        service.getHotPlayList().then(function (res) {
          vm.hotPlayType = res.tags;
        })
      },
      getWellChosenPlay: function () {
        let vm = this;
        service.getWellChosenList().then(function (res) {;
          vm.wellChosenPlay = res.playlists;
        })
      }
    }
  }
</script>

<style scoped>

</style>
