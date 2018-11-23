<template>
  <div class="app-content">
    <div class="mv-info-box">
      <Row class="mv-info-content">
        <Col :span="6">
        <img :src="mvInfo.cover" />
        </Col>
        <Col :span="18" class="mv-detail-box">
        <div class="artist-name">{{ mvInfo.artists["0"].name }} - {{ mvInfo.name }}</div>
        <div>{{ mvInfo.briefDesc }}</div>
        <!--<div>{{ mvInfo.desc.length > 70 ? mvInfo.desc.substr(0,69) + '...' : mvInfo.desc }}</div>-->
        </Col>
      </Row>
    </div>
    <video :src="videoUrl" controls></video>
    <div class="similar-mv-box">
      <div class="similar-title">相似MV</div>
      <div class="similar-mv-list">
        <div class="similar-mv-item" v-for="item in similarMVs" :key="item.id">
          <Row class="mv-info-content">
            <Col :span="6">
            <img :src="item.cover" />
            <div class="duration">{{ formatterDuration(parseInt(item.duration) / 1000) }}</div>
            </Col>
            <Col :span="18" class="mv-detail-box">
            <div class="artist-name">{{ item.artists["0"].name }} - {{ item.name }}</div>
            <div>{{ item.briefDesc }}</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  export default {
      mounted() {
        let id = this.$route.query.id;
        this.playMV(id);
        this.getMVInfo(id);
        this.getSimilarMV(id);
      },
      data() {
          return {
              mvInfo: {},
              videoUrl: '',
            similarMVs: []
          }
      },
    methods: {
          getMVInfo: function (mvId) {
            let vm = this;
            service.getMVDetail(mvId).then(function (res) {
              console.log(res);
              if(res.code == 200) {
                  vm.mvInfo = res.data;
              }
            })
          },
          playMV: function(id) {
              let vm = this;
              if(id) {
                service.getMVUrl(id).then(function(res) {
                  console.log(res);
                  vm.videoUrl = res.data.url;
                })
              }
          },
      getSimilarMV: function (id) {
        let vm = this;
        service.getSimilarMV(id).then(function (res) {
          console.log(res);
          if(res.code == 200) {
              vm.similarMVs = res.mvs;
          }
        })
      },
      formatterDuration: function (duration) {
              console.log(duration);
        return util.formatterDuration(duration);
      }
    }
  }
</script>

<style scoped>
  video {
    max-width: 100%;
  }
  .mv-info-box {
    padding: 1rem;
  }
  .mv-info-content {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #999;
  }
  .mv-detail-box {
    padding-left: 1rem;
  }
  .mv-info-content .artist-name {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .similar-mv-box {
    font-size: 2rem;
    margin: 1rem 0;
  }
  .duration {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2px 5px;
    color: #fff;
    background: linear-gradient(left,rgba(9,9,9,0.2),rgba(3,3,3,0.8));
  }
</style>
