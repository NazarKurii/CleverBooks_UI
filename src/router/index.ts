import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '@/views/AccountView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import HistoryView from '@/views/HistoryView.vue'
import AdressView from '@/views/AdressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/account',
      name: 'account',
      component: AccountView,
      children: [
        {
          path: 'favorites',
          name: 'favorites',
          component: FavoritesView,
        },
        {
          path: 'history',
          name: 'orderHistory',
          component: HistoryView,
        },
        {
          path: 'adress',
          name: 'adress',
          component: AdressView,
        },
      ],
    },
  ],
})

export default router
