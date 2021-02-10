import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejemplo1 from '../views/Ejemplo1.vue'

const routes = [
  {
    path: '/',
    name: 'Home', //no es obligatorio es un identificativo
    component: Home //es la vista que quiero cargar cuando pregunte por path
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') //lo puedo importar arriba (linea 2) 
    //o importarlo dentro de la propiedad component
  },
  {
    path: '/ejemplo1',
    name: 'Ejemplo1', 
    component: Ejemplo1 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router