<template>
  <div class="app-content">
    <div class="similar-songs-box">
      <Row class="similar-song-info-box">
        <Col span="6">
          <img :src="recommendSong.album.picUrl" />
        </Col>
        <Col class="similar-song-content" span="18">
           <div>{{ recommendSong.name }}</div>
           <div>{{ recommendSong.artists[0].name }}</div>
        </Col>
      </Row>
    </div>
    <div class="comments-box">
      <div v-if="hotComments.length" class="comment-item" v-for="item in hotComments" :key="item.commentId">
        <Row>
          <Col span="4" class="avatar-box">
          <!--<img :src="item.user.avatarUrl" />-->
          <Avatar :src="item.user.avatarUrl"></Avatar>
          </Col>
          <Col span="20" class="comment-content">
            <div class="nickname">{{ item.user.nickname }}
              <Badge :count="item.likedCount > 99 ? '99+' : item.likedCount" class="like-music-icon"><Icon type="md-thumbs-up" :color="item.liked ? '#ff0000' : '#999'" size="24" @click="toggleLikeComment(item.liked, item.commentId)"/></Badge>
            </div>
            <div>{{ item.time | formatTime }}</div>
            <div>{{ item.content }}</div>
          </Col>
        </Row>
      </div>
      <div v-else>
        <p>暂无评论</p>
      </div>
    </div>
    <div class="comment-publish-box padBtm">
      <Input placeholder="输入评论内容..." v-model="commentContent">
        <Button slot="append" @click="publishComment()">评论</Button>
      </Input>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  import util from '../../utils/util';
  export default {
      name: 'Comment',
      mounted() {
          this.id = this.$route.query.id;
          this.commentType = this.$route.query.type;
          this.getSimilarSong(this.id);
          this.getMusicComment(this.id);
      },
      data() {
          return {
            hotComments: [],
            comments: [],
            recommendSong: {},
            commentContent: '',
            commentType: 0,
            id: ''
          }
      },
     filters: {
      formatTime: function(time) {
        return util.formatterTime(time)
      }
    },
      methods: {
        getSimilarSong: function (id) {
            let vm = this;
            service.getSimilarSongs(id).then(function (res) {
              if(res.code == 200 && res.songs.length) {
                vm.recommendSong = res.songs[0];
                console.log(vm.recommendSong);
              }
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
        },
        toggleLikeComment: function (t,commentId) {
          t = t ? 0 : 1;
          let type = this.commentType;
          let id= this.id;
          service.likeComment(t, type, id, commentId).then(function (res) {
            console.log(res);
          })
        },
        publishComment: function () {
          let t = 1;
          let type = 0;
          let id = this.$route.query.id;
          let content = this.commentContent;
          if(content != '') {
            service.comment(t, id, type, content).then(function (res) {
              console.log(res);
            })
          }
        }
      }
  }
</script>

<style scoped>
  .similar-songs-box {
    height: 20%;
  }
  .similar-song-info-box,
  .similar-song-info-box > div {
    height: 100%
  }
  .similar-song-content {
    display: flex;
    padding-left: 5%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
  .like-music-icon {
    float: right;
    margin-right: 5%;
    position: relative;
  }
  .similar-songs-box {
    padding: 1rem;
  }
  .comment-publish-box {
    padding: 1rem 1rem 5rem 1rem;
  }
</style>
