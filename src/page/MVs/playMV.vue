<template>
  <div class="app-content">
    <video :src="videoUrl" controls></video>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.playMV();
      },
      data() {
          return {
              videoUrl: ''
          }
      },
    methods: {
          playMV: function() {
              let vm = this;
              let id = vm.$route.query.id;
              if(id) {
                service.getMVUrl(id).then(function(res) {
                  console.log(res);
                  vm.videoUrl = res.data.url;
                })
              }
          }
    }
  }
</script>

<style scoped>
  video {
    max-width: 100%;
  }
</style>
