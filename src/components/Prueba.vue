
<template>
<div class="centrado">
  <div class="fondo">
    <h4>PEOPLE</h4>
    <select v-model="elemSelec">
    <option disabled value="">Selecciona un personaje</option>
    <option  :value="persona.imagen" v-for="(persona,i) in personas" :key="i">{{persona.nombre}} </option>
    </select>
    <p><img :src="elemSelec" class="avatar"/> <!-- <span>{{persona.nombre}}</span> --></p>
 </div> 
</div>
</template>
  
<script>
import { ref } from "vue";
export default {
  name: "Prueba",
  props: {},
  setup() {
       
       let elemSelec=ref("") 
       const personas=[
          {id:"1", nombre:"Lola", imagen:"./images/avatar1.png"},
          {id:"2", nombre:"Lucas", imagen:"./images/avatar2.png"},
          {id:"3", nombre:"Lucía", imagen:"./images/avatar3.png"},
          {id:"4", nombre:"Lolo", imagen:"./images/avatar4.png"}
       ]          
  
    return {
      personas,
      elemSelec, 
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
  height: 350px;
  width: 600px;
  padding: 60px;
  margin: 10px;
  text-align: center;
}
span{
  background: rgb(172, 236, 172);
}

.avatar{
  border:transparent;
  width: 90px;
  height:90px;
}

</style>