<template>
  <div>
    <p>播放记录</p>
    <p v-if="type == 1 && !weekData.length">暂无记录</p>
    <div class="" v-else-if="weekData.length">
      <p v-if="type == 0" @click="getPlayRecord(0)">查看更多</p>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getPlayRecord(1);
      },
      data() {
          return {
              weekData: [],
              allData: [],
              type: 1
          }
      },
    methods: {
          getPlayRecord: function(type) {
              let vm = this;
              let id = vm.$route.query.id;
              service.getUserPlayLists(id,type).then(function(res) {
                  console.log(res);
                  if(type == 1) {
                    vm.weekData = res.weekData;
                  } else if(type == 0) {
                    vm.allData = res.allData;
                  }
                vm.type = type;
              });
          }
    }
  }
</script>
