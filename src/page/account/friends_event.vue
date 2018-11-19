<template>
  <div class="app-content">

  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getDynamicNews();
      },
      data() {
          return {
            events: []
          }
      },
    methods: {
      getDynamicNews: function () {
        let vm = this;
        service.getDynamicNews().then(function (res) {
          console.log(res);
          vm.events = res.event;
        })
      }
    }
  }
</script>
