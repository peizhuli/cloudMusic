<template>
  <div class="app-content">
    <div class="dj-info-box">
      <div class="dj-name-box">
        <Avatar :src="DJDetailInfo.dj.avatarUrl"></Avatar>
        <span>{{ DJDetailInfo.name }}</span>
      </div>
      <div class="audio-pic-box">
        <img :src="DJDetailInfo.picUrl" />
      </div>
      <!--<Row class="right-content-box">-->
        <!--<Col span="6">-->
          <!--<img :src="DJDetailInfo.picUrl" />-->
        <!--</Col>-->
        <!--<Col span="18" class="right-info-box">-->
          <!--<div class="user-info">-->
            <!--<div>{{ DJDetailInfo.name }}</div>-->
            <!--<Avatar :src="DJDetailInfo.dj.avatarUrl"></Avatar>-->
            <!--<span>{{ DJDetailInfo.dj.nickname }} - {{ DJDetailInfo.dj.signature }}</span>-->
          <!--</div>-->
          <!--<div class="desc">{{ DJDetailInfo.desc }}</div>-->
        <!--</Col>-->
      <!--</Row>-->
    </div>
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
    <audio ref="DJ" :src="DJUrl" />
    <div class="play-action-box">
      <Icon type="ios-shuffle" size="40" color="#d6413d" />
      <Icon type="ios-skip-backward-outline" size="40" color="#d6413d"/>
      <Icon :type="IsPlay ? 'ios-pause-outline' : 'ios-play-outline'" size="40" color="#d6413d" @click="togglePlay()" />
      <Icon type="ios-skip-forward-outline" size="40" color="#d6413d" />
      <Icon type="ios-options" size="40" @click="" />
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  export default {
      mounted() {
          let id = this.$route.query.id;
          let DJ = this.$refs.DJ;
          this.getDJDetail(id);
          this.getMusicDuration();
      },
      data() {
          return {
              DJDetailInfo: {},
              DJUrl: '',
              currentTime: 0,
              maxTime: 0,
              duration: 0,
              playTime: '00:00',
              IsPlay: false
          }
      },
    methods: {
      getDJDetail: function (id) {
        let vm = this;
        service.getDJDetail(id).then(function (res) {
          vm.DJDetailInfo = res.djRadio;
          vm.$nextTick(function() {
              vm.getDJUrl(vm.DJDetailInfo.id);
          })
        })
      },
      getDJUrl: function (id) {
          let vm = this;
          service.getDJUrl(id).then(function (res) {
            vm.DJUrl = res.data["0"].url;
          })
      },
      getMusicDuration: function() {
        let vm = this;
        DJ.addEventListener('canplay',function () {
          let duration = DJ.duration;
          console.log(duration);
          vm.maxTime = parseInt(duration);
          duration = util.formatterDuration(duration);
          vm.duration = duration;
        });
        DJ.addEventListener('ended',function () {
          //根据播放类型（列表循环、随机...），获取下一首
          vm.IsPlay = false;
          DJ.pause();
          vm.currentTime = 0;
          vm.playTime = '00:00';
        })
      },
      togglePlay: function () {
        let vm = this;
        vm.IsPlay = !vm.IsPlay;
        vm.IsPlay ? DJ.play() : DJ.pause();
        DJ.addEventListener('timeupdate',function () {
          vm.currentTime = DJ.currentTime;
          vm.playTime = util.formatterDuration(DJ.currentTime);
        });
      },
      slideMusicTime: function(value) {
        DJ.currentTime = this.currentTime = value;
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
  }
  .audio-pic-box {
    width: 70%;
    margin: 5% auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .play-action-box i {
    cursor: pointer;
  }
  .audio-pic-box > img {
    max-width: 100%;
  }
  .play-list-box {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99;
    bottom: -100%;
    transition: all 0.7s;
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
</style>
