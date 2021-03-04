<template>
<div class="container ">
<!--  <div class="row justify-content-center">
   <div class="col-8 col-md-6"> -->
      <h2>Carrito &#128722;</h2> 
      <ul>
        <li v-for="(item,indice) in articulos" :key="indice">
            <Item
              :imagen="item.imagen"
              :titulo="item.nombre"
              :descripcion="item.descripcion" 
              :precio="item.precio" 
              @calcSubtotal="precioTotal"
            />
        </li>
      </ul>
      <p>
        <span >IMPORTE TOTAL: {{totalCarrito}} €</span>
      </p>
    </div>
<!--   </div>
</div>  -->
</template>

<script>
import Item from '@/components/Item.vue'
import { ref} from "vue"
import { useStore } from "vuex"
export default {
 name:'Carrito',
 components: {
       Item
   },

 setup() {
   const store= useStore()
   let totalCarrito=ref(0) 
    
    const articulos=[      
         {nombre:'SUDADERA',descripcion:'Sudadera texto gris',imagen:'./images/carr-1.png',precio: 2.20},      
         {nombre:'ZAPATOS',descripcion:'Zapato plano negro',imagen:'./images/carr-2.png',precio:8.20},      
         {nombre:'CAMISETA',descripcion:'Camiseta morada',imagen:'./images/carr-3.png',precio:4.50}    
         ]
    
    function precioTotal(subtotal){ 
      console.log(subtotal)
      console.log(totalCarrito.value)
      totalCarrito.value+=parseFloat(subtotal.value)
      console.log("esto es el total: ", totalCarrito.value) 
    } 

     /* let totalCarrito=
     store.commit('setTotal',total) */
    

    return {
      articulos,
      totalCarrito, 
      precioTotal
      
    }
  }
}
</script>



<style scoped lang="scss">
li{
  list-style:none;
}
.container{
  align-items:flex-start;
}

.fondo {
  border: 10px solid #6bbfe6;
  background: #9cc3da;
  height: 250px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
.centrado{
 display: flex;
  justify-content: center;
}


 
</style>