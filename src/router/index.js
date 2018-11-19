import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store';

import Home from '@/page/home/home';
import Search from '@/page/search/search';

import Login from '@/page/login/login';
import Account from '@/page/account/account';
import Person_Collection from '@/page/account/personal_collection';
import Person_PlayRecord from '@/page/account/personal_playRecord';
import Profile from '@/page/account/profile';
import Profile_Event from '@/page/account/profile_event';
import profileMusic from '@/page/account/profileMusic';
import Comments from '@/page/songs/comments';
import Friends from '@/page/account/friends';
import Events from '@/page/account/friends_event';
import Follows from '@/page/account/friends_follows';

import Singer from '@/page/singers/singers';
import ArtistPlay from '@/page/singers/artistPlay';
import artistType from '@/page/singers/artistType'
import artistSubType from '@/page/singers/artistSubType'
import PlayMusic from '@/page/singers/playMusic';
import PlayMV from '@/page/MVs/playMV';
import TopMV from '@/page/MVs/rankMV';
import MV from '@/page/MVs/MV';
import MVDetail from '@/page/MVs/MVDetail';
import TopList from '@/page/songs/topList';

import Album from '@/page/album/album';
import AlbumDetail from '@/page/album/albumDetail';
import songsCategory from '@/page/songs/songsCategory';
import songsCategoryDetail from '@/page/songs/songsCategoryDetail';
import dailyRecommendSongs from '@/page/songs/dailyRecommendSongs';
import cloudHotMusic from '@/page/songs/cloudHotMusic';

import DJs from '@/page/DJs/DJs';
import privateFM from '@/page/DJs/privateFM';
import DJCategory from '@/page/DJs/DJ_category';
import DJCategoryDetail from '@/page/DJs/DJ_category_detail';
import DJDetail from '@/page/DJs/DJ_detail';
import PlayDJ from '@/page/DJs/playDJ';

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        noHeader: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        requireAuth: true,
        title: '个人中心'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        noHeader: true
      }
    },
    {
      path: '/profileEvent',
      name: 'profileEvent',
      component: Profile_Event,
      meta: {
        title: '动态'
      }
    },
    {
      path: '/profileMusic',
      name: 'profileMusic',
      component: profileMusic,
      meta: {
        title: '我的音乐'
      }
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends,
      children: [
        {
          path: 'events',
          name: 'events',
          component: Events,
        },
        {
          path: 'follows',
          name: 'follows',
          component: Follows,
        }
      ]
    },
    {
      path: '/collection',
      name: 'collection',
      component: Person_Collection,
      meta: {
        requireAuth: true,
        title: '收藏列表'
      }
    },
    {
      path: '/playRecord',
      name: 'playRecord',
      component: Person_PlayRecord,
      meta: {
        requireAuth: true,
        title: '播放记录'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        noHeader: true,
        title: '搜索'
      }
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      meta: {
        title: '歌手分类'
      }
    },
    {
      path: '/artistPlay',
      name: 'ArtistPlay',
      component: ArtistPlay,
      meta: {
        title: '歌手信息'
      }
    },
    {
      path: '/artistType',
      name: 'artistType',
      component: artistType,
      meta: {
        title: '歌手分类'
      }
    },
    {
      path: '/artistSubType',
      name: 'artistSubType',
      component: artistSubType,
      meta: {
        title: '歌手分类'
      }
    },
    {
      path: '/playMusic',
      name: 'playMusic',
      component: PlayMusic
    },
    {
      path: '/topMV',
      name: 'topMV',
      component: TopMV,
      meta: {
        title: 'MV排行榜'
      }
    },
    {
      path: '/MV',
      name: 'MV',
      component: MV,
      meta: {
        title: 'MV'
      }
    },
    {
      path: '/MVDetail',
      name: 'MVDetail',
      component: MVDetail,
      meta: {
        title: 'MV详情'
      }
    },
    {
      path: '/playMV',
      name: 'playMV',
      component: PlayMV
    },
    {
      path: '/topList',
      name: 'topList',
      component: TopList,
      meta: {
        requireAuth: true,
        title: '排行榜'
      }
    },
    {
      path: '/cloudHotMusic',
      name: 'cloudHotMusic',
      component: cloudHotMusic,
      meta: {
        title: '云音乐热歌榜'
      }
    },
    {
      path: '/album',
      component: Album,
      children: [
        {
          path: 'albumDetail',
          name: 'albumDetail',
          component: AlbumDetail
        }
      ]
    },
    {
      path: '/songsCategory',
      name: 'songsCategory',
      component: songsCategory
    },
    {
      path: '/songsCategoryDetail',
      name: 'songsCategoryDetail',
      component: songsCategoryDetail,
      meta: {
        title: '歌单详情'
      }
    },
    {
      path: '/dailyRecommendSongs',
      name: 'dailyRecommendSongs',
      component: dailyRecommendSongs,
      meta: {
        requireAuth: true,
        title: '每日推荐歌曲'
      }
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments,
      meta: {
        title: '歌曲评论'
      }
    },
    {
      path: '/DJs',
      name: 'DJs',
      component: DJs,
      meta: {
        requireAuth: true,
        title: '电台'
      }
    },
    {
      path: '/privateFM',
      name: 'privateFM',
      component: privateFM,
      meta: {
        requireAuth: true,
        title: '私人FM'
      }
    },
    {
      path: '/DJCategory',
      name: 'DJCategory',
      component: DJCategory,
      meta: {
        title: '电台分类'
      }
    },
    {
      path: '/DJCategoryDetail',
      name: 'DJCategoryDetail',
      component: DJCategoryDetail,
      meta: {
        title: '电台分类推荐'
      }
    },
    {
      path: '/DJDetail',
      name: 'DJDetail',
      component: DJDetail,
      meta: {
        title: '电台详情'
      }
    },
    {
      path: '/playDJ',
      name: 'playDJ',
      component: PlayDJ,
      meta: {
        title: '电台详情'
      }
    }
  ]
});

routes.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'));
  if(to.meta.requireAuth && !user.profile) {
    next(false);
    routes.push('/login');
  } else {
    next();
  }
});

export default routes;
