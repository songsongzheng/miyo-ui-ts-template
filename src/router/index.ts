import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // TODO: 填写其他页面路由内容
  {
    // 匹配全部其他内容
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  // TODO: 自定义拦截内容

  next();
});

export default router;
