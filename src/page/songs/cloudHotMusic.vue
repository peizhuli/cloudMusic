<template>
  <div class="app-content">
    <div class="cloud-hot-music-list">
      <div class="cloud-hot-music-item" v-for="item in cloudHotMusic" :key="item.id" @click="$router.push({ path: '/playMusic', query: { id: item.id } })">
        <Row class="cloud-hot-music-content">
          <Col span="8">
            <img :src="item.al.picUrl" />
          </Col>
          <Col span="16" class="hot-music-info">
            <div>
              {{ item.name }}
              <span v-if="item.alia.length">{{ item.alia[0] }}</span>
            </div>
            <div>{{ item.ar[0].name }}</div>
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
          this.getCloudHotMusic();
      },
      data() {
          return {
              cloudHotMusic: []
          }
      },
    methods: {
          getCloudHotMusic: function () {
              let vm = this;
              service.getCloudHotMusic().then(function (res) {
                console.log(res);
                vm.cloudHotMusic = res.playlist.tracks;
              })
          }
    }
  }
</script>

<style scoped>
  .cloud-hot-music-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 2;
  }
  .hot-music-info {
    padding-left: 2rem;
  }
  .hot-music-info > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
