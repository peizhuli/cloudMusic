<template>
  <div class="app-content">
    <div class="artist-type-box">
      <ul class="artist-type-list">
        <li v-for="item in artistType" :key="item.value" @click="getArtistType(item.value, 30, 0,'')">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="artist-type-detail-box">
      <ul class="">
        <li v-for="item in artists" :key="item.id" @click="getArtistPlayList(item.id)">
          <img :src="item.img1v1Url" />
          <p>{{ item.name }}</p>
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
            artistType: [
                {
                    name: '华语男歌手',
                    value:  1001
                },
                {
                  name: '华语女歌手',
                  value:  1002
                },
                {
                  name: '华语组合/乐队',
                  value:  1003
                },
                {
                  name: '欧美男歌手',
                  value:  2001
                },
                {
                  name: '欧美女歌手',
                  value:  2002
                },
                {
                  name: '欧美组合/乐队',
                  value:  2003
                },
                {
                  name: '日本男歌手',
                  value:  6001
                },{
                  name: '日本女歌手',
                  value:  6002
                },
                {
                  name: '日本组合/乐队',
                  value:  6003
                },
                {
                  name: '韩国男歌手',
                  value:  7001
                },
                {
                  name: '韩国女歌手',
                  value:  7002
                },
                {
                  name: '韩国组合/乐队',
                  value:  7003
                },
                {
                  name: '其他男歌手',
                  value:  4001
                },
                {
                  name: '其他女歌手',
                  value:  4002
                },
                {
                  name: '其他组合/乐队',
                  value:  4003
                }
              ],
            artists: []
          }
      },
    methods: {
          getArtistType: function(cat, limit, offset, initial) {
              let vm = this;
              service.getArtisType(cat, limit, offset, initial).then(function (res) {
                  console.log(res);
                  if(res.code == 200) {
                      vm.artists = res.artists;
                  }
              })
          },
          getArtistPlayList: function (id) {
              this.$router.push({path: '/artistPlay', query: {id: id}})
          }
    }
  }
</script>
