<template>
  <div class="app-content">
    <div class="dj-category-info-box">
      <div class="dj-category-item" v-for="item in djCategoryList" :key="item.id" @click="$router.push({path: '/DJDetail', query: { id: item.id }})">
        <Row>
          <Col :xs="{span: 8}">
            <img :src="item.picUrl" />
          </Col>
          <Col :xs="{span: 16}">
            <div>{{ item.name }}</div>
            <div>{{ item.rcmdtext }}</div>
            <div>{{ item.lastProgramName }}</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          let id = this.$route.query.id;
          this.getDJCategoryDetail(id);
      },
      data() {
          return {
              djCategoryList: []
          }
      },
    methods: {
          getDJCategoryDetail: function (id) {
            let vm = this;
            service.getDJCategoryRecommend(id).then(function (res) {
              console.log(res);
              vm.djCategoryList = res.djRadios;
            })
          }
    }
  }
</script>
