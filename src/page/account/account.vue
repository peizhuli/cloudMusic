<template>
    <div class="app-content">
        <div class="profile-info">
          <div>
            <input type="hidden" :id="profile.userId" />
            <img class="profile-avatar" :src="profile.avatarUrl" />
            <p>{{ profile.nickname }}</p>
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
          </CellGroup>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted() {
//    this.getUserInfo();
    this.profileBackUrl = "url(" + this.profile.backgroundUrl + ") center no-repeat";
  },
    data() {
        return {
          profileBackUrl: "",
          openNightModel: false
        }
    },
	computed: {
	 ...mapState(['profile', 'followedsCount', 'followsCount', 'eventCount'])
	},
	methods: {
    getUserInfo: function() {
      console.log(this.profile);
    },
    goCollections: function(id) {
      this.$router.push({path: '/collection', query: { id: id }});
    },
    goPlayRecord: function(id) {
      this.$router.push({path: '/playRecord', query: { id: id }})
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
</style>
