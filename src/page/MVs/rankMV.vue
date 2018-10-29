<template>
  <div>
    <div class="" v-for="item in topMVs" :key="item.id" @click="playMV(item.id)">
      <img :src="item.cover" />
      <p>{{ item.name }}</p>
      <p>播放次数：{{ item.playCount }}</p>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getTopMV();
      },
      data() {
          return {
              topMVs: []
          }
      },
    methods: {
          getTopMV: function() {
              let vm = this;
              service.getTopMV(20,0).then(function(res) {
                  console.log(res);
                  vm.topMVs = res.data;
              })
          },
      playMV: function(id) {
              this.$router.push({path: '/playMV', query: { id: id }});
      }
    }
  }
</script>
