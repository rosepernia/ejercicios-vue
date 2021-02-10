<template>
  <div class="about">
   <h1>Ejercicio DNI</h1>
    <EjercicioDni  etiqueta="Holiii" />

    <!-- <p><pre>&lt;xInput label='NIF:'mask='^\d{8}[a-zA-Z]{1}$'&gt;</pre></p> -->
    <!-- <xInput label='NIF:' mask='^\d{8}[a-zA-Z]{1}$'/> -->
  </div>
</template>

<script>
import EjercicioDni from '@/components/EjercicioDni.vue'

export default {
   components: {
       EjercicioDni
   }
}
</script>