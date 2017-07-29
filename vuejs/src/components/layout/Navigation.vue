<template>
   <nav id="navigation" class="navbar">
      <div class="navbar-brand">
         <router-link to="/" class="navbar-item">
            Home
         </router-link>
         <router-link to="/list" class="navbar-item">
            Shopping list
         </router-link>
         <router-link to="/facts" class="navbar-item">
            Nutrition facts
         </router-link>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'Navigation'
}
</script>