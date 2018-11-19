<template>
  <div class="bottom-tab-bar">
    <Row class="tab-bar-box" type="flex" justify="center" align="middle">
      <Col span="6">
        <div @click="$router.push('/')">
          <Icon type="ios-at-outline" size="30" />
          <p>推荐</p>
        </div>
      </Col>
      <Col span="6">
        <div @click="$router.push('/profileMusic')">
          <Icon type="ios-musical-notes-outline" size="30"  />
          <p>我的音乐</p>
        </div>
      </Col>
      <Col span="6">
        <div @click="$router.push('/friends/events')">
          <Icon type="ios-people-outline" size="30" />
          <p>朋友</p>
        </div>
      </Col>
      <Col span="6">
        <div @click="$router.push('/account')">
          <Icon type="ios-person-outline" size="30" />
          <p>账号</p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<style scoped>
  .bottom-tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,0.8);
    z-index: 99;
  }
  .tab-bar-box {
    height: 100%;
  }
</style>
