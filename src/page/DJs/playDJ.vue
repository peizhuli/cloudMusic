<template>
  <div class="app-content">
    <audio :src="DJUrl" controls />
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          let id = this.$route.query.id;
          this.getDJDetail(id);
      },
      data() {
          return {
              DJDetailInfo: {},
              DJUrl: ''
          }
      },
    methods: {
      getDJDetail: function (id) {
        let vm = this;
        service.getDJDetail(id).then(function (res) {
          console.log(res);
          vm.DJDetailInfo = res.djRadio;
          vm.$nextTick(function() {
              vm.getDJUrl(vm.DJDetailInfo.id);
          })
        })
      },
      getDJUrl: function (id) {
          let vm = this;
          service.getDJUrl(id).then(function (res) {
            console.log(res);
            vm.DJUrl = res.data["0"].url;
          })
      }
    }
  }
</script>
