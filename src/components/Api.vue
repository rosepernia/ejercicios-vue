<template>
<div class="centrado">
 <div class="fondo">
     <h1>Api</h1>
     <label>Nombre:</label>
     <input v-model="nombre" placeholder="nombre"/><br>
      Apellido:<input v-model="apellido" placeholder="apellido"/><br>
      Email:<input v-model="email" placeholder="email"/><br>
      <!-- Tel. fijo: <input v-model="fijo"  placeholder="fijo"><br>
      Tel. movil: <input v-model="movil"  placeholder="movil"><br><br> -->
      <button @click="enviar">Guardar</button>
      <!-- <h4>Respuesta servidor:</h4>
      <span>{{respuesta.mensaje}}</span> -->
  </div>
  <!-- <div v-if="mostrar">    -->  
 
  <table class="table table-striped" id="t">
   <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Eliminar</th>
    </tr>
   </thead>
   <tbody>
     <tr v-for="(item,i) in usuarios" :key="i">
      <td><p {{item.nombre}}></p></td>
      <td><p {{item.apellido}}></p></td>
      <td><p {{item.email}}></p></td>
      <td><button @click="eliminar">&#128465;</button></td>
     </tr>
   </tbody>
  </table>

</div>
</template>

<script>
import {reactive,ref } from "vue";
export default {
  name: "Api",
  props: {},
   

  setup() {
    let usuarios=reactive([])
    let nombre=ref("")
    let apellido=ref("")
    let email=ref("")
  /*   let fijo=ref("")
    let movil=ref("") */
    let respuesta=reactive({})
  

    function enviar(){
       fetch('http://localhost:8081/api/nuevo',{
        method:'POST',
        body: JSON.stringify(
        {nombre:nombre.value,
        apellido:apellido.value,
        email:email.value
       /*  fijo:fijo.value,
        movil:movil.value */
        }),
        headers: {'Content-type' :'application/json'}
       }) 
        .then(resp=>resp.json())
        .then(datos=>{
            /* respuesta.mensaje=datos  */
          /*   console.log(datos) */
        })
      }
      fetch('http://localhost:8081/api/listar')
            .then(resp=>resp.json())
            .then(datos=>{
            /* respuesta.mensaje=datos  */
            console.log(datos) 
            usuarios=datos
            console.log(datos)
          })

    return {
     respuesta,
     enviar,
     nombre,
     apellido,
     email,
     usuarios
    /*  fijo,
     movil */

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
}

</style>
