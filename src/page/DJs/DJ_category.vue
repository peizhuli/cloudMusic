<template>
  <div class="app-content">
    <div class="dj-category-box">
      <Row class="dj-category-list">
        <Col :xs="{span: 8}" v-for="item in DJCategories" :key="item.id">
          <div class="category-item" @click="$router.push({path: '/DJCategoryDetail', query: { id: item.id }})">
            <img :src="item.picIPadUrl" />
            <span>{{ item.name }}</span>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
      mounted() {
          this.getDJCategories();
      },
      data() {
          return {
              DJCategories: []
          }
      },
    methods: {
      getDJCategories: function () {
        let vm = this;
        service.getDJType().then(function (res) {
          console.log(res);
          vm.DJCategories = res.categories;
        })
      }
    }
  }
</script>

<style scoped>
  .dj-category-item {

  }
</style>
