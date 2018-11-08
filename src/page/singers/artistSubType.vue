<template>
  <div class="app-content">
    <Row :gutter="16">
      <Col span="8" v-for="item in artistSubType" :key="item.id">
        <div @click="getArtistPlayList(item.id)">
          <img :src="item.picUrl" />
          <div>{{ item.name }}</div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          let cat = this.$route.query.type;
          this.getArtisType(cat, 20, 0)
      },
      data() {
          return {
              artistSubType: []
          }
      },
    methods: {
      getArtisType: function (cat, limit, offset) {
        let vm = this;
        service.getArtisType(cat, limit, offset).then(function (res) {
          console.log(res);
          vm.artistSubType = res.artists;
        })
      },
      getArtistPlayList: function (id) {
        this.$router.push({path: '/artistPlay', query: {id: id}})
      }
    }
  }
</script>
