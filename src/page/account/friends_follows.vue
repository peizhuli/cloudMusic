<template>
    <div class="follows-box">
      <div class="events-item" v-for="item in follows" :key="item.userId">
        <Row>
          <Col :xs="{span:2}" class="avatar-box">
          <Avatar :src="item.avatarUrl"></Avatar>
          </Col>
          <Col :xs="{span: 22}" class="event-content">
          <div>{{ item.nickname }}  | 粉丝：{{ item.followeds }} |  关注：{{ item.follows }}</div>
          <div>{{ item.signature }}</div>
          </Col>
        </Row>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import service from '../../service/service';
  export default {
      mounted() {
          this.getUserFocusList();
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
    }
  }
</script>
