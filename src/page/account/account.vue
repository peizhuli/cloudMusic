<template>
    <div class="app-content">
        <div class="profile-info">
          <div class="profile-info-content" :style="{ background: profileBackUrl }">
            <!--<Avatar size="large" :src="user.profile.userId ? user.profile.avatarUrl : defaultAvatar"></Avatar>-->
            <Row>
              <Col class="profile-avatar-box" :xs="{span: 12}">
                <img class="profile-avatar" :src="user.profile.userId ? user.profile.avatarUrl : defaultAvatar" />
                <p>{{ user.profile.userId ? user.profile.nickname : '未登录' }}</p>
              </Col>
              <Col class="profile-avatar-box" :xs="{span: 12}">
                <div class="daily-sign">
                  <Button type="default" shape="circle" icon="md-create" @click="dailySign(user.profile.userId)">签到</Button>
                </div>
              </Col>
            </Row>
          </div>
          <Row class="account-count-box">
            <Col span="6">
              <div @click="$router.push('/profileEvent')">
                动态
              <div>{{ eventCount }}</div>
              </div>
            </Col>
            <Col span="6">
              <div @click="$router.push({path: '/friends/follows'})">
                关注
                <div>{{ followsCount }}</div>
              </div>
            </Col>
            <Col span="6">
              <div>粉丝</div>
              <div>{{ followedsCount }}</div>
            </Col>
            <Col span="6">
              <div><Icon type="md-create" /></div>
              <div>我的资料</div>
            </Col>
          </Row>
        </div>
        <div class="menu-list-box">
          <CellGroup class="list-group">
            <Cell class="list-item" title="我的消息">
              <Icon type="ios-mail-outline" slot="icon" />
            </Cell>
          </CellGroup>
          <CellGroup class="list-group">
            <Cell class="list-item" title="VIP会员"></Cell>
            <Cell class="list-item" title="商城">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell class="list-item" title="在线听歌免流量">
              <Icon type="ios-briefcase-outline" slot="icon" />
            </Cell>
          </CellGroup>
          <CellGroup class="list-group">
            <Cell class="list-item" title="设置">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell class="list-item" title="扫一扫">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell class="list-item" title="主题换肤">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell class="list-item" title="夜间模式">
              <Icon type="ios-cart-outline" slot="icon" />
              <Switch v-model="openNightModel" slot="extra" />
            </Cell>
            <Cell class="list-item" title="退出登录">
                <Icon type="ios-cart-outline" @click="logout()" />
            </Cell>
          </CellGroup>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations } from 'vuex';
import util from '../../utils/util';
import service from '../../service/service';
export default {
  mounted() {
    this.profileBackUrl = "url(" + this.user.profile.backgroundUrl + ") center no-repeat";
  },
    data() {
        return {
          profileBackUrl: "",
          openNightModel: false,
          defaultAvatar: require('../../../static/img/avater.gif')
        }
    },
	computed: {
	  ...mapState(['user', 'followedsCount', 'followsCount', 'eventCount'])
	},
	methods: {
    ...mapMutations(['SET_PROFILE']),
    dailySign: function () {
      service.dailySign(1).then(function (res) {
        if(res.code == 200) {
            alert('签到成功！');
        }
      })
    },
    logout: function () {
        let vm = this;
      service.logout().then(function (res) {
        if(res.code == 200) {
            alert('退出登录成功！');
            util.removeLocalStore('user');
            vm.SET_PROFILE({});
            vm.push('/login');
        }
      });
    }
	}
}
</script>

<style scoped>
  .profile-info {
    width: 100%;
    height: 40%;
  }
  .profile-info-content {
    width: 100%;
    height: 80%;
    color: #fff;
  }
  .profile-info-content > div {
    height: 100%;
  }
  .list-group {
    margin-top: 1rem;
    background: #fff;
  }
  .list-item.ivu-cell {
    font-size: 1.2rem!important;
  }
  .account-count-box {
    clear: both;
    padding-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .profile-avatar {
    width: 40%;
    border-radius: 50%;
  }
  .profile-avatar-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2;
  }
</style>
