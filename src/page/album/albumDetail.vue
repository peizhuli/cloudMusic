<template>
  <div class="app-content">
    <div class="album-info-box">
      <Row class="album-info-content">
        <Col :span="6">
          <img :src="album.blurPicUrl" />
        </Col>
        <Col :span="18" class="album-detail-box">
          <div class="artist-name">{{ album.artist.name }} - {{ album.name }}</div>
          <div>{{ album.description.length > 100 ? album.description.substr(0,99) : album.description }}</div>
        </Col>
      </Row>
    </div>
    <div class="song-list-box">
      <ul class="song-list">
        <li class="song-item" v-for="(item, index) in songs" :key="item.id">
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
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
        this.albumId = this.$route.query.id;
        if(this.albumId != '') {
          this.getAlbumInfo(this.albumId);
        }
      },
      data() {
          return {
            albumId: '',
            album: {},
            songs: [],
            currentMVId: '',
            currentSongId: '',
            showOptionsBox: false
          }
      },
    methods: {
          getAlbumInfo: function(albumId) {
            let vm = this;
            service.getAlbum(albumId).then(function(res) {
                vm.album = res.album;
                vm.songs = res.songs;
            })
          },
      showCurrentSongOptions: function (albumId, mvId, currentSongId) {
        this.currentAlbumId = albumId;
        this.currentMVId = mvId;
        this.currentSongId = currentSongId;
        this.showOptionsBox = true;
      },
    }
  }
</script>

<style scoped>
  .album-info-box {
    padding: 1rem;
  }
  .album-info-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #999;
  }
  .album-info-content .artist-name {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .album-detail-box {
    padding-left: 1rem;
  }
  .more-icon-box {
    display: inline-block;
    position: absolute;
    right: 0;
  }
  .song-list {
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
</style>
