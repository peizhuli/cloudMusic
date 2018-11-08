/**
 * Created by Y on 2018/10/25.
 */

const SET_PROFILE = 'SET_PROFILE';
const SET_ACCOUNT = 'SET_ACCOUNT';
const TOGGLE_COLLECT = 'TOGGLE_COLLECT';
const SET_FOCUS_LIST = 'SET_FOCUS_LIST';
const SET_PLAY_LIST = 'SET_PLAY_LIST';
const GET_USER_FANS = 'GET_USER_FANS';
const GET_USER_FOLLOWS = 'GET_USER_FOLLOWS';
const GET_USER_INFO_COUNT = 'GET_USER_INFO_COUNT';

export default {
	[SET_PROFILE](state, profile) {
		state.profile = profile;
	},
  [SET_ACCOUNT](state, account) {
	  state.account = account;
  },
  [SET_PLAY_LIST](state, playRecords) {
	  state.playRecords = playRecords;
  },
  [TOGGLE_COLLECT](state, collectList) {
	  state.collectList = collectList;
  },
  [GET_USER_FANS](state, userFans) {
	  state.userFans = userFans;
  },
  [GET_USER_FOLLOWS](state, userFollows) {
	  state.userFollows = userFollows;
  },
  [GET_USER_INFO_COUNT](state, profile) {
	  state.followedsCount = profile.followedsCount;
	  state.followsCount = profile.followsCount;
	  state.eventCount = profile.eventCount;
  }
}
