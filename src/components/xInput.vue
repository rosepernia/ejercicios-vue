<template>
  <div>
    <label :class="clases">{{ etiqueta }}</label>
    <input @keyup="comprobar" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "xInput",
  props: {
    etiqueta: {
      type: String,
      default: "CAMPO: ",
      
    },
    exp: {
      type: String      
    }
  },

  setup(props) {
  
    let etiquetaActual = ref(props.etiqueta)
    let clases = ref("rojo")
    

    let expresion = new RegExp(props.exp)

    const comprobar = (e)=>{
      if(expresion.test(e.target.value)){
        clases.value = "verde"
      }
       else{
          clases.value="rojo"
       } 
    }


    return {
      etiquetaActual,
      comprobar,
      clases,
      expresion
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
</style>
