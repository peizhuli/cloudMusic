import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home/home';
import Search from '@/page/search/search';

import Login from '@/page/login/login';
import Account from '@/page/account/account';
import Person_Collection from '@/page/account/personal_collection';
import Person_PlayRecord from '@/page/account/personal_playRecod';
import Profile from '@/page/account/profile';

import Singer from '@/page/singers/singers';
import ArtistPlay from '@/page/singers/artistPlay';
import artistType from '@/page/singers/artistType'
import PlayMusic from '@/page/singers/playMusic';
import PlayMV from '@/page/MVs/playMV';
import TopMV from '@/page/MVs/rankMV'

import Album from '@/page/album/album';
import AlbumDetail from '@/page/album/albumDetail';
import songsCategory from '@/page/songs/songsCategory';
import songsCategoryDetail from '@/page/songs/songsCategoryDetail';

import DJs from '@/page/DJs/DJs';

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
      requireAuth: true
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
      path: '/collection',
      name: 'collection',
      component: Person_Collection,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/playRecord',
      name: 'playRecord',
      component: Person_PlayRecord,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        noHeader: true
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
      component: ArtistPlay
    },
    {
      path: '/artistType',
      name: 'artistType',
      component: artistType
    },
    {
      path: '/playMusic',
      name: 'playMusic',
      component: PlayMusic
    },
    {
      path: '/topMV',
      name: 'topMV',
      component: TopMV
    },
    {
      path: '/playMV',
      name: 'playMV',
      component: PlayMV
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
      component: DJs
    }
  ]
});

routes.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    if(sessionStorage.getItem("userName")) {
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
