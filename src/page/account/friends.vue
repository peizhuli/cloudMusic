<template>
  <div class="app-content">
    <div class="event-header">
      <ButtonGroup>
        <Button type="error" to="/friends/events">动态</Button>
        <Button type="error" to="/friends/follows">关注</Button>
      </ButtonGroup>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  .event-header {
    text-align: center;
    padding-top: 1rem;
  }
  .avatar-box {
    text-align: right;
  }
  .event-content {
    padding-left: 1rem;
    font-size: 1rem;
  }
  .events-item {
    margin-bottom: 1rem;
  }
</style>
