import Vue from 'vue'
import Router from 'vue-router'
import Controllers from './controllers'

// https://vuejs.org/v2/api/#Vue-use
Vue.use(Router)

export default new Router({

  /**
   * HTML5 History Mode
   * ref: https://router.vuejs.org/guide/essentials/history-mode.html
   */
  // mode: 'history'

  // Routes split
  routes: Controllers
})
