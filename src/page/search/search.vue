<template>
  <div>
    <div class="search-box">
      <Icon type="md-arrow-back" size="40" />
      <input placeholder="音乐、视频、歌词、电台" v-model="keyword" @keyup="searchMusic(1, 30, 0)" />
    </div>
    <div class="hot-search-box">
      <p>热门搜索</p>
      <div>
        <span class="hot-search-item" v-for="(item, index) in hotSearchArr" :key="index">{{ item.first }}</span>
      </div>
    </div>
    <div class="search-suggest-box">

    </div>
    <div class="search-content">
      <Tabs value="song">
        <TabPane label="单曲" name="song"></TabPane>
        <TabPane label="歌手" name="artist"></TabPane>
        <TabPane label="专辑" name="album"></TabPane>
        <TabPane label="歌单" name="playLists"></TabPane>
        <TabPane label="视频" name="videos"></TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import service from '../../service/service';
  export default {
      data() {
          return {
            keyword: '',
            searchPlays: [],
            searchHeader: [
              {
                title: '歌曲',
                key: 'musicName'
              },
              {
                title: '歌手',
                key: 'artist'
              },
              {
                title: '专辑',
                key: 'album'
              },
              {
                title: '操作',
                key: 'actions',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'md-headset'
                      },
                      on: {
                        click: () => {
                          this.playMusic(this.searchPlays[params.index].id)
                        }
                      }
                    }),
                    h('Icon', {
                      props: {
                        type: params.IsCollect ? 'md-heart' : 'md-heart-outline'
                      },
                      on: {
                        click: () => {
                          this.collectMusic(params.IsCollect, this.searchPlays[params.index].id)
                        }
                      }
                    })
                  ]);
                }
              },
            ],
            searchContent: [],
            hotSearchArr: [],
            searchSuggest: {
              albums: [],
              artists: [],
              mvs: [],
              playlists: [],
              songs: []
            }
          }
      },
    mounted() {
          this.hotSearch();
          this.hotSearchSuggest('海阔天空');
    },
    methods: {
          searchMusic: function (type, limit, offset) {
            let vm = this;
            console.log(vm.keyword);
            service.searMusic(vm.keyword, type, limit, offset).then(function (res) {
              console.log(res);
              if(res.code == 200) {
                  vm.searchPlays = res.result.songs;
                  vm.searchPlays.map(item => {
                      let obj = {
                        musicName: item.name,
                        artist: item.artists["0"].name,
                        album: item.album.name,
                        IsCollect: false
                      };
                      vm.searchContent.push(obj);
                  })
              }
            })
          },
      hotSearch: function () {
        let vm = this;
        service.getHotSearch().then(function (res) {
          console.log(res);
          if(res.code == 200) {
              vm.hotSearchArr = res.result.hots;
          }
        })
      },
      hotSearchSuggest: function (keyword) {
        let vm = this;
        service.hotSearchSuggest(keyword).then(function (res) {
          console.log(res)
        })
      },
      playMusic: function (id) {
        this.$router.push({path: '/playMusic', query: { id: id }});
      },
      collectMusic: function(IsCollect, id) {
              let type = IsCollect ? 0 : 1;
              service.toggleCollectMusic(type, id).then(function (res) {
                console.log(res);
              })
      }
    }
  }
</script>

<style scoped>
  .search-box {
    padding: 1rem 2rem;
    color: #fff;
    background: #d6413d;
  }
  .search-box input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    width: 80%;
    line-height: 3rem;
    font-size: 1.2rem;
  }
  .search-box input::placeholder {
    color: #ccc;
  }
  .hot-search-item {
    display: inline-block;
    padding: 5px 10px;
    margin: 0.5rem;
    color: #000;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 20px;
  }
</style>
