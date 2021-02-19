import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Card0 from '../components/Card0'
import Card1 from '../components/Card1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card0',
      component: Card0
    },
    {
      path: '/card1',
      component: Card1
    }
  ]
})
