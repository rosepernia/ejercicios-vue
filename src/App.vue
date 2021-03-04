<template>
  <div id="nav">
    <div class="info"><Userdata/></div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ejemplo1">Ejemplo1</router-link> |
    <router-link to="/ejemplo3">Ejemplo3</router-link> |
    <router-link to="/ejemplo4">Ejemplo4</router-link> |
    <router-link to="/ejemplo5">Ejemplo5</router-link> |
    <router-link to="/ejemplo6">Ejemplo6</router-link> |
    <router-link to="/carrito">Carrito</router-link> |
    <router-link to="/pruebaapi">Pruebaapi</router-link> |
    <router-link to="/multiidiomas">Multiidiomas</router-link> |
    <router-link to="/storage">Storage</router-link>|
    <router-link to="/admin">Admin</router-link>
   
  </div>
  <router-view/>
</template>

<script>
import Userdata from '@/components/Userdata'
export default {
  name: "App",
  components:{
    Userdata
  },
   }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.info{
  text-align: right;
  padding: 10px;
  background: #9cc3da;
  margin-bottom: 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
