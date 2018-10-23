import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import layer from '@/page/layer/layer'
// import forms from '@/page/forms/forms'
// import table from '@/page/table/table'
// import notice from '@/page/notice/notice'
// import plugin from '@/page/plugin/plugin'

import Home from '@/page/home/home';
import Album from '@/page/album/album'
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
    // {
    //   path: '/layer',
    //   name: 'layer',
    //   component: layer
    // },
    // {
    //   path: '/forms',
    //   name: 'forms',
    //   component: forms
    // },
    // {
    //   path: '/table',
    //   name: 'table',
    //   component: table
    // },
    // {
    //   path: '/notice',
    //   name: 'notice',
    //   component: notice
    // },
    // {
    //   path: '/plugin',
    //   name: 'plugin',
    //   component: plugin
    // }
  ]
})
