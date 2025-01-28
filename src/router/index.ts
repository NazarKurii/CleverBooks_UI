import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '@/views/AccountView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

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
      ],
    },
  ],
})

export default router
