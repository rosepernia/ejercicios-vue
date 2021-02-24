<template>

 <div class="row">
   <div class="col-4">
      <img class="foto" :src="imagen">
   </div>
   <div clas="col-8">
       <p v-html="titulo" class="nombre"></p>
       <p v-text="descripcion"></p>
       <p v-text="precio"></p>€
       Unidades:<input v-model="unidades" type="number" class="num">
       <p>Subtotal: <span v-text="subtotal"></span>€</p>
       <hr>
    </div>
  </div>
 
</template>

<script>
import { ref,computed } from "vue";


export default {
  name: "Item",
  props: {
      imagen: String,
      descripcion: String,
      titulo: String,
      precio: Number,

  },
  setup(props,context) {
    let unidades=ref(1)
    let subtotal=computed(()=>{
        let resultado=(props.precio*unidades.value).toFixed(2)
        context.emit('calcSubtotal', resultado)
        return resultado
    })


    return {
      unidades,
      subtotal
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

.num{
  width: 75px;
  text-align: center;
}
.foto{
  margin-top:20px;
  width: 100px;
  height: 120px;
}
.nombre{
  font-weight: bolder;
}
</style>