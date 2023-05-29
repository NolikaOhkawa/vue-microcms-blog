import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        // scripts: [{ src: 'https://example.com/script.js', async: true }],
        // links: [{ rel: 'stylesheet', href: '../../dist/output.css' }]
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/articles/:id',
      name: 'article-detail',
      component: ArticleDetail
    },
    {}
  ]
})

export default router
