<template>
  <div class="app-content">
    <Row :gutter="16">
      <Col span="8" v-for="item in singers" :key="item.id">
        <div class="hot-singer-item" @click="getArtistPlay(item.id)">
          <img :src="item.picUrl" />
          <p>{{ item.name }}</p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      data() {
          return {
              singers: []
          }
      },
      mounted() {
          this.getHotSinger();
      },
    methods: {
          getHotSinger: function() {
              var vm = this;
              service.getHotSinger().then(function(res) {
                  console.log(res);
                  vm.singers = res.artists;
              });
          },
      getArtistPlay: function(id) {
        this.$router.push({path: '/artistPlay', query: { id: id }});
      }
    }
  }
</script>

<style scoped>
  .hot-singer-item img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
