<template>
 <div>
   <h1>Store</h1>
    Contador: <input type="number" v-model="cont">
   
 </div>
</template>


<script>
import { ref, computed, reactive } from "vue"
import { useStore } from "vuex"

export default {
  name: "Store",
  props: {},
  setup() {
    let cont=computed(()=>{
       return useStore().state.contador
    })
  
    return {
        cont
      
    }
  },
}
</script>