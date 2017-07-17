<template>
   <nav id="navbar" class="navbar">
      <div class="navbar-brand">
         <router-link to="/" class="navbar-item">
            Home
         </router-link>
         <router-link to="/list" class="navbar-item">
            Shopping List
         </router-link>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'navigation'
}
</script>