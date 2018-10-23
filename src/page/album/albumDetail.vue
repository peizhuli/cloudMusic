<template>
  <div>

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
            albums: [],
            songs: []
          }
      },
    methods: {
          getAlbumInfo: function(albumId) {
            var vm = this;
            service.getAlbum(albumId).then(function(res) {
                console.log(res);
                vm.albums = res.album;
                vm.songs = res.songs;
            })
          }
    }
  }
</script>
