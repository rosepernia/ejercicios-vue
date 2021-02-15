<template>
<div class="centrado">
  <div>
    <xInput id="concepto" etiqueta="Concepto"  exp=".*" />
    <xInput id="cantidad" etiqueta="Cantidad" exp="[0-9]"/>
    <xInput id="precio" etiqueta="Precio" exp="^[0-9]+([.][0-9]+)?$"/>
    <button @click="agregar">Añadir</button>
  </div>
</div>
<table class="table table-striped" id="t">
  <thead>
    <tr>
      <th>ID</th>
      <th>Concepto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Subtotal</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in datos" :key="i">
      <td>{{i}}</td>
      <td>{{item.concepto}}</td>
      <td>{{item.precio}} €</td>
      <td>{{item.cantidad}}</td>
      <td>{{item.precio*item.cantidad}} €</td>
      <td><button @click="editar">Editar</button></td>
      <td><button @click="agregar">Eliminar</button></td>
    </tr>

  </tbody>
</table>
<div class="centrado">
    <span class="total">IMPORTE TOTAL: {{total}} €</span>
</div>


</template>

<script>
import xInput from "@/components/xInput.vue"
import { reactive, computed } from "vue"

export default {
  name: "TablaInput",
  components: {
    xInput,
  },
  props: {},
  setup() {
    const datos = reactive ([
      {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
      {concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
      {concepto:'Pijama unisex',cantidad:1,precio:12.50},
      {concepto:'Deportivas Nike',cantidad:1,precio:80.00}
    ])
  

    const total = computed(() => {
      let total=0
      datos.forEach(dato => {
        total+=dato.cantidad*dato.precio
      })
      return total
    }) 
    
    const agregar = ()=>{
        let nuevo={
            concepto: concepto.lastChild.value,
            cantidad: cantidad.lastChild.value,
            precio: precio.lastChild.value
        }
        datos.push(nuevo)
    }

    const editar = (e)=>{
        console.log(e.path[2])
 
    }
    
    

    return {
     datos,
     total,
     agregar,
     editar
    }
  },
}
</script>

<style>
.centrado{
 display: flex;
  justify-content: center;
}

table {
  width: 100%;
  margin: 20px auto;
  table-layout: auto;
}

.fixed {
  table-layout: fixed;
}

table,
td,
th {
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: solid 1px;
  text-align: center;
}

button {
  margin-top:20px;
  border: 1px solid black;
  background: #9cc3da;
  border-radius: 6px;
  cursor: pointer;
  width: 80px;
}

.total{
  background: rgb(172, 236, 172);
  border:2px;
  border-radius: 6px;
  width: 400px;
}


</style>