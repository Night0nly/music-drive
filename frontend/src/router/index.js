import Vue from 'vue'
import Router from 'vue-router'
import MyComponent from '@/components/MyComponent'
import MusicDrive from '@/components/MusicDrive'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Component',
      component: MyComponent
    },
    {
      path: '/music-drive',
      name: 'MusicDrive',
      component: MusicDrive
    }
  ]
})
