<template>
  <div class="app-content">
    <!--<div class="mv-info-box">-->
      <!--<Row class="mv-info-content">-->
        <!--<Col :span="6">-->
        <!--<img :src="mvInfo.cover" />-->
        <!--</Col>-->
        <!--<Col :span="18" class="mv-detail-box">-->
        <!--<div class="artist-name">{{ mvInfo.artists["0"].name }} - {{ mvInfo.name }}</div>-->
        <!--<div>{{ mvInfo.briefDesc }}</div>-->
        <!--&lt;!&ndash;<div>{{ mvInfo.desc.length > 70 ? mvInfo.desc.substr(0,69) + '...' : mvInfo.desc }}</div>&ndash;&gt;-->
        <!--</Col>-->
      <!--</Row>-->
    <!--</div>-->
    <video :src="videoUrl" controls></video>
    <div class="similar-mv-box">
      <Tabs value="song">
        <TabPane label="MV详情" name="MVDetail">
          <div class="mv-info-list">
            <div class="mv-info-item">
              <div>{{ mvInfo.name }}</div>
              <div>{{ mvInfo.artists ? mvInfo.artists["0"].name : '' }}</div>
            </div>
            <div class="mv-info-item">
              <div>收藏数：{{ mvInfo.likeCount }}</div>
            </div>
          </div>
          <div class="mv-info-list">
            <div class="mv-info-item">
              <div>播放数：{{ mvInfo.playCount }}</div>
              <div>发行时间：{{ mvInfo.publishTime }}</div>
            </div>
          </div>
        </TabPane>
        <TabPane label="MV评论" name="MVComment">
          <div v-if="hotComments.length" class="comment-item" v-for="item in hotComments" :key="item.commentId">
            <i-row>
              <i-col span="4" class="avatar-box">
                <i-avatar :src="item.user ? item.user.avatarUrl : ''"></i-avatar>
              </i-col>
              <i-col span="20" class="comment-content">
                <div class="nickname">{{ item.user ? item.user.nickname : '' }}
                  <span class="float-right">
                <i-icon type="praise" :color="item.liked ? '#ff0000' : '#999'" size="24" @click="toggleLikeComment(item.liked, item.commentId)"/>
                {{ item.likedCount > 99 ? '99+' : item.likedCount }}
              </span>
                </div>
                <div>{{ item.time | formatTime }}</div>
                <div>{{ item.content }}</div>
              </i-col>
            </i-row>
          </div>
          <div v-if="!hotComments.length">
            <p>暂无评论</p>
          </div>
        </TabPane>
        <TabPane label="相似MV" name="MVRelative">
          <div class="similar-mv-list">
            <div class="similar-mv-item" v-for="item in similarMVs" :key="item.id" @click="refreshVideo(item.id)">
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
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  export default {
      mounted() {
        this.videoId = this.$route.query.id;
        this.initVideo();
      },
      data() {
          return {
            mvInfo: {},
            videoUrl: '',
            videoId: '',
            similarMVs: [],
            hotComments: [],
            comments: [],
            currentOffset: 0
          }
      },
    methods: {
      initVideo: function () {
        this.playMV(this.videoId);
        this.getMVInfo(this.videoId);
        this.getSimilarMV(this.videoId);
        this.getMusicComment(this.videoId, this.currentOffset);
      },
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
      },
      refreshVideo: function(id) {
        this.videoId = id;
        this.initVideo();
        window.scrollTop = 0;
      },
      getMusicComment: function (id, offset) {
        let vm = this;
        service.getComment('video', id, offset).then(function (res) {
          if(res.code == 200) {
            vm.hasMore = res.more;
            vm.hotComments = vm.hotComments.concat(res.hotComments);
            vm.comments = vm.comments.concat(res.comments);
          }
        })
      },
      toggleLikeComment: function (t,commentId) {
        t = t ? 0 : 1;
        let type = this.commentType;
        let id= this.id;
        service.likeComment(t, type, id, commentId).then(function (res) {
          console.log(res);
        })
      },
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
  .mv-info-list {
    padding: 10px 0;
    border-bottom: 1px solid #999;
  }
  .mv-info-item {
    float: left;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
