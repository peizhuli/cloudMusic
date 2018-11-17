<template>
  <div class="app-content">
    <div class="follows-box">
      <div class="follow-item" v-for="item in follows" :key="item.userId">
        <Row>
          <Col :xs="{span:4}" class="avatar-box">
            <Avatar :src="item.avatarUrl"></Avatar>
          </Col>
          <Col :xs="{span: 18}">
            <div>{{ item.nickname }}  | 粉丝：{{ item.followeds }} |  关注：{{ item.follows }}</div>
            <div>{{ item.signature }}</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import service from '../../service/service'
  export default {
      mounted() {
          this.getUserFocusList();
          this.getUserEvent();
      },
      data() {
          return {
              follows: []
          }
      },
    computed: {
      ...mapState(['user'])
    },
      methods: {
        getUserFocusList: function () {
          let vm = this;
          service.getUserFocusList(vm.user.profile.userId).then(function (res) {
            console.log(res);
            if(res.code == 200) {
                vm.follows = res.follow;
            }
          })
        },
        getUserEvent: function () {
          let vm = this;
          service.getUserNews(vm.user.profile.userId).then(function (res) {
            console.log(res);
          })
        }
      }
  }
</script>

<style scoped>
  .avatar-box {
    text-align: right;
  }
</style>
