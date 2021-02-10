<template>
  <div>
    <img src="../assets/cat.png" />
      <h2>Nivel de enfado: {{cabreoActual}}</h2>  
   <button @click="enfadar">MOLESTA AL GATITO</button>    
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Imagentexto",
  props: {
    cabreo: {
      type: Number,
      default:0,
      required:true
    }   
  },
  setup(props){
    let cabreoActual=ref(props.cabreo)
  
    const enfadar=()=>{
      cabreoActual.value++
    }

    return {
      cabreoActual,
      enfadar
    }
  }  
}  
</script>

<style scoped lang="scss" >
h2 {
  color: rgb(175, 113, 199);
}
div {
  display: inline-block;
  vertical-align: top;
}
button{

  background: rgb(175, 113, 199);
  border-radius: 6px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  color:white;
}
</style>
