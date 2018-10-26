/**
 * Created by Y on 2018/10/25.
 */

const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
const GET_LOGIN_STATE = 'GET_LOGIN_STATE';

export default {
  [SET_LOGIN_STATE](state, {account, profile}) {
    state.account = account;
    state.profile = profile;
  },
  [GET_LOGIN_STATE](state) {
    let userInfo = {
      account: state.account,
      profileInfo: state.profileInfo
    };
    return userInfo;
  }
}
