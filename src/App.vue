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

   localStorage: {
      recipes: {
         type: Object
      }
   },

   created: function() {
      // this.$localStorage.remove('recipes')
      let recipes = this.$localStorage.get('recipes')
      console.log(recipes)
      if(recipes && recipes.length > 0) {
         this.$store.dispatch('setRecipeList', {
            recipeList: recipes
         })
      }
   },

   beforeDestroy: function() {
      this.$localStorage.set('recipes', this.addedRecipes)
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
