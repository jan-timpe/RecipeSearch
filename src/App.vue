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
   },

   mounted: function() {
      // localStorage.removeItem('recipes')
      let recipes = JSON.parse(window.localStorage.getItem('recipes'))

      if(recipes && recipes.length > 0) {
         this.$store.dispatch('setRecipeList', {
            recipeList: recipes
         })
      }
   }
}
</script>
