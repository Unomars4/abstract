import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RandomChapter from '@/views/RandomnessView.vue';
import WeatherDashboard from '@/views/WeatherDashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/randomness',
      name: 'randomness',
      component: RandomChapter,
    },
    {
      path: '/weather-board',
      name: 'weather dashboard',
      component: WeatherDashboard,
    },
  ],
});

export default router;
