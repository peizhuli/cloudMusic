<template>
  <div class="app-content">
    <div class="events-box">
      <div class="events-item" v-for="item in events" :key="item.id">
        <Row>
          <Col span="2" class="avatar-box">
            <Avatar :src="item.user.avatarUrl"></Avatar>
          </Col>
          <Col span="22" class="event-content">
            <div class="nickname">{{ item.user.nickname }} - {{ item.user.signature }}</div>
            <div>{{ item.json | toJSON }}</div>
            <div>{{ item.eventTime | formatTime }}</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '../../utils/util';
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
    filters: {
      formatTime: function(time) {
        return util.formatterTime(time)
      },
      toJSON: function (content) {
        return JSON.parse(content).msg;
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

