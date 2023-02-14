import { createRouter, createWebHistory } from 'vue-router';
// import LandingPage from '../views/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'LandingPage',
    //   component: LandingPage,
    // },
    {
      path: '/download',
      name: 'Download',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/list',
      name: 'List',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
