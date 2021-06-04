import { RouteConfig } from 'vue-router';



const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'admin', component: () => import('views/admin/AdminPanel.vue') },
      { path: 'producto', component: () => import('views/producto/ProductoPanel.vue') },
      { path: 'veterinario', component: () => import('views/veterinario/VeterinarioPanel.vue')},
      { path: 'veterinario/update/:id', component: () => import('views/veterinario/VeterinarioUpdate.vue')},
      { path: 'veterinario/find/:id', component: () => import('views/veterinario/VeterinarioFind.vue')},
      { path: 'veterinario/find/:id/agenda', component: () => import('views/veterinario/VeterinarioVerAgenda.vue')},
      { path: 'cita/:id', component: () => import('views/cita/CitaVer.vue')},
      { path: 'user', component: () => import('views/user/UserPanel.vue') },
      { path: 'user/citas', component: () => import('views/cita/CitaPanel.vue') },
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
