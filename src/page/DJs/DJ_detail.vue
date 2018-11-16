<template>
  <div class="app-content">
    <div class="dj-detail-info-box">
      <div class="dj-category-item" v-for="item in programs" :key="item.id" @click="$router.push({path: '/PlayDJ', query: { id: item.radio.id }})">
        <Row>
          <Col :xs="{span: 8}">
          <img :src="item.coverUrl" />
          </Col>
          <Col :xs="{span: 16}">
          <div>{{ item.name }}</div>
          <div>{{ item.description.length > 100 ? item.description.substr(0,99) + '...' : item.description }}</div>
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
          this.getDJProgram(id);
      },
    data() {
          return {
              programs: []
          }
    },
    methods: {
          getDJProgram: function (id) {
            let vm = this;
            service.getDJPrograme(id, 10, 0).then(function (res) {
              console.log(res);
              vm.programs = res.programs;
            })
          }
    }
  }
</script>
