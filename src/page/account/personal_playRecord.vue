<template>
  <div class="app-content">
    <Tabs value="weekly">
      <TabPane label="最近一周" name="weekly">
        <div class="" v-for="item in weekList" @click="$router.push({path: '/playMusic', query: { id: item.song.id }})">
          <Row class="play-list-box">
            <Col :xs="{span: 6}">
              <img :src="item.song.al.picUrl" />
            </Col>
            <Col :xs="{span: 18}" class="play-list-content">
              <div>{{ item.song.name }} - {{ item.song.ar[0].name }}</div>
              <div v-if="item.song.alia.length">{{ item.song.alia["0"] }}</div>
            </Col>
          </Row>
        </div>
      </TabPane>
      <TabPane label="全部" name="all">
        <div class="" v-for="item in allList" @click="$router.push({path: '/playMusic', query: { id: item.song.id }})">
          <Row class="play-list-box">
            <Col :xs="{span: 6}">
            <img :src="item.song.al.picUrl" />
            </Col>
            <Col :xs="{span: 18}" class="play-list-content">
            <div>{{ item.song.name }} - {{ item.song.ar[0].name }}</div>
            <div v-if="item.song.alia.length">{{ item.song.alia["0"] }}</div>
            </Col>
          </Row>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import service from '../../service/service';
  export default {
      mounted() {
          this.getUserPlayLists(1);
          this.getUserPlayLists(0);
      },
      data() {
          return {
            weekList: [],
            allList: []
          }
      },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      getUserPlayLists: function (type) {
        let vm = this;
        service.getUserPlayLists(vm.user.profile.userId, type).then(function (res) {
//          console.log('最近播放',res);
          if(res.code == 200) {
              type == 1 ?  vm.weekList = res.weekData : vm.allList = res.allData;
          }
          console.log(res);
        })
      },
    }
  }
</script>

<style scoped>
  .play-list-box {
    overflow: hidden;
  }
  .play-list-content {
    height: 100%;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
