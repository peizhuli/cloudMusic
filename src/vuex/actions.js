/**
 * Created by Y on 2018/10/25.
 */
import service from '../service/service';
import util from '../utils/util';
export default {
  async getUser({state,commit}) {
    if(localStorage.getItem('user')) {
      let userId = JSON.parse(localStorage.getItem('user')).profile.userId;
      await service.getUserDetailInfo(userId).then(function(res) {
        commit('SET_PROFILE', res)
      })
    }
  },
  async getPlayList({state, commit}) {
    if(localStorage.getItem('user')) {
      let userId = JSON.parse(localStorage.getItem('user')).profile.userId;
      await service.getUserPlayLists(userId,0).then(function(res) {
        commit('SET_PLAY_LIST', res);
      })
    }
  },
  async getLikeMusicList({state, commit}) {
    if(localStorage.getItem('user')) {
      let userId = JSON.parse(localStorage.getItem('user')).profile.userId;
      await service.getLikeMusicList(userId).then(function(res) {
        commit('SET_LIKE_MUSIC_LIST', res.ids);
      })
    }
  },
  async getUserSubcount({state,commit}) {
    if(localStorage.getItem('user')) {
      let userId = JSON.parse(localStorage.getItem('user')).profile.userId;
      await service.getUserDetailInfo(userId).then(function(res) {
        commit('GET_USER_INFO_COUNT', res.profile)
      })
    }
  },
  async getPlayRecords({state, commit}) {
    if(localStorage.getItem('user')) {
      let userId = JSON.parse(localStorage.getItem('user')).profile.userId;
      await service.getUserPlayLists(userId,0).then(function(res) {
        commit('SET_PLAY_LIST', res.allData)
      })
    }
  },
  async logout({state, commit}) {
    if(localStorage.getItem('user')) {
      await service.logout().then(function() {
        util.removeLocalStore('user');
        util.delCookie('tokenJsonStr');
        commit('LOG_OUT');
      })
    }
  }
}
