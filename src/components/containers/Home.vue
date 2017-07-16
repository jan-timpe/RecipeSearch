<template>
   <div id="home">
      <navigation></navigation>
      <h1>Home page</h1>
      <p>Welcome home</p>

      <br/><br/>

      <input type="text" v-model="this.searchTerm">
      <button @click="searchRecipes(this.searchTerm)">Search</button>

      <br/><br/>

      <recipe-card-large v-for="item in this.recipes"
         :key="item.recipe.uri"
         :recipe="item.recipe"
      >
      </recipe-card-large>
   </div>
</template>

<script>
import api from '@/api/recipes'
import Navigation from '@/components/layout/navigation'
import RecipeCardLarge from '@/components/layout/RecipeCardLarge'

export default {
   name: 'home',
   components: {
      Navigation,
      RecipeCardLarge
   }, 

   data: function() {
      return {
         recipes: [],
         searchTerm: ''
      }
   }, 

   methods: {
      searchRecipes(terms) {
         api.searchRecipes(terms, results => {
            this.recipes = results.hits
         },
         error => {
            console.log(error)
         })
      }
   }
}
</script>