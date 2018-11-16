// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (localStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))));
      this.$store.state.user = JSON.parse(localStorage.getItem("user"));
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("store",JSON.stringify(this.$store.state));
    });

  },
  mounted() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getPlayList');
  }
});
