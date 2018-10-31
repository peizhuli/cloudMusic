<template>
  <div>
    <div class="search-box">
      <Input placeholder="search text" v-model="keyword" autocomplete="on" />
      <Button type="primary" @click="searchMusic(1, 30, 0)">Search</Button>
    </div>
    <div class="search-content">
      <Table :columns="searchHeader" :data="searchContent"></Table>
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
            searchContent: []
          }
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
                      }
                      vm.searchContent.push(obj);
                  })
              }
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
