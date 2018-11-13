<template>
  <div class="app-content">
    <div class="playing-audio-box">

    </div>
    <!--<p>{{ lyric }}</p>-->
    <div class="comments-box">
      <div class="comment-item" v-for="item in hotComments" :key="item.commentId">
        <Row>
          <Col span="4" class="avatar-box">
            <!--<img :src="item.user.avatarUrl" />-->
          <Avatar :src="item.user.avatarUrl"></Avatar>
          </Col>
          <Col span="20" class="comment-content">
            <div class="nickname">{{ item.user.nickname }}</div>
            <div>{{ item.content }}</div>
          </Col>
        </Row>
      </div>
    </div>
    <Row class="song-action-box">
      <Col span="6">
        <Icon type="ios-heart-outline" size="30" @click="toggleLikeMusic(musicId)" />
      </Col>
      <Col span="6">
        <Icon type="ios-download-outline" size="30" />
      </Col>
      <Col span="6">
        <Badge :count="comments.length">
          <Icon type="ios-text-outline" size="30" />
        </Badge>
      </Col>
      <Col span="6">
        <Icon type="md-share" size="30" />
      </Col>
    </Row>
    <audio :src="playUrl" controls></audio>
  </div>
</template>

<script>
  import service from '../../service/service'
  export default {
      data() {
          return {
            playUrl: '',
            lyric: '',
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
                  })
              }
          },
      getMusicLyric: function(id) {
        let vm = this;
        if(id) {
          service.getIcy(id).then(function(res) {
              console.log(res);
              if(res.code == 200) {
                  res.nolyric ? vm.lyric = '' : vm.lyric = res.lrc.lyric;
              }
          })
        }
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
  .comment-item {
    margin-top: 1rem;
  }
  .avatar-box {
    text-align: right;
  }
  .comment-content {
    padding: 0 1%;
  }
</style>
