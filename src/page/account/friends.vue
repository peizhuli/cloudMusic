<template>
  <div class="app-content">
    <div class="event-header">
      <span @click="$router.push('/friends/events')">动态</span>
      <span @click="$router.push('/friends/follows')">关注</span>
    </div>
    <router-view></router-view>
  </div>
</template>
