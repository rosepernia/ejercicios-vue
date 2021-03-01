<template>
  <div>
   <h1>Multilenguaje</h1>
  <select v-model="idiomaActual">
    <option v-for="(leng,i) in idiomas" :key=i>
      {{leng}}
    </option>
  </select>
  <hr>
  <p><b>Clave 'hello': </b>{{idioma.hello}}</p>
  <p><b>Clave 'bye': </b>{{idioma.bye}}</p>
  </div>
</template>

<script>
import { reactive, computed, ref} from "vue";
import i18next from 'i18next'

export default {
  name: "Multiidiomas",
  props: {},
  setup() {
    console.log(i18next)
    let idiomas=reactive(i18next.languages)
    let idiomaActual=ref(i18next.language)
    let idioma=computed(()=>{
      return i18next.getDataByLanguage(idiomaActual.value)
    })
    

    return {
     idiomaActual,
     idiomas,
     idioma
    }
  },
}
</script>