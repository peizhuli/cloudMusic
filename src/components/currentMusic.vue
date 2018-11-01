<template>
  <div class="current-music-box">
    <Row>
      <Col span="15">
          <div class="artist-avatar">
            <!--<img :src="" />-->
          </div>
          <div class="song-info">
            <p>名称</p>
            <p>歌手</p>
          </div>
      </Col>
      <Col span="9">
        <Icon type="ios-list" size="54" color="#d6413d" />
        <Icon type="ios-play" size="54" color="#d6413d" />
        <Icon type="ios-skip-forward-outline" size="54" color="#d6413d" />
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
      data() {
          return {

          }
      },
    methods: {

    }
  }
</script>

<style scoped>
  .current-music-box {
    padding: 10px;
    background: #fefefc;
    font-size: 1.2rem;
  }
  .artist-avatar,
  .song-info{
    float: left;
  }
  .artist-avatar {
    width: 30%;
  }
  .song-info {
    width: 70%;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
