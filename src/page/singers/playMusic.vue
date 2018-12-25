<template>
  <div class="app-content">
    <div class="playing-audio-box">
      <div class="playing-bg-box">
        <img :src="musicInfo.al ? musicInfo.al.picUrl : ''" />
      </div>
      <div :class="{'audio-pic-box': true, 'playing': IsPlay, 'pause': !IsPlay }" @click="showLrc()">
        <img ref="albumImg" id="albumImg" :src="musicInfo.al.picUrl" />
      </div>
    </div>
    <!--<p>{{ lyric }}</p>-->
    <Row class="song-action-box">
      <Col span="6">
        <Icon :type="IsLike ? 'ios-heart' : 'ios-heart-outline'" :color="IsLike ? '#d6413d' : ''" size="30" @click="toggleLikeMusic()" />
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
      <Icon type="ios-shuffle" size="40" color="#d6413d" />
      <Icon type="ios-skip-backward-outline" size="40" color="#d6413d" @click.stop="preMusic()" />
      <Icon :type="IsPlay ? 'ios-pause-outline' : 'ios-play-outline'" size="40" color="#d6413d" @click="togglePlay()" />
      <Icon type="ios-skip-forward-outline" size="40" color="#d6413d" @click.stop="nextMusic()" />
      <!--<Icon type="md-more" size="40" @click="getUserPlayLists" />-->
      <Icon type="ios-options" size="40" @click="getUserPlayLists" />
    </div>
    <div :class="{playListBox: true, show: IsShowPlayList}" ref="playListBox">
      <div class="list-padding" @click="hidePlayList()"></div>
      <div class="play-list">
        <div class="play-item" v-for="item in allPlayList" :key="item.song.id">
          <Row class="">
            <Col span="22" @click="playSpecificMusic(item.song.id)">
            <div class="">{{ item.song.name }} - {{ item.song.ar["0"].name }}</div>
            <div v-if="item.song.alia.length" style="color: #999; font-size: 1rem;">{{ item.song.alia["0"] }}</div>
            </Col>
            <Col span="2">
            <Icon type="ios-trash-outline" size="30" color="#d6413d" @click="delPlayMusic(item.song.al.id, item.song.id)" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <lrc :lrcList="lyric" :currentTime="currentTime" @hideLrc="IsShowLrc = false" v-if="IsShowLrc"></lrc>
  </div>
</template>

