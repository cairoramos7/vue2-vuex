<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <notify></notify>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Notify from './components/Notify/Index'
export default {
  name: 'App',
  components: {
    Notify
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
