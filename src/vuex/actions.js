/**
 * Created by Y on 2018/10/25.
 */
import service from '../service/service';
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
        console.log(res);
        commit('SET_LIKE_MUSIC_LIST', res.ids);
      })
    }
  }
}
