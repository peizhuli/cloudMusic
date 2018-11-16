<template>
  <div class="app-content">
    <div class="account-manage-box">
      <ul class="account-list">
        <li class="account-item">
          <Icon type="ios-musical-notes-outline" size="50" color="#d6413d" />
          <span>
              本地音乐<span class="manage-count"> (5)</span>
          </span>
        </li>
        <li class="account-item" @click="$router.push('/playRecord')">
          <Icon type="ios-stats-outline" size="50" color="#d6413d" />
          <span>
              最近播放<span class="manage-count"> ({{ recentPlayListCount }})</span>
              <Icon type="md-calendar" size="30" color="#d6413d"></Icon>
          </span>
        </li>
        <li class="account-item">
          <Icon type="ios-radio" size="50" color="#d6413d" />
          <span>
              我的电台<span class="manage-count"> ({{ djCount }})</span>
          </span>
        </li>
        <li class="account-item" @click="$router.push({path: '/collection', query: { id: user.profile.userId }})">
          <Icon type="ios-person-add-outline" size="50" color="#d6413d" />
          <span>
              我的收藏<span class="manage-count"> ({{ collectionCount }}) </span>
          </span>
        </li>
      </ul>
    </div>
    <div class="created-play-box">
      <div class="created-play-header">
        <Icon type="ios-arrow-down" size="30" color="#999" />
        <span>创建的歌单({{ createPlayListCount }})</span>
        <Icon type="ios-settings-outline" size="30" color="#999" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import service from '../../service/service';
  export default {
      mounted() {
          this.getUserSubcount();
          this.getUserPlayLists();
      },
      data() {
          return {
            recentPlayListCount: 0,
            collectionCount: 0,
            djCount: 0,
            createPlayListCount: 0,
          }
      },
      computed: {
        ...mapState(['user'])
      },
    methods: {
      getUserPlayLists: function () {
        let vm = this;
        service.getUserPlayLists(vm.user.profile.userId).then(function (res) {
          console.log('最近播放',res);
          vm.recentPlayListCount = res.weekData.length;
        })
      },
      getUserSubcount: function () {
        let vm = this;
        service.getUserSubcount().then(function (res) {
          console.log('用户信息',res);
        })
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
