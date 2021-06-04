import { RouteConfig } from 'vue-router';



const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'admin', component: () => import('views/admin/AdminPanel.vue') },
      { path: 'veterinario', component: () => import('views/veterinario/VeterinarioPanel.vue') },
      { path: 'user', component: () => import('views/user/UserPanel.vue') },
      { path: 'user/citas', component: () => import('views/cita/CitaPanel.vue') },
      { path: 'producto', component: () => import('views/producto/ProductoPanel.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
