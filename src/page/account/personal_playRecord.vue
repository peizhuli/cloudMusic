<template>
  <div class="app-content">
    <Tabs value="weekly">
      <TabPane label="最近一周" name="weekly">
        <div class="" v-for="item in weekList">
          <div>{{ item.song.name }} - {{ item.song.ar[0].name }}</div>
        </div>
      </TabPane>
      <TabPane label="全部" name="all">
        <div class="" v-for="item in allList">
          <div>{{ item.song.name }} - {{ item.song.ar[0].name }}</div>
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
      ...mapState(['profile'])
    },
    methods: {
      getUserPlayLists: function (type) {
        let vm = this;
        service.getUserPlayLists(vm.profile.userId, type).then(function (res) {
          console.log('最近播放',res);
          if(res.code == 200) {
              type == 1 ?  vm.weekList = res.weekData : vm.allList = res.all;
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
