
<template>
<div class="centrado">
  <div class="fondo">
    <h4>PROVINCIAS</h4>
    <select v-model="provincia" @change="verMunicipios">
      <option disabled value="">Selecciona una provincia</option>
      <option  v-for="(item,i) in provincias" :key="i" :value="item.id">{{item.nm}}</option>
    </select>

    <h4>MUNICIPIOS</h4>
    <select v-model="municipio" @change="verInformacion">
    <option disabled value="">Seleccione un municipio</option>
    <option v-for="(muni,i) in municipios" :key="i" :value="muni.COD_GEO">{{muni.NOMBRE}}</option>
    </select>
  </div> 
</div>
</template>
  
<script>
import { ref, reactive } from "vue";
export default {
  name: "TablaSelect",
  props: {},
  setup() {
       
       let provincia=ref("") 
       let provincias=reactive([])
       let municipios=reactive([])
       let municipio=ref("")
       let informacion=reactive([])
       
      fetch('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json')
         .then(response => response.json())
         .then(data =>{
              data.forEach(element => {
              provincias.push(element)
          })  
      })

         
      const verMunicipios=()=>{
          fetch('https://www.el-tiempo.net/api/json/v2/provincias/' + provincia.value + '/municipios')
            .then(response => response.json())
            .then(datos =>{
               municipios.splice(0)
               datos.municipios.forEach(element => {
                 console.log(datos.municipios)
                 municipios.push(element)
                })  
            })
      }
      const verInformacion=()=>{
          fetch('https://www.el-tiempo.net/api/json/v2/provincias/' + provincia.value + '/municipios/' + municipio.value)
            .then(response => response.json())
            .then(datos =>{
              console.log(datos)
            })   
      } 
    
    
    
    return {
      provincias,
      provincia, 
      municipios,
      verMunicipios,
      municipio,
      verInformacion,
      informacion
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

</style>