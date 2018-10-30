<template>
  <div>
    <div class="category-detail-box">
      <ul class="category-detail-list">
        <li v-for="item in categoryDetail" :key="item.id" @click="goPlayMusic(item.id)">
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getCategoryDetail();
      },
      data() {
          return {
              categoryDetail: []
          }
      },
    methods: {
          getCategoryDetail: function() {
              let vm = this;
              let id = vm.$route.query.id;
              service.getPlayDetailInfo(id).then(function(res) {
                  console.log(res);
                  if(res.code == 200) {
                      vm.categoryDetail = res.playlist.tracks;
                  }
              })
          },
      goPlayMusic: function(id) {
              this.$router.push({path: '/playMusic', query: { id: id }});
      }
    }
  }
</script>
