<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Concepto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Subtotal</th>
    </tr>
  </thead>
  <body>
    <tr v-for="(item,i) in datos" :key="i">
      <td>{{i}}</td>
      <td>{{item.concepto}}</td>
      <td>{{item.precio}}</td>
      <td>{{item.cantidad}}</td>
      <td>{{subtotal(item.precio,item.cantidad)}}</td>
    </tr>
  </body>
</table>
<div>TOTAL: <span>{{total}}</span></div>

</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "Tabla",
  props: {},
  setup() {
    const datos = reactive ([
      {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
      {concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
      {concepto:'Pijama unisex',cantidad:1,precio:12.50},
      {concepto:'Deportivas Nike',cantidad:1,precio:80.00}
    ])
    let total = ref(0)
  
    const subtotal = (cantidad,precio) => cantidad*precio 
    
    const calculoTotal = () => {
      datos.forEach(dato => {
        total.value+=dato.cantidad*dato.precio
        console.log(total)
      })
    } 
    
    onMounted(()=>calculoTotal()) 
    
    return {
     datos,
     subtotal,
     total,
     calculoTotal
    }
  },
}
</script>

<style>
.centrado{
 display: flex;
  justify-content: center;
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
button {
  margin-top:20px;
  border: 1px solid black;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}
.avatar{
  width: 100px;
  height: 100px;
}
</style>