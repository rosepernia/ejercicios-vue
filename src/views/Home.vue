<template>
 <!--  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <div>
    <h1>Welcome!!</h1>
     <Imagentexto cabreo="5"/>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import Imagentexto from '@/components/Imagentexto.vue'

/* export default {
  name: 'Home',
  components: {
    HelloWorld
  }
} */
export default {
  name: 'Home',
  components: {
    Imagentexto
  }
}
</script>
