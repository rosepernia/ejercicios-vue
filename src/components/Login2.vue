<template>
<div class="centrado">
  <!-- <div v-if="login" > -->
  <div class="fondo">
    <label>Email:</label>
    <input v-model="email" placeholder="email"/> <br>
    <label>Password:</label>
    <input v-model="password" placeholder="password"/><br>
    <button @click="registro">Login</button>
    <div>{{usuario}}</div>
  </div> 

  <!-- </div> -->

  <!-- <div v-if="!login" >
    <img class="avatar" src="../assets/avatar.png" />
    <span v-html="nombreUsuario"></span>
    <button @click="salir">Salir</button>
  </div>  -->
</div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex"
export default {
  name: "Login2",
  props: {},

  setup() {
    const store= useStore()
    let email=ref("")
    let password=ref("")
    let usuario=computed(()=>{
      return store.getters.getUser
    })

    function registro(){
      console.log("estoy dentro")
       fetch('http://localhost:8081/api/login',{
        method:'POST',
        body: JSON.stringify(
        {email:email.value,
        password:password.value,
        }),
        headers: {'Content-type' :'application/json'}
       }) 
        .then(resp=>resp.json())
        .then(datos=>{
           if(datos) store.commit('setUser',datos)
        }) 
      }
  

    return {
      email,
      password,
      registro,
      usuario
      
    }
  },
}
</script>


<style scoped lang="scss" >


#texto {
  width: 120px;
}
.rojo {
  background: rgb(226, 153, 153);
  border:2px;
  border-radius: 6px;
  width: 90px;
}
.verde {
  background: rgb(172, 236, 172);
  border:2px;
  border-radius: 6px;
  width: 90px;
}

button {
  border: 2px solid rgb(175, 113, 199);
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}

.fondo {
  border: 10px solid #6bbfe6;
  background: #9cc3da;
  max-width: 600px;
  max-height: 220px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
