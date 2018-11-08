<template>
  <div class="app-content">
    <Tabs value="latest">
      <TabPane label="最新MV" name="latest">
        <!--<Row :gutter="16">-->
          <div class="mv-item" v-for="item in latestMV" :key="item.id" @click="$router.push({path: '/MVDetail', query: { id: item.id }})">
              <img :src="item.cover" />
              <p>{{ item.briefDesc }}</p>
          </div>
        <!--</Row>-->
      </TabPane>
      <TabPane label="MV排行榜" name="rank">
        <div class="mv-item" v-for="item in MVRank" :key="item.id">
          <img :src="item.cover" />
          <p>{{ item.briefDesc }}</p>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getLatestMV();
          this.getTopMV();
      },
    data() {
          return {
              latestMV: [],
              MVRank: []
          }
    },
    methods: {
          getLatestMV: function () {
            let vm = this;
            service.getNewMV().then(function (res) {
              console.log(res);
              vm.latestMV = res.data;
            })
          },
      getTopMV: function () {
        let vm = this;
        service.getTopMV().then(function (res) {
          console.log(res);
          vm.MVRank = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .mv-item {
    padding: 10px;
  }
  .mv-item img {
    max-width: 100%;
  }
</style>
