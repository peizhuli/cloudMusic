<template>
    <div class="app-content">
        <div class="profile-info">
          <div>
            <input type="hidden" :id="user.profile.userId" />
            <img class="profile-avatar" :src="user.profile.userId ? user.profile.avatarUrl : defaultAvatar" />
            <p>{{ user.profile.userId ? user.profile.nickname : '未登录' }}</p>
          </div>
          <Row class="account-count-box">
            <Col span="6">
              <div>动态</div>
              <div>{{ eventCount }}</div>
            </Col>
            <Col span="6">
            <div>关注</div>
            <div>{{ followsCount }}</div>
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
            <Cell title="我的消息" >
              <Icon type="ios-mail-outline" slot="icon" />
            </Cell>
          </CellGroup>
          <CellGroup class="list-group">
            <Cell title="VIP会员"></Cell>
            <Cell title="商城">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell title="在线听歌免流量">
              <Icon type="ios-briefcase-outline" slot="icon" />
            </Cell>
          </CellGroup>
          <CellGroup class="list-group">
            <Cell title="设置">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell title="扫一扫">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell title="主题换肤">
              <Icon type="ios-cart-outline" slot="icon" />
            </Cell>
            <Cell title="夜间模式">
              <Icon type="ios-cart-outline" slot="icon" />
              <Switch v-model="openNightModel" slot="extra" />
            </Cell>
            <Cell title="退出登录">
              <div @click="logout()">
                <Icon type="ios-cart-outline" />
              </div>
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
    this.getUserInfo();
//    this.profileBackUrl = "url(" + this.user.profile.backgroundUrl + ") center no-repeat";
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
    getUserInfo: function() {
      console.log(this.user);
    },
    goCollections: function(id) {
      this.$router.push({path: '/collection', query: { id: id }});
    },
    goPlayRecord: function(id) {
      this.$router.push({path: '/playRecord', query: { id: id }})
    },
    logout: function () {
        let vm = this;
      service.logout().then(function (res) {
        if(res.code == 200) {
            alert('退出登录成功！');
            util.removeLocalStore('userName');
            vm.SET_PROFILE({});
        }
      });
    }
	}
}
</script>

<style scoped>
  .list-group {
    margin-top: 1rem;
    font-size: 1.2rem;
    background: #fff;
  }
  .account-count-box {
    text-align: center;
  }
</style>
