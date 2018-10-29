<template>
  <div>
    <audio :src="playUrl" controls></audio>
    <p>{{ lyric }}</p>
  </div>
</template>

<script>
  import service from '../../service/service'
  export default {
      data() {
          return {
            playUrl: '',
            lyric: ''
          }
      },
      mounted() {
          this.getMusicUrl();
          this.getMusicLyric();
      },
    methods: {
          getMusicUrl: function() {
              let vm = this;
              let id = vm.$route.query.id;
              if(id) {
                  service.getPlayUrl(id).then(function(res) {
                      console.log(res);
                      vm.playUrl = res.data["0"].url;
                  })
              }
          },
      getMusicLyric: function() {
        let vm = this;
        let id = vm.$route.query.id;
        if(id) {
          service.getIcy(id).then(function(res) {
              console.log(res);
              vm.lyric = res.lrc.lyric;
          })
        }
      }
    }
  }
</script>
