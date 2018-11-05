<template>
  <div>
    <div class="top-type-box">
      <span v-for="item in topTypes" :key="item.value" @click="getTopList(item.value)">{{ item.name }}</span>
    </div>
    <div class="top-list-box">
      <div class="top-list-describe">
        <p>{{ topList.name }}</p>
        <p>{{ topList.description }}</p>
        <p>播放次数：{{ topList.playCount }}  分享次数：{{ topList.shareCount }}</p>
      </div>
      <ul class="top-list">
        <li v-for="item in topList.tracks" :key="item.id" @click="playMusic(item.id)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service'
  export default {
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
          getTopList: function (id) {
            let vm = this;
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
