<template>
  <div>
    <p>收藏列表</p>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getCollections();
      },
      data() {
          return {}
      },
    methods: {
          getCollections: function() {
              let vm = this;
              let id = vm.$route.query.id;
              service.getUserSongs(id).then(function(res) {
                  console.log(res);
              });
          }
    }
  }
</script>
