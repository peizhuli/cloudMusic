/**
 * Created by Y on 2018/10/19.
 */

import request from './fly';
const BASEURL = 'https://www.pezhl.club';
const BASEAPI = {
  baseURL: BASEURL
};
const API = {
  loginWidthPhone: (phoneNum, password) => request.post('/login/cellphone?phone=' + phoneNum + '&password=' + password, null, BASEAPI),
  loginWidthEmail: (email, password) => request.post('/login?email=' + email + '&password=' + password, null, BASEAPI),
  logout: () => request.get('/logout', null, BASEAPI),
  getUserDetailInfo: (uid) => request.get('/user/detail?uid=' + uid, null, BASEAPI),
  //获取用户i小，歌单，收藏等
  getUserSubcount: () => request.get('/user/subcount', null, BASEAPI),

  //banner
  getBanner: () => request.get('/banner', null, BASEAPI),
  //歌单分类
  getPlayList: () => request.get('/playlist/catlist', null, BASEAPI),
  //热门歌单分类
  getHotPlayList: () => request.get('/playlist/hot', null, BASEAPI),
  //歌单（网友精选碟）
  getWellChosenList: (limit, order) => request.get('/top/playlist?limit=' + limit + '&order=' + order, null, BASEAPI),
  //精品歌单（before：取上一页最后一个歌单的updateTime获取下一页数据）
  getWellPlayList: (before, limit) => request.get('/top/playlist/highquality?before=' + before + '&limit=' + limit, null, BASEAPI),
  //获取歌单相关推荐
  getRelativePlayList: (id) => request.get('/related/playlist?id=' + id, null, BASEAPI),
  //获取歌单详情
  getPlayDetailInfo: (id) => request.get('/playlist/detail?id=' + id, null, BASEAPI),
  //获取歌单播放地址
  getPlayUrl: (id) => request.get('/song/url?id=' + id, null, BASEAPI),
  //音乐是否可用
  checkCanPlay: (id) => request.get('/check/music?id=' + id, null, BASEAPI),
  //搜索
  searchPlay: (keyword) => request.get('/search?keywords=' + keyword, null, BASEAPI),
  //热搜
  getHotSearch: () => request.get('/search/hot', null, BASEAPI),
  //热搜建议


  //热门歌手
  getHotSinger: (limit, page) => request.get('/top/artists?offset=' + page + '&limit=' + limit, null, BASEAPI),
  //获取专辑内容
  getAlbum: (id) => request.get('/album?id=' + id, null, BASEAPI),
  //获取歌手单曲
  getArtistSongs: (id) => request('/artists?id=' + id, null, BASEAPI),
  //获取歌手MV
  getArtistMV: (id) => request.get('/artist/mv?id=' + id, null, BASEAPI),
  //获取歌手专辑
  getArtistAlbum: (id) => request.get('/artist/album?id=' + id, null, BASEAPI),
  //获取歌手描述
  getArtistInfo: (id) => request.get('/artist/desc?id=' + id, null, BASEAPI),
  //获取相似歌手
  getSimilarArtist: (id) => request.get('/simi/artist?id=' + id, null, BASEAPI),
  //获取相似歌单
  getSimilarASongs: (id) => request.get('/simi/playlist?id=' + id, null, BASEAPI),
  //获取相似MV
  getSimilarMV: (id) => request.get('/simi/mv?mvid=' + id, null, BASEAPI),
  //每日推荐歌单
  getDailyRecomment: () => request.get('/recommend/resource', null, BASEAPI),
  //最新MV
  getNewMV: (limit) => request.get('/mv/first?limit=' + limit, null, BASEAPI),

  //推荐MV
  getRecommendMV: () => request.get('/personalized/mv', null, BASEAPI),
  //推荐音乐
  getRecommendMusic: () => request.get('/personalized', null, BASEAPI),
  //推荐新音乐
  getRecommendNewPlay: () => request.get('/personalized/newsong', null, BASEAPI),
  //推荐电台
  getRecommendDJ: () => request.get('/personalized/djprogram', null, BASEAPI),
  //推荐节目
  getRecommendProject: () => request.get('/program/recommend', null, BASEAPI),
  //独家放送
  getPrivateContent: () => request.get('/personalized/privatecontent', null, BASEAPI),
  //mv排行榜
  getTopMV: (limit, page) => request.get('top/mv?limit=' + limit + '&offset=' + page, null, BASEAPI),
  //获取MV数据
  getMVDetail: (mvId) => request.get('/mv/detail?mvid=' + mvId, null, BASEAPI),
  //mv地址
  getMVUrl: (mvId) => request.get('/mv/url?id=' + mvId, null, BASEAPI),
  //获取相关视频
  getRelativeVideo: (id) => request.get('/related/allvideo?id=' + id, null, BASEAPI),
  //视频详情
  getVideoUrl: (id) => request.get('/video/detail?id=' + id, null, BASEAPI),
  //排行榜
  getTop: (idx) => request.get('/top/list?idx=' + idx, null, BASEAPI),
  //歌手帮
  getTopSinger: () => request.get('/toplist/artist', null, BASEAPI),

  //电台
  //电台-推荐
  getDJRecommend: () => request.get('/dj/recommend', null, BASEAPI),
  //电台-分类
  getDJType: () => request.get('/dj/catelist', null, BASEAPI),
  //电台订阅列表
  getDJSubList: () => request.get('/dj/sublist', null, BASEAPI),
  //电台付费精选
  getDJPayList: (limit, page) => request.get('/dj/paygift?limit=' + limit + '&offset=' + page, null, BASEAPI),
  //电台-详情
  getDJDetail: (id) => request.get('/dj/detail?rid=' + id, null, BASEAPI),
  //电台-节目
  getDJPrograme: (id, limit, page) => request.get('/dj/program?rid=' + id + '&limit=' + limit + '&offset=' + page, null, BASEAPI),

  //歌曲详情


};
export default API;
