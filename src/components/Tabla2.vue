<template>
<div class="centrado">
</div>
<table class="table table-striped" id="t">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Email</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,i) in datos" :key="i">
      <td> <p v-text="item.nombre"></p></td>
      <td><p v-text="item.apellidos"></p></td>
      <td><p v-text="item.email"></p></td>
      <td><button @click="eliminar">&#128465;</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { } from "vue"
export default {
  name: "Tabla2",
  props: {
    usuarios=Array,
  },
  setup() {
  
    
    return {
     
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
  background: #b4cedd;
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
.num{
  width: 75px;
  text-align: center;
}

</style>