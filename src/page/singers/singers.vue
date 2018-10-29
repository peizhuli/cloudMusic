<template>
  <div>
    <div v-for="item in singers" :key="item.id" @click="getArtistPlay(item.id)">
      <img :src="item.picUrl" />
      <p>{{ item.name }}</p>
    </div>
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
