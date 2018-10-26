import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home/home';
import Login from '@/page/login/login';
import Account from '@/page/account/account';

import Album from '@/page/album/album';
import AlbumDetail from '@/page/album/albumDetail'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account',
      name: 'account',
      component: Account
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
    }
  ]
})
