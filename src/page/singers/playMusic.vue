<template>
  <div class="app-content">
    <div class="playing-audio-box">
      <div class="audio-pic-box" @click="showLrc()">
        <img :src="musicInfo.al.picUrl" />
      </div>
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
    <Row>
      <Col span="3">
        <span>{{ playTime }}</span>
      </Col>
      <Col span="18">
        <Slider :value="currentTime" :min="0" :max="maxTime" :tip-format="hideFormat" @on-change="slideMusicTime"></Slider>
      </Col>
      <Col span="3">
        <span>{{ duration }}</span>
      </Col>
    </Row>
    <audio id="audio" :src="playUrl" style=""></audio>

    <div class="play-action-box">
      <Icon type="ios-skip-backward-outline" size="40" color="#d6413d"/>
      <Icon :type="IsPlay ? 'ios-pause-outline' : 'ios-play-outline'" size="40" color="#d6413d" @click="togglePlay()" />
      <!--<Icon type="md-heart-outline" size="30" color="d6413d" />-->
      <!--<Icon type="ios-pause-outline" />-->
      <Icon type="ios-skip-forward-outline" size="40" color="#d6413d" />
      <Icon type="md-more" size="40" />
    </div>

    <lrc :lrcList="lyric" :currentTime="currentTime" @hideLrc="IsShowLrc = false" v-if="IsShowLrc"></lrc>
  </div>
</template>

<script>
  import util from '../../utils/util';
  import service from '../../service/service'
  import lrc from '../../components/lrc';
  export default {
      data() {
          return {
            playUrl: '',
            lyric: [],
            hotComments: [],
            comments: [],
            musicId: '',
            currentTime: 0,
            maxTime: 0,
            duration: 0,
            playTime: '00:00',
            IsPlay: false,
            musicInfo: {},
            IsShowLrc: false
          }
      },
    components: {
      lrc
    },
    mounted() {
      let audio = document.getElementById('audio');
      this.musicId = this.$route.query.id;
      this.getMusicDetail(this.musicId);
        this.getMusicUrl(this.musicId);
        this.getMusicLyric(this.musicId);
        this.getMusicComment(this.musicId);
        this.getMusicDuration();
    },
    methods: {
      getMusicDetail: function (id) {
          let vm = this;
          service.getSongDetail(id).then(function (res) {
            console.log(res);
            vm.musicInfo = res.songs[0];
          })
      },
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
                          sec: util.timeToSec(sec),
                          content: content,
                          time: sec.substr(0,5)
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
          let vm = this;
          audio.addEventListener('canplay',function () {
            let duration = audio.duration;
            vm.maxTime = parseInt(duration);
            duration = util.formatterDuration(duration);
            vm.duration = duration;
          });
          audio.addEventListener('ended',function () {
              vm.IsPlay = false;
              audio.pause();
              vm.currentTime = 0;
              vm.playTime = '00:00';
          })
      },
      togglePlay: function () {
        let vm = this;
        vm.IsPlay = !vm.IsPlay;
        vm.IsPlay ? audio.play() : audio.pause();
          audio.addEventListener('timeupdate',function () {
//            if(!audio.paused) {
              vm.currentTime = audio.currentTime;
              vm.playTime = util.formatterDuration(audio.currentTime);
//            }
          });
      },
      slideMusicTime: function(value) {
        audio.currentTime = this.currentTime = value;
      },
      toggleLikeMusic: function (id) {
        let vm = this;
        service.likeMusic(id).then(function (res) {
          console.log(res);
        })
      },
      showLrc: function () {
        this.IsShowLrc = true;
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
      },
      hideFormat () {
        return null;
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
  .play-action-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 5rem;
    /*text-align: center;*/
  }
  .audio-pic-box {
    width: 70%;
    margin: 5% auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .audio-pic-box > img {
    max-width: 100%;
  }
</style>
