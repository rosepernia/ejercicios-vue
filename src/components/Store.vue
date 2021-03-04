<template>
 <div>
   <h1>Store</h1>
   
    <div class="centrado">
      <div v-if="login" class="fondo">
        <input v-model="nombre" placeholder="Nombre"/><br>
        <input v-model="apellidos" placeholder="Apellidos"/><br>
        <button @click="login">Login</button><br>
        <button @click="logout">Logout</button><br>
        <button @click="aleatorio">Aleatorio</button>
          <span><Userdata/></span>
       </div> 
     
    </div>
 </div>
</template>


<script>
import { ref} from "vue"
import Userdata from '@/components/Userdata'
import { useStore } from "vuex"

export default {
  name: "Store",
  components:{
    Userdata
  },
  props: {},
  setup() {
    const store= useStore()
    let apellidos=ref("")
    let nombre=ref("")

    function login(){
      let user={
        nombre: nombre.value,
        apellidos: apellidos.value
      }
      store.commit('setUser',user)

    }

      function logout(){
        let user={
          
        }
        store.commit('setUser',user)

    }

      function aleatorio(){
        store.dispatch('fetchUsers')

    }
      
    
    return {
       nombre,
       apellidos,
       login,
       logout,
       aleatorio 
      
    }
  },
}
</script>

<style scoped lang="scss" >
.centrado{
 display: flex;
  justify-content: center;
}
.fondo {
  border: 10px solid #6bbfe6;
  background: #9cc3da;
  height: 270px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
span{

  background: rgb(172, 236, 172);
}

button {
  margin-top:20px;
  border: 1px solid white;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color:white;
}

.avatar{
  width: 100px;
  height: 100px;
}
</style>