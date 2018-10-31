<template>
  <div>
    <Tabs value="name1">
      <TabPane label="推荐" name="name1">
        <div class="dj-box">
          <ul class="dj-list">
            <li class="dj-item" v-for="item in recommendDJs" @click="getDJDetail(item.id)">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
              <p>描述： {{ item.copywriter }}</p>
              <p>订阅数： {{ item.subCount }}</p>
              <p>推荐理由：{{ item.rcmdtext }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane label="分类" name="name2">
        <div class="dj-box">
          <ul class="dj-list">
            <li class="dj-item" v-for="(item, index) in DJCategories" @click="getDJDetail(item.id)">
              <img :src="TypeIndex == index ? item.pic84x84IdUrl : item.pic96x96Url" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane label="订阅" name="name4">
        <div class="dj-box">
          <ul class="dj-list">
            <li class="dj-item" v-for="item in recommendDJs" @click="getDJDetail(item.id)">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
              <p>描述： {{ item.copywriter }}</p>
              <p>订阅数： {{ item.subCount }}</p>
              <p>推荐理由：{{ item.rcmdtext }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
      <TabPane label="付费精选" name="name5">
        <div class="dj-box">
          <ul class="dj-list">
            <li class="dj-item" v-for="item in wellChosenDJs" @click="getDJDetail(item.id)">
              <img :src="item.picUrl" />
              <p>{{ item.name }}</p>
              <p>节目数量： {{ item.programCount }}</p>
              <p>推荐理由：{{ item.rcmdtext }}</p>
            </li>
          </ul>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getRecommendDJs();
          this.getDJTypes();
          this.getDJSubLists();
          this.getDJPayLists();
      },
      data() {
          return {
            recommendDJs: [],
            DJCategories: [],
            DJPrograms: [],
            DJSubscribe: [],
            wellChosenDJs: [],
            DJCommentDatas: [],
            TypeIndex: 0
          }
      },
    methods: {
          getRecommendDJs: function () {
            let vm = this;
            service.getDJRecommend().then(function (res) {
              console.log(res);
              if(res.code == 200) {
                  vm.recommendDJs = res.djRadios;
              }
            })
          },
      getDJTypes: function() {
              let vm = this;
              service.getDJType().then(function (res) {
                console.log(res);
                if(res.code == 200) {
                  vm.DJCategories = res.categories;
                }
              })
      },
      getDJSubLists: function() {
              let vm = this;
              service.getDJSubList().then(function (res) {
                console.log(res);
                if(res.code == 200) {
                    vm.DJSubscribe = res.djRadios;
                }
              })
      },
      getDJPayLists: function () {
        let vm = this;
        service.getDJPayList().then(function (res) {
          console.log(res);
          if(res.code == 200) {
              vm.wellChosenDJs = res.list;
          }
        })
      },
      getDJProgrames: function () {
        let vm = this;
        service.getDJPrograme().then(function (res) {
          console.log(res);
        })
      },
      getDJDetail: function(id) {
              service.getDJDetail(id).then(function (res) {
                console.log(res);
              })
      }
    }
  }
</script>
<style>
  .ivu-tabs-bar {
    margin: 0 auto;
    display: inline-block;
    border-bottom: none;
  }
  .dj-item img {
    max-width: 100%;
  }
</style>
