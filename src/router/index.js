import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejemplo1 from '../views/Ejemplo1.vue'
import Ejemplo3 from '../views/Ejemplo3.vue'
import Ejemplo4 from '../views/Ejemplo4.vue'
import Ejemplo5 from '../views/Ejemplo5.vue'

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
  },
  {
    path: '/ejemplo3',
    name: 'Ejemplo3', 
    component: Ejemplo3
  },
  {
    path: '/ejemplo4',
    name: 'Ejemplo4', 
    component: Ejemplo4
  },
  {
    path: '/ejemplo5',
    name: 'Ejemplo5', 
    component: Ejemplo5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
