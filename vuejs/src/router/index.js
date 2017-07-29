import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/containers/Home'
import NutritionFacts from '@/components/containers/NutritionFacts'
import ShoppingList from '@/components/containers/ShoppingList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/list',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/facts',
      name: 'NutritionFacts',
      component: NutritionFacts
    }
  ]
})
