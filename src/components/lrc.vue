<template>
  <div>

  </div>
</template>

<script>
  //将歌词按照时间分割成一个obj，存入一个数组中，播放音乐时，监听播放，
  // 当前播放时间 = 数组中的某一个obj['time']时， 改变当前歌词高亮下标，并滚动到对应的播放时间点
  export default {
      props: ['lrc']
  }
</script>