<script>
  //在切换其他路由时，保持当前音乐列表播放，页面不显示
  //播放列表获取， 播放类型： 循环，随机等
  import util from '../../utils/util';
  import {mapState, mapMutations} from 'vuex'
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
            IsShowPlayList: false,
            musicInfo: {},
            IsShowLrc: false,
            allPlayList: [],
            IsLike: false,
            imgRotateAngle: 0
          }
      },
    components: {
      lrc
    },
    computed: {
      ...mapState(['likeMusicList', 'playRecords'])
    },
    mounted() {
      this.musicId = this.$route.query.id || this.$store.state.currentMusicId;
      this.allPlayList = this.playRecords.allData;
      this.initPlay();
    },
    methods: {
      ...mapMutations(['SET_CURRENT_MUSIC_ID', 'SET_LIKE_MUSIC_LIST']),
      initPlay: function() {
        this.getMusicDetail(this.musicId);
        this.getMusicUrl(this.musicId);
        this.getMusicLyric(this.musicId);
        this.getMusicComment(this.musicId);
        this.getMusicDuration();
        vm.imgRotateAngle = 0;
        this.togglePlay();
      },
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
                      vm.playUrl = res.data["0"].url;
                      vm.$nextTick(function () {
                        vm.getMusicDuration();
                      })
                  });
                  vm.SET_CURRENT_MUSIC_ID(id);
                  vm.likeMusicList.map(function (item) {
                    if(item == id) {
                        vm.IsLike = true;
                    }
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
          })
        }
      },
      getMusicDuration: function() {
          let vm = this;
        let audio = document.getElementById('audio');
        audio.addEventListener('canplay',function () {
            let duration = audio.duration;
            vm.maxTime = parseInt(duration);
            duration = util.formatterDuration(duration);
            vm.duration = duration;
          });
          audio.addEventListener('ended',function () {
              //根据播放类型（列表循环、随机...），获取下一首
              vm.IsPlay = false;
              audio.pause();
              vm.currentTime = 0;
              vm.playTime = '00:00';
          })
      },
      togglePlay: function () {
        let vm = this;
        let audio = document.getElementById('audio');
        vm.IsPlay = !vm.IsPlay;
        vm.IsPlay ? audio.play() : audio.pause();
        let albumImg = document.getElementById('albumImg');
          audio.addEventListener('timeupdate',function () {
//            if(!audio.paused) {
              vm.currentTime = audio.currentTime;
              vm.playTime = util.formatterDuration(audio.currentTime);
              vm.imgRotateAngle = vm.imgRotateAngle < 360 ? vm.imgRotateAngle + 3 : 0;
            albumImg.style.transform = 'rotate(' + vm.imgRotateAngle + 'deg)';
//            }
          });
      },
      slideMusicTime: function(value) {
        let audio = document.getElementById('audio');
        audio.currentTime = this.currentTime = value;
      },
      toggleLikeMusic: function () {
        let vm = this;
        service.likeMusic(!vm.IsLike, vm.musicId).then(function (res) {
          //更新state
          if(res.code == 200) {
            alert(vm.IsLike ? '取消喜欢' : '已喜欢');
            let currentLikeMusicList = vm.likeMusicList;
            vm.IsLike ? currentLikeMusicList.splice(currentLikeMusicList.indexOf(vm.musicId), 1) : currentLikeMusicList.push(vm.musicId);
            vm.SET_LIKE_MUSIC_LIST(currentLikeMusicList);
            vm.IsLike = !vm.IsLike;
          }

        })
      },
      showLrc: function () {
        this.IsShowLrc = true;
      },
      getMusicComment: function (id) {
        let vm = this;
        service.getMusicComment(id).then(function (res) {
          if(res.code == 200) {
            vm.hotComments = res.hotComments;
            vm.comments = res.comments;
          }
        })
      },
      hideFormat () {
        return null;
      },
      getUserPlayLists: function () {
        let vm = this;
        service.getUserPlayLists(vm.$store.state.user.profile.userId, 0).then(function (res) {
          if(res.code == 200) {
            vm.allPlayList = res.allData;
            vm.IsShowPlayList = true;
          }
        })
      },
      playSpecificMusic: function(id) {
        this.musicId = id;
        this.IsShowPlayList = false;
        this.initPlay();
      },
      hidePlayList: function() {
        this.IsShowPlayList = false;
      },
      delPlayMusic: function (id, str) {
        let vm = this;
        service.playListOparation('del', id, str).then(function (res) {
          console.log(res);
        })
      },
      nextMusic: function () {
        let vm = this;
        let playIndex = 0;
        vm.IsPlay = false;
        vm.allPlayList.map(function(item, index) {
            if(vm.musicId == item.song.id) {
              playIndex = index == vm.allPlayList.length - 1 ? 0 : index + 1;
            }
        });
        vm.musicId = vm.allPlayList[playIndex].song.id;
        vm.initPlay();
      },
      preMusic: function () {
        let vm = this;
        let playIndex = 0;
        vm.IsPlay = false;
        vm.allPlayList.map(function(item, index) {
          if(vm.musicId == item.song.id) {
            playIndex = index == 0 ? vm.allPlayList.length - 1 : index - 1;
          }
        });
        vm.musicId = vm.allPlayList[playIndex].song.id;
        vm.initPlay();
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
  .playing-audio-box {
    width: 100%;
    height: 80%;
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
  .playing-bg-box {
    position: absolute;
    width: 300%;
    height: 300%;
    top: -50%;
    left: -50%;
    z-index: -1;
    filter: blur(30px);
    -webkit-filter: blur(30px);
  }
  .playing-bg-box img {
    width: 100%;
    height: 100%;
  }
  .audio-pic-box {
    width: 60%;
    margin: 5% auto;
  }
  .audio-pic-box.playing {
    animation: rotate 30s linear infinite;
  }
  .audio-pic-box.pause {
    animation-play-state: paused;
  }
  .play-action-box i {
    cursor: pointer;
  }
  .audio-pic-box > img {
    position: relative;
    border-radius: 50%;
  }
  .playListBox {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99;
    top: 100%;
    transition: all 0.7s;
  }
  .playListBox.show {
    top: 0;
  }
  .list-padding {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play-list {
    width: 100%;
    height: 60%;
    padding: 2rem;
    font-size: 1.2rem;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;
  }
  .play-item {
    margin-bottom: 1rem;
  }
  #albumImg {
    transition: all 0.1s;
  }
</style>
