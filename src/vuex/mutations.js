/**
 * Created by Y on 2018/10/25.
 */

const SET_PROFILE = 'SET_PROFILE';
const SET_ACCOUNT = 'SET_ACCOUNT';
const TOGGLE_COLLECT = 'TOGGLE_COLLECT';
const SET_FOCUS_LIST = 'SET_FOCUS_LIST';
const SET_PLAY_LIST = 'SET_PLAY_LIST';

export default {
	[SET_PROFILE](state, profile) {
		state.profile = profile;
	},
  [SET_ACCOUNT](state, account) {
	  state.account = account;
  },
  [TOGGLE_COLLECT](state, collectList) {
	  state.collectList = collectList;
  },
}
