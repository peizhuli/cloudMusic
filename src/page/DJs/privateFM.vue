<template>
  <div>
    <Row :gutter="24">
      <Col span="8" v-for="item in privateFMs" :key="item.id">
       <img :src="item.album.picUrl" />
       <p>{{ item.name }}  {{ item.album.name }}</p>
      </Col>
    </Row>
  </div>
</template>

<script>
  import service from '../../service/service'
  export default {
      mounted() {
          this.privateFM();
      },
    data() {
          return {
              privateFMs: []
          }
    },
      methods: {
          privateFM: function () {
            let vm = this;
            service.getPrivateFM().then(function (res) {
              console.log(res);
              vm.privateFMs = res.data;
            })
          }
      }
  }
</script>
