
<template>
<div class="centrado">
  <div class="fondo">
    <h4>PROVINCIAS</h4>
    <select v-model="provincia">
    <option disabled value="">Seleccione una provincia</option>
    <option v-for="(provincia,i) in provincias" :key="i"></option>
    </select>
    <p><span>Provincia seleccionada: {{provincia}}</span></p>
    
    <h4>MUNICIPIOS</h4>
    <select v-model="provincia">
    <option disabled value="">Seleccione un municipio</option>
    <!-- <option v-for="(item,i) in datos" :key="i"></option> -->
    </select>
    <p><span>Municipio seleccionado: <!-- {{seleccionado}} --></span></p>
  
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
     
       /* const leerDatos =()=>{
       let datos='https://github.com/IagoLast/pselect/blob/master/data/municipios.json'
      
        this.$http.get(datos).then(function(response){
        this.provincias = response.data
        console.log(data)
    })
       } */
       
        fetch('https://github.com/IagoLast/pselect/blob/master/data/provincias.json')
         .then(response => response.json())
         .then(data => 
           data.forEach(element => {
              provincias.push(element)
              }))
            
              

 
    return {
      provincias,
      provincia,
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

</style>