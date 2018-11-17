<template>
  <div class="lrc-box">
    <div class="header">
      <Icon type="ios-arrow-back" @click="hideLrc()" />
    </div>
    <div class="app-content lrc-list" v-if="lrcList.length">
      <div class="lrc-item" v-for="(item, index) in lrcList" :key="index">
        <span :class="{active: item.sec <= currentTime && lrcList[index + 1].sec >= currentTime}">{{ item.content }}</span>
      </div>
    </div>
    <div v-else>
      <span>暂无歌词</span>
    </div>
  </div>
</template>



<script>
  //将歌词按照时间分割成一个obj，存入一个数组中，播放音乐时，监听播放，
  // 当前播放时间 = 数组中的某一个obj['time']时， 改变当前歌词高亮下标，并滚动到对应的播放时间点
  export default {
      props: ['lrcList', 'currentTime'],
    methods: {
      hideLrc: function() {
          this.$emit('hideLrc');
      }
    }
  }
</script>

<style scoped>
  .lrc-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.9);
    overflow: hidden;
    z-index: 99;
  }
  .header {
    width: 100%;
    height: 4rem;
    font-size: 2rem;
    line-height:4rem;
    color: #fff;
    background: #d6413d;
  }
  .lrc-list {
    text-align: center;
    font-size: 1rem;
  }
  .lrc-item > span.active {
    color: #d6413d;
  }
</style>
