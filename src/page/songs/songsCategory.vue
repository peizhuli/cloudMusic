<template>
  <div>
    <p>歌单分类</p>
    <ul class="category-list">
      <li @click="getCategoryType(-1)">全部</li>
      <li v-for="(item, index) in categories" :key="index" @click="getCategoryType(index)">
        <p>{{ item }}</p>
      </li>
    </ul>
    <ul class="sub-category-list">
      <li class="sub-category-item" v-for="(item, index) in currentSubCategories" :key="index" @click="getCategoryInfos(item.name, 20, 0, 'hot')">
        <span :data-type="item.category"> {{ item.name }} </span>
      </li>
    </ul>

    <div class="category-detail-box">
      <ul class="category-detail-list">
        <li class="category-detail-item" v-for="item in categoryDetail" :key="item.id" @click="getCategoryDetail(item.id)">
          <img :src="item.coverImgUrl" />
          <p>{{ item.name }}</p>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import service from '../../service/service';
  export default {
    mounted() {
      this.getCategory();
    },
    data() {
      return {
        categories: [],
        subCategories: [],
        currentSubCategories: [],
        categoryDetail: []
      }
    },
    methods: {
      getCategory: function() {
        let vm = this;
        service.getPlayList().then(function(res) {
          console.log(res);
          if(res.code == 200) {
            vm.categories = res.categories;
            vm.subCategories = res.sub;
            vm.currentSubCategories = res.sub;
          }
        })
      },
      getCategoryInfos: function(cat,limit,order) {
        let vm = this;
        service.getWellChosenList(cat,limit,order).then(function(res) {
          console.log(res);
          if(res.code == 200) {
            vm.categoryDetail = res.playlists;
          }
        });
      },
      getCategoryType: function(type) {
        this.currentSubCategories = [];
        if(type == -1) {
          this.currentSubCategories = this.subCategories;
        } else {
          this.subCategories.map(item => {
            if(item.category == type) {
              this.currentSubCategories.push(item);
            }
          });
        }
      },
      getCategoryDetail: function(id) {
        this.$router.push({path: '/songsCategoryDetail', query: { id: id }});
      },
    }
  }
</script>

<style scoped>
  .sub-category-item {
    display: inline-block;
    cursor: pointer;
  }
  .category-detail-item {
    float: left;
    width: 33.3%;
  }
  .category-detail-item img {
    width: 100%;
  }
</style>
