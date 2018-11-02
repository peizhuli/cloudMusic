<template>
  <div class="aside-menu-box">
    <div class="aside-menu-content">
      <div class="profile-info" :style="{background: profileBackUrl}">
        <div>
          <input type="hidden" :id="profile.userId" />
          <img class="profile-avatar" :src="profile.avatarUrl" />
          <p>{{ profile.nickname }}</p>
        </div>
      </div>

      <div class="menu-list-box">
        <CellGroup>
          <Cell title="我的消息" >
            <Icon type="ios-mail-outline" slot="icon" />
          </Cell>
          <Cell title="VIP会员">

          </Cell>
          <Cell title="商城">
            <Icon type="ios-cart-outline" slot="icon" />
          </Cell>
          <Cell title="在线听歌免流量" to="/components/button">
            <Icon type="ios-briefcase-outline" slot="icon" />
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
      mounted() {

      },
      data() {
          return {
            profileBackUrl: "url(" + this.profile.backgroundUrl + ") center no-repeat"
          }
      },
      computed: {
        ...mapState(['profile'])
      },
      methods: {

      }
  }
</script>

<style scope>
  .side-menu-box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: rgba(125,125,125,0.6);
  }
  .aside-menu-content {
    width: 80%;
    height: 100%;
    background: #fff;
  }
  .profile-info {
    width: 100%;
    height: 30%;
  }
</style>
