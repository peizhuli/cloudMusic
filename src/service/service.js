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
  getUserState: (id) => request.get('/user/detail?uid=' + id, null, BASEAPI),
  getUserDetailInfo: (uid) => request.get('/user/detail?uid=' + uid, null, BASEAPI),
  //获取用户i小，歌单，收藏等
  getUserSubcount: () => request.get('/user/subcount', null, BASEAPI),
  //获取用户歌单
  getUserSongs: (uid) => request.get('/user/playlist?uid=' + uid, null, BASEAPI),
  //获取用户电台
  getUerDjLists: (uid) => request.get('/user/dj?uid=' + uid, null, BASEAPI),
  //获取用户关注列表
  getUserFocusList: (uid, limit=30, offset=0) => request.get('/user/follows?uid=' + uid + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //获取用户粉丝列表
  getUserFans: (uid, limit=30, offset=0) => request.get('/user/followeds?uid=' + uid + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //获取用户播放记录（type=1，返回一周记录， type=0返回全部记录）
  getUserPlayLists: (uid, type = 1) => request.get('/user/record?uid=' + uid + '&type=' + type, null, BASEAPI),
  //获取用户动态
  getUserNews: (uid) => request.get('/user/event?uid=' + uid, null, BASEAPI),
  //签到
  dailySign: (type=1) => request.get('/daily_signin?type=' + type, null, BASEAPI),
  //获取动态消息
  getDynamicNews: () => request.get('/event', null, BASEAPI),

  //banner
  getBanner: () => request.get('/banner', null, BASEAPI),
  //搜索（type: 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频）
  searMusic: (keyword, type=1, limit=30, offset=0) => request.get('/search?keywords=' + keyword + '&type=' + type + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //热搜
  getHotSearch: () => request.get('/search/hot', null, BASEAPI),
  //热搜建议
  hotSearchSuggest: (keyword) => request.get('/search/suggest?keywords=' + keyword, null, BASEAPI),
  //多重搜索
  mutiSearch: (keywords) => request.get('search/multimatch?keywords=' + keywords, null, BASEAPI),

  //歌手分类（华语、欧美...）
  getArtisType: (cat, limit=30, offset=0) => request.get('/artist/list?cat=' + cat + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //歌单分类
  getPlayList: () => request.get('/playlist/catlist', null, BASEAPI),
  //热门歌单分类
  getHotPlayList: () => request.get('/playlist/hot', null, BASEAPI),
  //歌单（网友精选碟）
  getWellChosenList: (cat='全部', limit=20, offset=0, order='hot') => request.get('/top/playlist?cat=' + cat + '&limit=' + limit + '&offset=' + offset + '&order=' + order, null, BASEAPI),
  //精品歌单（before：取上一页最后一个歌单的updateTime获取下一页数据）
  getWellPlayList: (before, limit) => request.get('/top/playlist/highquality?before=' + before + '&limit=' + limit, null, BASEAPI),
  //获取歌单相关推荐
  getRelativePlayList: (id) => request.get('/related/playlist?id=' + id, null, BASEAPI),
  //获取歌单详情
  getPlayDetailInfo: (id) => request.get('/playlist/detail?id=' + id, null, BASEAPI),
  //获取歌曲详情
  getSongDetail: (id) => request.get('/song/detail?ids=' + id, null, BASEAPI),
  //获取歌单播放地址
  getPlayUrl: (id) => request.get('/song/url?id=' + id, null, BASEAPI),
  //获取歌词
  getIcy: (id) => request.get('/lyric?id=' + id, null, BASEAPI),
  //歌曲评论
  getMusicComment: (id, limit=20, offset=0) => request.get('/comment/music?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //音乐是否可用
  checkCanPlay: (id) => request.get('/check/music?id=' + id, null, BASEAPI),
  //添加歌曲到歌单 或 删除歌单中的歌曲 (op: 从歌单增加单曲为 add, 删除为 del、 pid: 歌单 id、  tracks: 歌曲 id,可多个,用逗号隔开)
  playListOparation: (option, id, tracks) => request.get('/playlist/tracks?op=' + option + '&pid=' + id + '&tracks=' + tracks, null, BASEAPI),
  //收藏/取消收藏歌单（type：1:收藏,2:取消收藏）
  toggleCollectMusic: (type, id) => request.get('/playlist/subscribe?t=' + type + '&id=' + id, null, BASEAPI),
  //喜欢的音乐列表
  getLikeMusicList: (id) => request.get('/likelist?uid=' + id, null, BASEAPI),
  //喜欢/取消喜欢音乐
  likeMusic: (IsLike, id) => request.get('/like?id=' + id, null, BASEAPI),
  //(删除)评论 (t=1 评论， t=0 删除评论) type: 0: 歌曲 1: mv,2: 歌单,3: 专辑,4: 电台,5: 视频
  comment: (t, id, type, content) => request.post('/comment?t=' + t + '&type=' + type + '&id=' + id + '&content=' + content, null, BASEAPI),
  //给评论点赞 (id : 资源 id, 如歌曲 id,mv id、 cid : 评论 id、 t : 是否点赞 ,1 为点赞 ,0 为取消点赞、 tpye: type: 0: 歌曲 1: mv,2: 歌单,3: 专辑,4: 电台,5: 视频)
  likeComment: (t, type, id, commentId ) => request.get('comment/like?t=' + t + '&type=' + type + '&id=' + id + '&cid=' + commentId, null,BASEAPI),
  //歌单评论
  getPlayListComment: (id, limit=30, offset=0) => request.get('/comment/playlist?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //专辑评论
  getAlbumComment: (id, limit=30, offset=0) => request.get('/comment/album?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //MV 评论
  getMVComment: (id, limit=30, offset=0) => request.get('/comment/mv?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //电台评论
  getFMComment: (id, limit=30, offset=0) => request.get('/comment/dj?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //视频评论
  getVideoComment: (id, limit=30, offset=0) => request.get('/comment/video?id=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //热门评论
  getHotComments: (type, id) => request.get('/comment/hot?id=' + id + '&type=' + type, null, BASEAPI),

  //热门歌手
  getHotSinger: (limit=30, offset=0) => request.get('/top/artists?offset=' + offset + '&limit=' + limit, null, BASEAPI),
  //获取专辑内容
  getAlbum: (id) => request.get('/album?id=' + id, null, BASEAPI),
  //获取歌手单曲
  getArtistSongs: (id) => request.get('/artists?id=' + id, null, BASEAPI),
  //获取歌手MV
  getArtistMV: (id) => request.get('/artist/mv?id=' + id, null, BASEAPI),
  //获取歌手专辑
  getArtistAlbum: (id) => request.get('/artist/album?id=' + id, null, BASEAPI),
  //获取歌手描述
  getArtistInfo: (id) => request.get('/artist/desc?id=' + id, null, BASEAPI),
  //获取相似歌手
  getSimilarArtist: (id) => request.get('/simi/artist?id=' + id, null, BASEAPI),
  //获取相似歌曲
  getSimilarSongs: (id) => request.get('/simi/song?id=' + id, null, BASEAPI),
  //获取相似歌单
  getSimilarASongs: (id) => request.get('/simi/playlist?id=' + id, null, BASEAPI),
  //获取相似MV
  getSimilarMV: (id) => request.get('/simi/mv?mvid=' + id, null, BASEAPI),
  //每日推荐歌单
  getDailyRecomment: () => request.get('/recommend/resource?time=' + new Date(), null, BASEAPI),
  //每日推荐歌曲
  getDailyRecommendSongs: () => request.get('/recommend/songs', null, BASEAPI),
  //最新MV
  getNewMV: (limit=30) => request.get('/mv/first?limit=' + limit, null, BASEAPI),
  //私人FM
  getPrivateFM: () => request.get('/personal_fm', null, BASEAPI),

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
  getTopMV: (limit=10, offset=0) => request.get('top/mv?limit=' + limit + '&offset=' + offset, null, BASEAPI),
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
  //排行榜 单内容简介
  getMusicTopBrief: () => request.get('/toplist/detail', null, BASEAPI),
  //歌手榜
  getTopSinger: () => request.get('/toplist/artist', null, BASEAPI),
  //云音乐热歌榜
  getCloudHotMusic: (id = 1) => request.get('/top/list?idx=' + id, null, BASEAPI),

  //电台
  //电台-推荐
  getDJRecommend: () => request.get('/dj/recommend', null, BASEAPI),
  //电台-分类
  getDJType: () => request.get('/dj/catelist', null, BASEAPI),
  //电台分类推荐
  getDJCategoryRecommend: (id) => request.get('/dj/recommend/type?type=' + id, null, BASEAPI),
  //电台订阅列表
  getDJSubList: () => request.get('/dj/sublist', null, BASEAPI),
  //电台付费精选
  getDJPayList: (limit=30, offset=0) => request.get('/dj/paygift?limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //电台-详情
  getDJDetail: (id) => request.get('/dj/detail?rid=' + id, null, BASEAPI),
  //电台-节目
  getDJPrograme: (id, limit=30, offset=0) => request.get('/dj/program?rid=' + id + '&limit=' + limit + '&offset=' + offset, null, BASEAPI),
  //电台url
  getDJUrl: (id) => request.get('/song/url?id=' + id, null, BASEAPI)
  //歌曲详情


};
export default API;
