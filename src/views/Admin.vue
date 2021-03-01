<template>
<div class="centrado">
  <div class="fondo">
      <h1>Gestión idiomas</h1>
      <label>Nueva clave: </label>
      <input v-model="claves" placeholder="nombre clave"/><br>
      <label>Nueva traducción: </label>
      <textarea class="form-control" name="descripcion" rows="2" required></textarea>  
      <button @click="enviar">Guardar</button>
      <!-- <h4>Respuesta servidor:</h4>
      <span>{{respuesta.mensaje}}</span> -->
  </div>
</div> 
</template>

<script>
import {reactive,ref } from "vue";
export default {
  name: "Administrador",
  props: {},
   

  setup() {
    

    return {
     

    }
  },
}
</script>


<style>

h1{
  margin-top:10px;
  margin-bottom:30px;
}
h4{
  margin-top:50px;  
}
.centrado{
 display: flex;
  justify-content: center;
}
.fondo {
  border: 10px solid #6bbfe6;
  background: #9cc3da;
  height: 300px;
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
  width: 80px;
}

</style>
