<template>
  <div class="top-list-box">
    <div class="top-music-item" v-for="item in topMusicList" :key="item.id" @click="$router.push({path: '/topList', query: { name: item.name }})">
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
</template>

<script>
  import service from '../../service/service';
  export default {
    mounted() {
      this.getTopMusicList();
    },
    data() {
      return {
        topMusicList: [],
      }
    },
    methods: {
      getTopMusicList: function () {
        let vm = this;
        service.getMusicTopBrief().then(function (res) {
          vm.topMusicList = res.list;
        })
      }
    }
  }
</script>
<style scoped>
  .update-frequency {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 2rem;
    color: #fff;
  }
  .music-top-content {
    padding: 5%;
    font-size: 2rem;
    line-height: 2;
    text-align: left;
  }
  .music-top-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
