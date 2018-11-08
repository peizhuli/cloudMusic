<template>
  <div class="app-content">
    <div class="mv-cover">
      <img :src="MVDetailInfo.cover" />
    </div>
    <div class="mv-info-box">
      <div>
        <span>歌手：{{ MVDetailInfo.artistName }}</span>
        <span>播放次数：{{ MVDetailInfo.playCount > 10000 ? (MVDetailInfo.playCount / 10000).toFixed(0) + '万' : MVDetailInfo.playCount + '次' }}</span>
      </div>
      <Row class="mv-action-box">
        <Col span="6" class="mv-action-box">
          <Icon type="ios-briefcase" />
          <p>{{ MVDetailInfo.likeCount }}</p>
        </Col>
        <Col span="6" class="mv-action-box">
          <Icon type="ios-chatboxes-outline" />
          <p>{{ MVDetailInfo.commentCount }}</p>
        </Col>
        <Col span="6" class="mv-action-box">
          <Icon type="ios-share-alt-outline" />
          <p>{{ MVDetailInfo.shareCount }}</p>
        </Col>
        <Col span="6" class="mv-action-box">
          <Icon type="ios-cloud-download-outline" />
          <p>下载</p>
        </Col>
      </Row>
    </div>

    <div class="relative-recommend-box">
      <div>相关推荐</div>
      <div class="relative-item" v-for="item in relativeRecommendMV" :key="item.id">
        <Row type="flex" align="middle" justify="start" class="relative-item-content">
          <Col span="8">
            <img :src="item.cover" />
          </Col>
          <Col span="16" class="relative-item-info">
            <div class="mv-name">{{ item.name }}</div>
            <div class="artist-name">{{ item.artistName }}</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          let id = this.$route.query.id;
          this.getMVDetail(id);
          this.getSimilarMV(id);
      },
    data() {
          return {
              MVDetailInfo: {},
              relativeRecommendMV: []
          }
    },
    methods: {
      getMVDetail: function (id) {
        let vm = this;
        if(id) {
          service.getMVDetail(id).then(function (res) {
            console.log(res);
            vm.MVDetailInfo = res.data;
          });
        }
      },
      getSimilarMV: function(id) {
          let vm = this;
          if(id) {
              service.getSimilarMV(id).then(function (res) {
                vm.relativeRecommendMV = res.mvs;
              })
          }
      },

    }
  }
</script>

<style scoped>
  .mv-cover {

  }
  .mv-cover img,
  .relative-item img {
    max-width: 100%;
  }
  .mv-action-box {
    text-align: center;
  }
  .relative-item-info {
    padding: 10px;
  }
  .mv-name {
    font-size: 1.4rem;
  }
</style>
