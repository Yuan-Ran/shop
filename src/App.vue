<template>
  <div id="app">
    <UserCenter/>
    <router-view/>
  </div>
</template>

<script>
import UserCenter from './components/base/UserCenter'
export default {
  components:{
    UserCenter
  }
}

</script>
<style>
  #app{
    height: 100%; 
  }
  body{
    background-color: rgb(219, 227, 241);
  }
</style>
