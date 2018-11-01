<template>
    <div>
        <!--<input type="hidden" :id="profile.userId" />-->
        <!--<img :src="profile.avatarUrl" />-->
        <!--<p>昵称：{{ profile.nickname }}</p>-->
        <!--<p>描述：{{ profile.description }}</p>-->
        <!--<p>是否VIP：{{ profile.vipType == 0 ? '否' : '是' }}</p>-->
      <!--<div @click="goCollections(profile.userId)">个人收藏</div>-->
      <!--<div @click="goPlayRecord(profile.userId)">播放记录</div>-->
      <div class="account-manage-box">
        <ul class="account-list">
          <li class="account-item">
            <Icon type="ios-musical-notes-outline" size="50" color="#d6413d" />
            <span>
              最近收藏<span class="manage-count"> (5)</span>
            </span>
          </li>
          <li class="account-item">
            <Icon type="ios-stats-outline" size="50" color="#d6413d" />
            <span>
              最近播放<span class="manage-count"> (5)</span>
              <Icon type="md-calendar" size="30" color="#d6413d"></Icon>
            </span>
          </li>
          <li class="account-item">
            <Icon type="ios-download-outline" size="50" color="#d6413d" />
            <span>
              下载管理<span class="manage-count"> (5)</span>
            </span>
          </li>
          <li class="account-item">
            <Icon type="ios-radio" size="50" color="#d6413d" />
            <span>
              我的电台<span class="manage-count"> (5)</span>
            </span>
          </li>
          <li class="account-item">
            <Icon type="ios-person-add-outline" size="50" color="#d6413d" />
            <span>
              我的收藏<span class="manage-count"> (5) </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="created-play-box">
        <div class="created-play-header">
          <Icon type="ios-arrow-down" size="30" color="#999" />
          <span>创建的歌单(4)</span>
          <Icon type="ios-settings-outline" size="30" color="#999" />
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
mounted() {
	this.getUserInfo();
},
    data() {
        return {

        }
    },
	computed: {
	 ...mapState(['profile'])
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
  .account-manage-box {
    width: 100%;
    padding: 2%;
    text-align: left;
    font-size: 1.4rem;
    line-height: 5rem;
    color: #000;
    background: #f3f4f8;
  }
  .account-item {
    padding-left: 5rem;
    position: relative;
  }
  .account-item > i.ivu-icon {
    position: absolute;
    left: 0;
    top: 1rem;
  }
  .account-item > span {
    width: 100%;
    display: inline-block;
    border-bottom: 1px solid #ccc;
  }
  .account-item > span > i {
    float: right;
    line-height: 5rem
  }
  .manage-count {
    font-size: 1rem;
    color: #999;
  }
  .created-play-box {
    padding: 1rem 2rem;
    font-size: 1rem;
    background: #E8EAE9;
  }
</style>
