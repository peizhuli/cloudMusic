<template>
  <div class="app-content">
    <div class="top-list-box">
      <div class="top-list-info-box">
        <Row class="top-list-info">
          <Col span="6">
            <img :src="topList.coverImgUrl" />
          </Col>
          <Col span=18 class="top-info-detail">
            <div>{{ topList.name }}</div>
            <div>{{ topList.description }}</div>
            <div>播放次数：{{ topList.playCount }}  分享次数：{{ topList.shareCount }}</div>
          </Col>
        </Row>
      </div>
      <ul class="top-list">
        <li v-for="item in topList.tracks" :key="item.id" @click="playMusic(item.id)">
          <Icon type="md-arrow-dropright-circle"size="20" />
          <span class="top-item-name">
            {{ item.name }}
            <span v-if="item.alia.length"> - {{ item.alia[0] }}</span>
          </span>
          <Icon class="more-info" type="ios-more" size="20" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service'
  export default {
      mounted() {
          let name = this.$route.query.name;
          this.getTopList(name);
      },
      data() {
          return {
            topTypes: [
                {
                  value: 0,
                  name: '云音乐新歌榜'
                },
                {
                  value: 1,
                  name: '云音乐热歌榜'
                },
                {
                  value: 2,
                  name: '网易原创歌曲榜'
                },
                {
                  value: 3,
                  name: '云音乐飙升榜'
                },
                {
                  value: 4,
                  name: '云音乐电音榜'
                },
                {
                  value: 5,
                  name: 'UK排行榜周榜'
                },
                {
                  value: 6,
                  name: '美国Billboard周榜'
                },
                {
                  value: 7,
                  name: 'KTV嗨榜'
                },
                {
                  value: 8,
                  name: 'iTunes榜'
                },
                {
                  value: 9,
                  name: 'Hit FM Top榜'
                },
                {
                  value: 10,
                  name: '日本Oricon周榜'
                },
                {
                  value: 11,
                  name: '韩国Melon排行榜周榜'
                },
                {
                  value: 12,
                  name: '韩国Mnet排行榜周榜'
                },
                {
                  value: 13,
                  name: '韩国Melon原声周榜'
                },
                {
                  value: 14,
                  name: '中国TOP排行榜(港台榜)'
                },
                {
                  value: 15,
                  name: '中国TOP排行榜(内地榜)'
                },
                {
                  value: 16,
                  name: '香港电台中文歌曲龙虎榜'
                },
                {
                  value: 17,
                  name: '华语金曲榜'
                },
                {
                  value: 18,
                  name: '中国嘻哈榜'
                },
                {
                  value: 19,
                  name: '法国 NRJ EuroHot 30周榜'
                },
                {
                  value: 20,
                  name: '台湾Hito排行榜'
                },
                {
                  value: 21,
                  name: 'Beatport全球电子舞曲榜'
                },
                {
                  value: 22,
                  name: '云音乐ACG音乐榜'
                },
                {
                  value: 23,
                  name: '云音乐嘻哈榜'
                }
              ],
            topList: {}
          }
      },
    methods: {
          getTopList: function (name) {
            let vm = this;
            let id = '';
            console.log(name);
            vm.topTypes.map(function(item) {
                if(item.name == name) {
                    id = item.value;
                }
            });
            service.getTop(id).then(function (res) {
              console.log(res);
              vm.topList = res.playlist;
            })
          },
      playMusic: function (id) {
        this.$router.push({path: '/playMusic', query: {id: id}});
      }
    }
  }
</script>

<style scoped>
  .top-list-box {
    padding: 1rem;
  }
  .top-list-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
  .top-info-detail {
    padding-left: 1rem;
  }
  .top-item-name {
    display: inline-block;
    width: 90%;
    font-size: 1rem;
    line-height: 1.6;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .more-info {
    float: right;
  }
</style>
