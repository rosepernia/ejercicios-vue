<template>
<div class="centrado">
  <div v-if="login" class="fondo">
    <label>Usuario:</label>
    <xInput id="x1" etiqueta="Usuario"  exp=".*" />
    <label>Password:</label>
    <xInput id="x2" etiqueta="Password" exp=".*"/>
    <button @click="registro">Acceder</button>
  </div>

  <div v-if="!login" class="fondo">
    <img class="avatar" src="../assets/avatar.png" />
    <span v-html="nombreUsuario"></span>
    <button @click="salir">Salir</button>
  </div> 
</div>
</template>

<script>
import { ref } from "vue";
import xInput from "@/components/xInput.vue";

export default {
  name: "Login",
  components: {
    xInput,
  },
  props: {},
  setup() {
    let nombreUsuario = ref("")
    let password = ref("")
    let login = ref(true)

    const registro = () => {
      nombreUsuario.value=x1.lastChild.value
      login.value = false
 
    }

    const salir = () => {
      login.value = true
    }

    return {
      registro,
      salir,
      login,
      nombreUsuario,
      password,
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