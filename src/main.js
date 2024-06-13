import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index.js' // стор
import VueRouter from 'vue-router' // роутер
// страницы
import MainPage from '@/pages/MainPage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'
import ArticlesFilter from '@/pages/ArticlesFilter.vue'
import ArticlesSort from '@/pages/ArticlesSort.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

import './styles.css'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/ArticlesPage',
      name: 'ArticlesPage',
      component: ArticlesPage
    },
    {
      path: '/ArticlesFilter',
      name: 'ArticlesFilter',
      component: ArticlesFilter
    },
    {
      path: '/ArticlesSort',
      name: 'ArticlesSort',
      component: ArticlesSort
    },
    {
      path: '/BlogPage',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/ProjectsPage',
      name: 'ProjectsPage',
      component: ProjectsPage
    },
    {
      path: '/ProjectPage',
      name: 'ProjectPage',
      component: ProjectPage
    },
    // если битая ссылка. не найдена в массиве routes. 404
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    }
  ]
})

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
  router
}).$mount('#app')
