<template>
  <div>
    <label :class="clases">{{ etiqueta }}</label>
    <input @keypress="probarDni" id="texto" />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "EjercicioDNI",
  props: {
    etiqueta: {
      type: String,
      default: "NIF: ",
    },
  },

  setup(props) {
    /* let textoDni=ref("") */
    let etiquetaActual = ref(props.etiqueta);

    /* const regEx=new RegExp('^\d{8}[a-zA-Z]{1}$')  */
    /* const regEx = new RegExp("/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/") */
    let expresion = /([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/
    let clases = ref("rojo");

    const probarDni = (e) => {
      if (expresion.test(e.target.value)) {
        clases.value = "verde"
      }
       else{
          clases.value="rojo"
       } 
      console.log(e.target.value)
     
    }

    return {
      etiquetaActual,
      probarDni,
      clases,
    };
  },
};
</script>


<style scoped lang="scss" >
#texto {
  width: 120px;
}
.rojo {
  background: red;
}
.verde {
  background: green;
}

button {
  border: 2px solid rgb(175, 113, 199);
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}
</style>
