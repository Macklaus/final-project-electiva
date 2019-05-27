<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body{
  background-color: #2C1641;
}
#app{
  min-width: 300px;
}

.error{
  color: #F57F6C;
  font-size: 14px;
}

.form-error{
  border: 2px solid #F57F6C;
}
</style>
