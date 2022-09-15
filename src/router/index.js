import { createRouter, createWebHistory } from 'vue-router'
import Provinsi from '../views/Provinsi.vue'
import RagamHias from '../views/RagamHias.vue'
import DetailBahan from '../views/DetailBahan.vue'
import DetailRagamHias from '../views/DetailRagamHias.vue'
import DetailRuang from '../views/DetailRuang.vue'
import DetailRumah from '../views/DetailRumah.vue'
import Visualisasi from '../views/Visualisasi.vue'
import RumahJoglo from '../views/RumahJoglo.vue'
import RumahLimasan from '../views/RumahLimasan.vue'
import RumahKampung from '../views/RumahKampung.vue'
import RumahTajug from '../views/RumahTajug.vue'
import RumahPanggangPe from '../views/RumahPanggangPe.vue'
import Search from '../views/Search.vue'
import UpacaraAdat from '../views/UpacaraAdat.vue'
import DetailUpacaraAdat from '../views/DetailUpacaraAdat.vue'
import DetailKomponenRumah from '../views/DetailKomponenRumah.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },

    {
      path: '/provinsi',
      name: 'provinsi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Provinsi
    },

    {
      path: '/ragamhias',
      name: 'ragamhias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RagamHias
    },

    {
      path: '/visualisasi',
      name: 'visualisasi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Visualisasi
    },
    {
      path: '/rumahjoglo',
      name: 'rumahjoglo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RumahJoglo
    },
    {
      path: '/rumahlimasan',
      name: 'rumahlimasan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RumahLimasan
    },
    {
      path: '/rumahkampung',
      name: 'rumahkampung',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RumahKampung
    },
    {
      path: '/rumahtajug',
      name: 'rumahtajug',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RumahTajug
    },
    {
      path: '/rumahpanggangpe',
      name: 'rumahpanggangpe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RumahPanggangPe
    },
    {
      path: '/detailbahan/:id',
      name: 'detailbahan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailBahan
    },
    {
      path: '/detailrumah/:id',
      name: 'detailrumah',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailRumah
    },
    {
      path: '/detailragamhias/:id',
      name: 'detailragamhias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailRagamHias
    },
    {
      path: '/detailruang/:id',
      name: 'detailruang',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailRuang
    },
    {
      path: '/search/:id',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Search
    },
    {
      path: '/upacaraadat',
      name: 'upacaraadat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UpacaraAdat
    },
    {
      path: '/detailupacaraadat/:id',
      name: 'detailupacaraadat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailUpacaraAdat
    },
    {
      path: '/detailkomponenrumah/:id',
      name: 'detailkomponenrumah',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailKomponenRumah
    },
    
  ]
})

export default router
