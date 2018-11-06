<template>
  <div class="app-content">
    <div class="singer-brief" :style="{background: artistBgUrl}">
      <!--<img :src="artistInfo.picUrl" />-->
        <p>{{ artistInfo.name }}</p>
    </div>
    <div>
      <Tabs value="hot">
        <TabPane label="热门" name="hot">
          <ul class="hot-songs-list">
            <li v-for="item in artistHotSongs" :key="item.id" @click="goPlayMusic(item.id)">
              <Icon type="ios-heart-outline" @click.stop="likeMusic(true, item.id)" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </TabPane>
        <TabPane label="专辑" name="album">
          <div class="album-item" v-for="item in artistAlbums" :key="item.id">
            <Row>
              <Col span="8">
                <img :src="item.picUrl" />
              </Col>
              <Col span="16">
                <div>{{ item.name }}</div>
                <div>{{ item.publishTime }}</div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="MV" name="mv">
          <div class="album-item" v-for="item in artistMVs" :key="item.id">
            <Row>
              <Col span="8">
                <img :src="item.imgurl" />
              </Col>
              <Col span="16">
              <div>{{ item.name }}</div>
              <div>{{ item.publishTime }}</div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="歌手信息" name="info">
          <div class="info-item">
            <div class="info-title"><span>歌手简介</span></div>
            <div class="info-describe">{{ artistInfo.briefDesc }}</div>
          </div>
          <div class="info-item" v-for="item in artistInfo.introduction">
            <div class="info-title"><span>{{ item.ti }}</span></div>
            <div class="info-describe">{{ item.txt }}</div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
        let uid = this.$route.query.id;
        this.getArtistPlays(uid);
        this.getArtistInfo(uid);
        this.getArtistAlbum(uid);
        this.getArtistMV(uid);
      },
    data() {
          return {
            artistName: '',
            artistBgUrl: '',
            artistInfo: {},
            artistHotSongs: [],
            artistMVs: [],
            artistAlbums: []
          }
    },
    methods: {
          getArtistPlays: function(uid) {
              let vm = this;
              service.getArtistSongs(uid).then(function (res) {
                console.log(res);
//                vm.artistInfo = res.artist;
                vm.artistBgUrl = 'url(' + res.artist.picUrl + ') center no-repeat';
                vm.artistName = res.artist.name;
                vm.artistHotSongs = res.hotSongs;
              });
          },
      getArtistAlbum: function(uid) {
              let vm = this;
              service.getArtistAlbum(uid).then(function (res) {
                console.log("专辑",res)
                vm.artistAlbums = res.hotAlbums;
              })
      },
      getArtistMV: function (uid) {
        let vm = this;
        service.getArtistMV(uid).then(function (res) {
          console.log("mv",res)
          vm.artistMVs = res.mvs;
        })
      },
      getArtistInfo: function (uid) {
        let vm = this;
        service.getArtistInfo(uid).then(function (res) {
          console.log("歌手信息",res);
          vm.artistInfo = res;
        })
      },
      goPlayMusic: function(id) {
              this.$router.push({path: '/playMusic', query: { id: id }});
      },
      likeMusic: function (IsLike, id) {
        service.likeMusic(IsLike, id).then(function (res) {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .singer-brief {
    width: 100%;
    height: 20rem;
  }
  .album-item {
    margin-top: 2rem;
    padding: 1rem;
    background: #fff;
  }
  .album-item img {
    max-width: 100%;
  }
  .info-item {
    margin-top: 2rem;
    padding: 1rem;
    background: #fff;
  }
  .info-title {
    margin-bottom: 1rem;
    border-left: 5px solid #d6413d;
  }
  .info-title > span {
    display: inline-block;
    padding-left: 1rem;
  }
  /*.info-title::before {*/
    /*content: "";*/
    /*display: inline-block;*/
    /*width: 5px;*/
    /*height: 100%;*/
    /*background: #d6413d;*/
  /*}*/
</style>
