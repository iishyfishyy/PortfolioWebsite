// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Work from './components/Work'
//import Shots from './components/Shots'
import Contact from './components/Contact'
import Carousel3d from 'vue-carousel-3d'
import quickMenu from 'vue-quick-menu'
import VModal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(Carousel3d);
Vue.component(quickMenu.name,quickMenu);
Vue.use(VModal);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Work },
    { path: '/contact', component: Contact },
  ]
});

require('../static/css/mycss.css');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  data: {
    count:3,
    icons:["fa fa-home","fa fa-code", "fa fa-weixin"],
    list:["/","/projects","/contact"],
    backgroundColor:'#ffffff',
    color:'#000000',
    position:'top-right',
    isOpenNewTab:false
  },
  methods: {

  },
  template: `
    <div id="app">

    <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :backgroundColor=backgroundColor :position=position class="menuelement"></quick-menu>

      <router-view></router-view>

    </div>
  `
}).$mount('#app')
