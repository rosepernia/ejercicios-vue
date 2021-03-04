<template>

<div class="centrado">
  <div class="login">
   <Login2/>
  </div>
 <div class="fondo1">
     <h1>Api</h1>
      Nombre:  <input v-model="nombre" /><br>
      Apellido: <input v-model="apellido" /><br>
      Email:    <input v-model="email" /><br>
      Teléfono: <input v-model="telefono"/><br>
      Password: <input v-model="password" /><br>
      <!-- Tel. fijo: <input v-model="fijo"  placeholder="fijo"><br>
      Tel. movil: <input v-model="movil"  placeholder="movil"><br><br> -->
      <button @click="enviar">Registrar</button>
      <h4>Lista usuarios: </h4>
      <div v-for="(usuario,i) in usuarios" :key="i">
          <span>{{usuario.nombre}} | {{usuario.apellido}} | {{usuario.email}}</span>
          <button @click="eliminar(usuario._id)" class="eliminar"> Eliminar </button>
      </div>  
   </div> 
    
</div>
</template>

<script>
import {reactive,ref,onMounted } from "vue";
import Login2 from "@/components/Login2.vue"

export default {
  name: "Api",
  components: {
    Login2,
  },
  props: {},
   

  setup() {
    let usuarios=reactive([])
    let nombre=ref("")
    let apellido=ref("")
    let email=ref("")
    let password=ref("")
    let telefono=ref("")
  /*   let fijo=ref("")
    let movil=ref("") */
    let respuesta=reactive({})

     onMounted(()=> {
            listar()
        })

      function eliminar(idSeleccionado){
            fetch('http://localhost:8081/api/eliminar',{
                method:'POST',
                body: JSON.stringify({
                    id: idSeleccionado
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

      function listar(){
            fetch('http://localhost:8081/api/listar')
                .then(resp=>resp.json())
                .then(datos=>{
                    usuarios.splice(0)
                    datos.forEach(usuario => {
                        usuarios.push(usuario)
                    })
                })            
        }

      function enviar(){
       fetch('http://localhost:8081/api/nuevo',{
        method:'POST',
        body: JSON.stringify(
        {nombre:nombre.value,
        apellido:apellido.value,
        email:email.value,
        password:password.value,
        telefono:password.value
       /*  fijo:fijo.value,
        movil:movil.value */
        }),
        headers: {'Content-type' :'application/json'}
       }) 
        .then(resp=>resp.json())
        .then(datos=>listar()) 
      }

     

    return {
     respuesta,
     enviar,
     nombre,
     apellido,
     email,
     password,
     telefono,
     usuarios,
     eliminar
    /*  fijo,
     movil */

    }
  },
}
</script>


<style>


span{
  background: rgb(172, 236, 172);
}

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
.fondo1 {
  border: 10px solid #6bbfe6;
  height: 510px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
.fondo {
  border: 10px solid #6bbfe6;
  background: #9cc3da;
  height: 210px;
  width: 300px;
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
