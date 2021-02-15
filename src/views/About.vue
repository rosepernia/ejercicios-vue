<template>
  <div class="about">
   <h1>Comprobar NIF</h1>
    <xInput  etiqueta="NIF" exp="(/[a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9]/)"/>


    <!-- <p><pre>&lt;xInput label='NIF:'mask='^\d{8}[a-zA-Z]{1}$'&gt;</pre></p> -->
    <!-- <xInput label='NIF:' mask='^\d{8}[a-zA-Z]{1}$'/> -->
  </div>
</template>

<script>
import xInput from '@/components/xInput.vue'

export default {
   components: {
       xInput
   }
}
</script>