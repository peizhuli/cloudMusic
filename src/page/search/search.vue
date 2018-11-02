<template>
  <div>
    <div class="search-box">
      <Icon type="md-arrow-back" size="40" />
      <input placeholder="音乐、视频、歌词、电台" v-model="keyword" @input="hotSearchSuggest" @enter="searchMusic(keyword, '1', 30, 0)" />
    </div>
    <div class="hot-search-box">
      <p>热门搜索</p>
      <div>
        <span class="hot-search-item" v-for="(item, index) in hotSearchArr" :key="index">{{ item.first }}</span>
      </div>
    </div>
    <div class="search-suggest-box" v-if="keyword && searchSuggest.songs">
      <div class="search-artists">
        <ul class="search-list">
          <li v-for="item in searchSuggest.artists" :key="item.id" @click="searchMusic(item.name, '100',30,0)">
            <p>{{ item.name }}</p>
          </li>
          <li v-for="item in searchSuggest.songs" :key="item.id" @click="searchMusic('1',30,0)">
            <p>{{ searchSuggest.artists["0"].name }} {{ item.name }}</p>
          </li>
          <li v-for="item in searchSuggest.mvs" :key="item.id" @click="searchMusic('1004',30,0)">
            <p>{{ item.artists["0"].name }} {{ item.name }}</p>
          </li>
          <li v-for="item in searchSuggest.playlists" :key="item.id" @click="searchMusic('1000',30,0)">
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="search-content">
      <Tabs value="song">
        <TabPane label="单曲" name="song" @click="searchMusic(keyword, '1', 30, 0)">
          <ul class="">
            <li v-for="item in searchArrs" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </TabPane>
        <TabPane label="歌手" name="artist" @click="searchMusic(keyword, '100', 30, 0)">
          <ul class="">
            <li v-for="item in searchArrs" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </TabPane>
        <TabPane label="专辑" name="album" @click="searchMusic(keyword, '10', 30, 0)">
          <ul class="">
            <li v-for="item in searchArrs" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </TabPane>
        <TabPane label="歌单" name="playLists" @click="searchMusic(keyword, '1', 30, 0)">
          <ul class="">
            <li v-for="item in searchArrs" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </TabPane>
        <TabPane label="视频" name="videos" @click="searchMusic(keyword, '1004', 30, 0)">
          <ul class="">
            <li v-for="item in searchArrs" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </TabPane>
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
            searchArrs: [],
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
            searchSuggest: {},

          }
      },
    mounted() {
          this.hotSearch();
    },
    methods: {
          searchMusic: function (keyword, type, limit, offset) {
            let vm = this;
            service.searMusic(keyword, type, limit, offset).then(function (res) {
              console.log(res);
              if(res.code == 200) {
                  vm.searchArrs = res.result.artists || res.result.songs || res.result.mvs || res.result.albums || res.result.playlists || [];
                  let count = res.songCount || res.artistCount || res.albumCount || res.playlistCount || res.mvCount || res.djprogramCount || res.userprofileCount;

                  count = count ? count : 0;
//                  vm.searchPlays = res.result.songs;
//                  vm.searchPlays.map(item => {
//                      let obj = {
//                        musicName: item.name,
//                        artist: item.artists["0"].name,
//                        album: item.album.name,
//                        IsCollect: false
//                      };
//                      vm.searchContent.push(obj);
//                  })
                  vm.searchSuggest = {};

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
      hotSearchSuggest: function () {
        let vm = this;
        console.log(vm.keyword);
        if(vm.keyword.length) {
          service.hotSearchSuggest(vm.keyword).then(function (res) {
            console.log(res)
            vm.searchSuggest = res.result;
            console.log(vm.searchSuggest);
          })
        }
      },
      bestSearch: function(keyword) {
        let vm = this;
        if(keyword.length) {
          service.mutiSearch(keyword).then(function (res) {
            console.log(res);
          })
        }
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
  .search-suggest-box {
    position: absolute;
    width: 100%;
    top: 5rem;
    left: 0;
    padding: 1rem 2rem 1rem 5rem;
    font-size: 1rem;
    line-height: 2;
    background: #fff;
    z-index: 5;
    -webkit-box-shadow: 0 0 0 rgba(125,125,125,0.8);
    box-shadow: 0 0 0 rgba(125,125,125,0.8);
  }
</style>
