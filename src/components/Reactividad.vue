<template>
  <div class="reactividad">
    <p>{{contador.titulo}}: {{contador.valor}}
       <button @click="sumar">+</button> 
       <button @click="restar">-</button>      
    </p>
    <div class="leyenda">Incremento de este componente: {{incremento}}</div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name:'Reactividad',
  props:{
    inc: {
        type:Number,
        default:1
    }
  },
  setup(props){
      
      let incremento=parseInt(props.inc)
      let contador=reactive({
           titulo:'Contador',
           valor:0
      })

      const sumar=()=>{
         contador.valor+=incremento
         console.log(contador)
      }

       const restar=()=>{
         contador.value-=incremento
         console.log(contador)
      }

     ///debajo de return no se pone nada
      return{
        contador,incremento,
        sumar,restar       
      }
  }
}
</script>

<style scoped lang="scss" >
  .reactividad{
    border:1px dashed black;
  }
 
 </style>