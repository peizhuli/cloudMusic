<template>
  <div class="app-content">
    <div class="playing-audio-box">

    </div>
    <!--<p>{{ lyric }}</p>-->

    <Row class="song-action-box">
      <Col span="6">
        <Icon type="ios-heart-outline" size="30" @click="toggleLikeMusic(musicId)" />
      </Col>
      <Col span="6">
        <Icon type="ios-download-outline" size="30" />
      </Col>
      <Col span="6">
        <Badge :count="comments.length">
          <Icon type="ios-text-outline" size="30" @click="$router.push({path: '/Comments', query: { type: 0, id: $route.query.id }})" />
        </Badge>
      </Col>
      <Col span="6">
        <Icon type="md-share" size="30" />
      </Col>
    </Row>
    <audio id="audio" :src="playUrl" controls></audio>
    <div class="play-action-box">
      <Icon type="ios-skip-backward-outline" size="30" color="d6413d"/>
      <Icon type="ios-play-outline" size="30" color="d6413d" />
      <Icon type="md-heart-outline" size="30" color="d6413d" />
      <!--<Icon type="ios-pause-outline" />-->
      <Icon type="ios-skip-forward-outline" size="30" color="d6413d" />
      <Icon type="md-more" size="30" color="d6413d" />
    </div>
  </div>
</template>

<script>
  import util from '../../utils/util';
  import service from '../../service/service'
  export default {
      data() {
          return {
            playUrl: '',
            lyric: [],
            hotComments: [],
            comments: [],
            musicId: ''
          }
      },
    mounted() {
        this.musicId = this.$route.query.id;
        this.getMusicUrl(this.musicId);
        this.getMusicLyric(this.musicId);
        this.getMusicComment(this.musicId);
    },
    methods: {
      getMusicUrl: function(id) {
              let vm = this;
              if(id) {
                  service.getPlayUrl(id).then(function(res) {
                      console.log(res);
                      vm.playUrl = res.data["0"].url;
                      vm.$nextTick(function () {
                        vm.getMusicDuration();
                      })
                  })
              }
          },
      getMusicLyric: function(id) {
        let vm = this;
        if(id) {
          service.getIcy(id).then(function(res) {
              if(res.code == 200) {
                  if(!res.nolyric) {
                    let lrc = res.lrc.lyric.split('\n');
                    lrc.map(function (item) {
                        let sec = item.substr(1, item.indexOf(']') - 1);
                        let content = item.substr(item.indexOf(']') + 1);
                      let obj = {
                          sec: sec,
                          content: content
                      };
                      vm.lyric.push(obj);
                    });
                  }
              }
              console.log(vm.lyric);
          })
        }
      },
      getMusicDuration: function() {
          let audio = document.getElementById('audio');
          audio.addEventListener('canplay',function () {
            let duration = audio.duration;
            duration = util.formatterDuration(duration);
          });
          audio.addEventListener('timeupdate',function () {
//            console.log(util.formatterDuration(audio.currentTime));
          })
      },
      toggleLikeMusic: function (id) {
        let vm = this;
        service.likeMusic(id).then(function (res) {
          console.log(res);
        })
      },
      getMusicComment: function (id) {
        let vm = this;
        service.getMusicComment(id).then(function (res) {
          console.log(res);
          if(res.code == 200) {
            vm.hotComments = res.hotComments;
            vm.comments = res.comments;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .playing-audio-box {
    width: 100%;
    height: 70%;
  }
  .song-action-box {
    text-align: center;
  }
</style>
