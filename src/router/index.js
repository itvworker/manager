import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {
        name: 'home'
      },
      component: function(resolve) {
        require(['@/view/index'], resolve)
      },
      children: [
        {
          path: 'index',
          name: 'home',
          component: function(resolve) {
            require(['@/view/home/index'], resolve)
          }
        }, {
          path: 'table',
          name: 'table',
          component: function(resolve) {
            require(['@/view/table/table.vue'], resolve)
          }
        }
      ]
    }
  ]
})
