<template>
  <div class="goTop" @click="goTop()">
    <Icon type="ios-arrow-up" color="#fff" size="40" />
  </div>
</template>

<script>
  export default {
      methods: {
          goTop: function () {
            window.scrollTop = 0;
          }
      }
  }
</script>

<style scoped>
  .goTop {
    position: fixed;
    right: 5%;
    bottom: 5%;
    width: 4rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    border-radius: 50%;
    background: #999;
    z-index: 99;
  }
</style>
