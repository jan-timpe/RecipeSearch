<template>
   <div id="app">
      <navigation></navigation>
      <router-view></router-view>
   </div>
</template>

<script>
import Navigation from '@/components/layout/navigation'

export default {
   name: 'app',
   components: {
      Navigation
   }
}
</script>

<style>
body {
   margin: 0;
   padding: 0;
   top: 0;
   left: 0;
}

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
</style>
