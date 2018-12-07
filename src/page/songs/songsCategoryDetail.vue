<template>
  <div class="app-content">
    <div class="category-detail-box">
      <div class="category-describe-box">
        <Row>
          <Col span="8">
            <img :src="categoryDetail.coverImgUrl" />
          </Col>
          <Col span="16" class="category-info-content">
            <div class="category-info-box">
              <div>
                <Avatar :src="categoryDetail.creator.avatarUrl"></Avatar>
                {{ categoryDetail.creator.nickname }}
              </div>
              <div>{{ categoryDetail.name }}</div>
            </div>
          </Col>
        </Row>
        <Row class="category-count-box">
          <Col class="category-count-item" span="6">
            <Icon type="ios-briefcase" size="20" />
            <div>{{ categoryDetail.subscribedCount }}</div>
          </Col>
          <Col class="category-count-item" span="6">
            <Icon type="ios-text-outline" size="20" @click="$router.push({path: '/Comments', query: { id: $route.query.id }})" />
            <div>{{ categoryDetail.commentCount }}</div>
          </Col>
          <Col class="category-count-item" span="6">
            <Icon type="md-share" size="20" />
            <div>{{ categoryDetail.shareCount }}</div>
          </Col>
          <Col class="category-count-item" span="6">
            <Icon type="ios-download-outline" size="20" />
            <div>下载</div>
            </Col>
        </Row>
      </div>
      <div class="play-all-box">
        <span>播放全部</span>
        <Icon class="play-all-action-icon" type="ios-options-outline" />
      </div>
      <ul class="category-detail-list padBtm">
        <li v-for="(item, index) in categoryDetail.tracks" :key="item.id" @click="goPlayMusic(item.id)">
          <div class="category-item">
            <Row>
              <Col span="2">
                  <div>{{ index + 1 }}.</div>
              </Col>
              <Col span="22">
                <div class="category-item-name">
                  <span>{{ item.name }}</span>
                  <span v-if="item.alia.length"> - {{ item.alia["0"] }}</span>
                  <span class="more-icon-box">
                    <Icon type="md-arrow-dropright-circle" size="20" v-if="item.mv != 0" @click.stop="$router.push({path: '/playMV', query: { id: item.mv }})" />
                    <Icon type="md-more" size="20" @click.stop="showCurrentSongOptions(item.al.id, item.mv, item.id)" />
                  </span>
                </div>
                <div class="artist-name">
                  {{ item.ar[0].name }}
                  <span> - {{ item.al.name }}</span>
                </div>
              </Col>
            </Row>
          </div>
        </li>
      </ul>
    </div>
    <div class="music-option-box" v-show="showOptionsBox">
      <div class="music-option-item" :disable="currentMVId == 0" @click.stop="$router.push({path: '/playMV', query: { id: currentMVId }})">
        <Icon type="md-arrow-dropright-circle" size="30" color="#d6413d" />
        <span>查看视频</span>
      </div>
      <div class="music-option-item" :disable="currentMVId == 0" @click.stop="$router.push({path: '/album/albumDetail', query: { id: currentAlbumId }})">
        <Icon type="tasklist" size="30" color="#d6413d" />
        <span>查看专辑</span>
      </div>
      <div class="music-option-item" :disable="currentMVId == 0" @click.stop="delSongFromPlayList(currentSongId)">
        <Icon type="ios-trash" size="30" color="#d6413d" />
        <span>删除歌曲</span>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getCategoryDetail();
      },
      data() {
          return {
            categoryDetail: {},
            currentAlbumId: '',
            currentMVId: '',
            currentSongId: '',
            showOptionsBox: false
          }
      },
    methods: {
          getCategoryDetail: function() {
              let vm = this;
              let id = vm.$route.query.id;
              service.getPlayDetailInfo(id).then(function(res) {
                  console.log(res);
                  if(res.code == 200) {
                      vm.categoryDetail = res.playlist;
                  }
              })
          },
      showCurrentSongOptions: function (albumId, mvId, currentSongId) {
              this.currentAlbumId = albumId;
              this.currentMVId = mvId;
              this.currentSongId = currentSongId;
              this.showOptionsBox = true;
      },
      delSongFromPlayList: function ( songId) {
        let vm = this;
        let playListId = vm.categoryDetail.id;
        service.playListOparation('del', playListId, songId).then(function (res) {
          console.log(res);
        })
      },
      goPlayMusic: function(id) {
              this.$router.push({path: '/playMusic', query: { id: id }});
      }
    }
  }
</script>

<style scoped>
  .category-detail-box {
    width: 100%;
    height: 100%;
  }

  .category-describe-box {
    height: 20%;
    padding: 2% 5%;
  }
  .category-describe-box > div,
  .category-info-content {
    height: 100%;
  }
  .category-info-box {
    padding: 0 5%;
  }
  .category-count-box {
    clear: both;
    text-align: center;
  }
  .category-info-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .more-icon-box {
    display: inline-block;
    position: absolute;
    right: 0;
  }
  .category-detail-list {
    padding: 0 5% 4rem 5%;
  }
  .category-item {
    white-space: nowrap;
    font-size: 1.2rem;
    color: #999;
  }
  .category-item-name {
    display: inline-block;
    color: #333;
    width: 96%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .artist-name {
    font-size: 1rem;
  }
  .play-all-box {
    padding: 1rem;
    clear: both;
    font-size: 1.4rem;
  }
  .play-all-action-icon {
    float: right;
  }
  .music-option-box {
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 4rem;
    background: #fff;
    z-index: 9;
  }
</style>
