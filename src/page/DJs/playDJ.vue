<template>
  <div class="app-content">
    <div class="dj-info-box">
      <Row class="right-content-box">
        <Col span="6">
          <img :src="DJDetailInfo.picUrl" />
        </Col>
        <Col span="18" class="right-info-box">
          <div class="user-info">
            <div>{{ DJDetailInfo.name }}</div>
            <Avatar :src="DJDetailInfo.dj.avatarUrl"></Avatar>
            <span>{{ DJDetailInfo.dj.nickname }} - {{ DJDetailInfo.dj.signature }}</span>
          </div>
          <div class="desc">{{ DJDetailInfo.desc }}</div>
          <!--<div>{{ DJDetailInfo.rcmdText }}</div>-->
        </Col>
      </Row>
    </div>
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
<style scoped>
  .dj-info-box {
    padding: 1rem;
  }
  .user-info {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;;
  }
  .desc {
    font-size: 1rem;
    color: #999;
  }
</style>
