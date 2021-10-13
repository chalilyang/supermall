import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/index')
const shopCart = () => import('views/shopcart/index')
const User = () => import('views/user/index')
const Category = () => import('views/category/index')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: shopCart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
