<template>
 <div>
   
   <!-- <span>{{user.nombre}} {{user.apellidos}}</span> -->
   
 </div>
</template>


<script>
import { ref, computed} from "vue"
import { useStore } from "vuex"
export default {
  name: "Userdata",
  props: {},
  setup() {
    const store= useStore()
   /*  let user=computed(()=>{
        return store.getters.getUser
    }) */
   
  
    return {
        /* user */
      
    }
  },
}
</script>

<style scoped lang="scss" >

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