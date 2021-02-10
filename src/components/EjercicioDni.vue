<template>
  <div>
      <label>NIF: </label>
    <input id="texto"/> 
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

#texto{
   width: 120px;
   
}
label{
    background: red;
}

button{
  border: 2px solid rgb(175, 113, 199);
  background: transparent;
  border-radius: 6px;
  cursor: pointer
}
</style>
