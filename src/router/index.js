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
import profileMusic from '@/page/account/profileMusic';

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

import DJs from '@/page/DJs/DJs';
import privateFM from '@/page/DJs/privateFM'

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
      path: '/profileMusic',
      name: 'profileMusic',
      component: profileMusic,
      meta: {
        title: '我的音乐'
      }
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
      component: Singer
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
      component: songsCategoryDetail
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
    }
  ]
});

routes.beforeEach((to, from, next) => {
  const profile = store.state.profile ? store.state.profile : localStorage.getItem('profile');
  if(to.meta.requireAuth) {
    if(profile.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: '/login'}
      });
    }
  } else {
    next();
  }
});

export default routes;
