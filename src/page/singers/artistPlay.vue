<template>
  <div>
    <div class="singer-brief">
      <img :src="artistInfo.picUrl" />
      <div>
        <p>{{ artistInfo.name }}</p>
        <p>{{ artistInfo.briefDesc }}</p>
      </div>
    </div>
    <div>
      <ul class="hot-songs-list">
        <li v-for="item in artistHotSongs" :key="item.id" @click="goPlayMusic(item.id)">
          <Icon type="ios-heart-outline" @click.stop="likeMusic(true, item.id)" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getArtistPlays();
      },
    data() {
          return {
              artistInfo: {},
            artistHotSongs: []
          }
    },
    methods: {
          getArtistPlays: function() {
              let vm = this;
              let uid = vm.$route.query.id;
              service.getArtistSongs(uid).then(function (res) {
                console.log(res);
                vm.artistInfo = res.artist;
                vm.artistHotSongs = res.hotSongs;
              });
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
