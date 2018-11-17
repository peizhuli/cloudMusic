<template>
  <div class="app-content">
    <div class="fm-list">
      <div class="fm-item" v-for="item in privateFMs" :key="item.id" @click="$router.push({path: '/songsCategoryDetail', query: { id: item.id }})">
        <Row class="fm-info-box">
          <Col :xs="{span: 6}">
          <img :src="item.album.picUrl" />
          </Col>
          <Col :xs="{span: 18}" class="fm-info">
          <div>{{ item.name }}</div>
          <div>{{ item.album.name }}</div>
          </Col>
        </Row>
      </div>
    </div>
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

<style scoped>
  .fm-list {
    width: 100%;
    height: 100%;
    padding: 5% 2%;
  }
  .fm-info-box {
    display: flex;
    align-items: center;
  }
  .fm-info {
    padding: 0 3%;
    font-size: 1.2rem;
    line-height: 1.6;
  }
</style>
