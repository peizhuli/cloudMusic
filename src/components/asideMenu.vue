<template>
  <div class="aside-menu-box" @click.stop="hideAsideMenu($event)" id="aside-menu-box">
    <div class="aside-menu-content">
      <div class="profile-info" :style="{background: profileBackUrl, backgroundSize: '100%'}">
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

      <div class="menu-footer">
        <span>夜间模式</span>
        <span>设置</span>
        <span>退出</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
      mounted() {
          this.profileBackUrl = "url(" + this.profile.backgroundUrl + ") center no-repeat";
      },
      data() {
          return {
            profileBackUrl: ""
          }
      },
      computed: {
        ...mapState(['profile'])
      },
      methods: {
          hideAsideMenu: function (event) {
              var target = event.target || event.srcElement;
              if(target.className == 'aside-menu-box') {
                  document.getElementById('aside-menu-box').style.left = "-100%";
              }
          }
      }
  }
</script>

<style scoped>
  .aside-menu-box {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all .7s;
    background: rgba(125,125,125,0.6);
    z-index: 100;
  }
  .aside-menu-content {
    width: 80%;
    height: 100%;
    position: relative;
    background: #fff;
  }
  .profile-info {
    width: 100%;
    height: 30%;
  }
  .menu-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .profile-avatar {
    border-radius: 50%;
  }
</style>
