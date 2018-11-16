<template>
  <div class="profile-box">
    <div class="profile-info" :style="{background: profileBackUrl}">
      <div>
        <input type="hidden" :id="user.profile.userId" />
        <img class="profile-avatar" :src="user.profile.avatarUrl" />
        <p>{{ user.profile.nickname }}
          <span class="profile-gender">
          <Icon :type="user.profile.gender == 0 ? 'md-female' : 'md-male'" size="20" color="#fff" />
        </span>
        </p>
        <p>
          <span>关注：{{ userFollows.length ? userFollows.length : 0 }}</span>
          <span>粉丝：{{ userFans.length ? userFans.length : 0 }}</span>
        </p>
        <p>{{ user.profile.description.length ? user.profile.description : '暂无描述' }}</p>
        <!--<p>是否VIP：{{ profile.vipType == 0 ? '否' : '是' }}</p>-->
        <div class="edit-info-btn">
          <Button size="large" icon="md-create" shape="circle" ghost>我的资料</Button>
        </div>
      </div>
    </div>
    <div class="play-list">
      <Tabs value="weekPlay">
        <TabPane title="最近一周播放记录" name="weekPlay"></TabPane>
        <TabPane title="全部播放记录" name="allPlay"></TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
      data() {
          return {
              profileBackUrl: ''
          }
      },
    mounted() {
          this.profileBackUrl = "url(" + this.user.profile.backgroundUrl + ") center no-repeat";
    },
    computed: {
      ...mapState(['user','userFans', 'userFollows'])
    }
  }
</script>

<style scoped>
  .profile-box {
    width: 100%;
    height: 100%;
  }
  .profile-info {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
  }
  .profile-avatar {
    border-radius: 50%;
  }
  .profile-gender {
    width: 3rem;
    height: 3rem;
    padding: 5px;
    border-radius: 50%;
    background: #11bee5;
  }
  .edit-info-btn {
    margin-top: 2rem;
  }
</style>

