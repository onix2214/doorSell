import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Catalog from '@/views/Catalog.vue'
import Contacts from '@/views/Contacts.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/Home', name: 'Home', component: Home},
  {path: '/Catalog', name: 'Catalog', component: Catalog},
  {path: '/AboutUs', name: 'AboutUs', component: AboutUs},
  {path: '/Contacts', name: 'Contacts', component: Contacts},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
