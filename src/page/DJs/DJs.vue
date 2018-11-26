<template>
  <div class="app-content">
    <!--<Tabs value="name1">-->
      <!--<TabPane label="推荐" name="name1">-->
        <!--<div class="dj-box">-->
          <!--<ul class="dj-list">-->
            <!--<li class="dj-item" v-for="item in recommendDJs" @click="getDJDetail(item.id)">-->
              <!--<img :src="item.picUrl" />-->
              <!--<p>{{ item.name }}</p>-->
              <!--<p>描述： {{ item.copywriter }}</p>-->
              <!--<p>订阅数： {{ item.subCount }}</p>-->
              <!--<p>推荐理由：{{ item.rcmdtext }}</p>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</TabPane>-->
      <!--<TabPane label="订阅" name="name4">-->
        <!--<div class="dj-box">-->
          <!--<ul class="dj-list">-->
            <!--<li class="dj-item" v-for="item in recommendDJs" @click="getDJDetail(item.id)">-->
              <!--<img :src="item.picUrl" />-->
              <!--<p>{{ item.name }}</p>-->
              <!--<p>描述： {{ item.copywriter }}</p>-->
              <!--<p>订阅数： {{ item.subCount }}</p>-->
              <!--<p>推荐理由：{{ item.rcmdtext }}</p>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</TabPane>-->
    <div class="category-title">
      <span>付费精选</span>
    </div>
    <div class="dj-box">
      <Row class="dj-list">
        <Col span="6" class="dj-item" v-for="item in wellChosenDJs" :key="item.id" @click="getDJDetail(item.id)">
          <img :src="item.picUrl" />
          <p>{{ item.name }}</p>
          <!--<p>节目数量： {{ item.programCount }}</p>-->
          <!--<p>推荐理由：{{ item.rcmdtext }}</p>-->
        </Col>
      </Row>
      <div class="more-info">
        <Button type="error" ghost>更多付费节目</Button>
      </div>
    </div>
    <div class="" v-for="(djItem, index) in djLists" :key="index">
      <div class="category-title" @click="$router.push({path: '/DJCategoryDetail', query: {id: djItem[0].categoryId}})">
        <span>{{ djItem[0].category }}</span>
        <Icon type="ios-arrow-forward" size="30" />
      </div>
      <div class="" v-for="item in djLists[index]" :key="item.id" @click="$router.push({path: '/DJDetail', query: {id: item.id}})">
        <Row class="right-content-box">
          <Col :span="6">
            <img :src="item.picUrl" />
          </Col>
          <Col span="18" class="right-info-box">
            <div>{{ item.name }}</div>
            <div>{{ item.rcmdtext }}</div>
            <div>{{ item.lastUpdateProgramName }}</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="category-title">
      <span>分类</span>
    </div>
    <div class="dj-box">
      <Row class="dj-list">
        <Col span="6" class="dj-item" v-for="(item, index) in DJCategories" :key="item.id" @click="getDJDetail(item.id)">
          <img :src="item.pic56x56Url" />
          <p>{{ item.name }}</p>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getRecommendDJs();
          this.getDJTypes();
          this.getDJPayLists();
      },
      data() {
          return {
            recommendDJs: [],
            DJCategories: [],
            DJPrograms: [],
            wellChosenDJs: [],
            TypeIndex: 0,
            djLists: []
          }
      },
    methods: {
          getRecommendDJs: function () {
            let vm = this;
            service.getDJRecommend().then(function (res) {
//              console.log(res);
              if(res.code == 200) {
                  vm.recommendDJs = res.djRadios;
              }
            })
          },
      getDJTypes: function() {
              let vm = this;
              service.getDJType().then(function (res) {
                if(res.code == 200) {
                  vm.DJCategories = res.categories;
                  vm.$nextTick(function () {
                    vm.getDJCategoryRecommend();
                  })
                }
              })
      },
      getDJPayLists: function () {
        let vm = this;
        service.getDJPayList().then(function (res) {
//          console.log(res);
          if(res.code == 200) {
              vm.wellChosenDJs = res.data.list;
              vm.wellChosenDJs.length = 3;
          }
        })
      },
      getDJProgrames: function () {
        let vm = this;
        service.getDJPrograme().then(function (res) {
//          console.log(res);
        })
      },
      getDJCategoryRecommend: function () {
        let vm = this;
        vm.djLists = [];
        let currentIndex = '';
        for(let i=0;i<6;i++) {
          currentIndex =  vm.DJCategories[i].id;
          console.log(m.DJCategories[i]);
          service.getDJCategoryRecommend(currentIndex).then(function (res) {
            if(res.code == 200) {
              vm.djLists.push(res.djRadios.splice(0,3));
            }
          })
        }
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
  .dj-box {
    padding: 1rem 1rem 5rem 1rem;
  }
  .dj-list {
    text-align: center;
    font-size: 1.2rem;
  }
  .category-title {
    font-size: 2rem;
    padding: 1rem;
  }
  .more-info {
    padding: 1rem 0;
    text-align: center;
  }
</style>
