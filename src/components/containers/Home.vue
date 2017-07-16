<template>
   <div id="home">
      <navigation></navigation>
      <h1>Home page</h1>
      <p>Welcome home</p>

      <br/><br/>

      <input type="text" v-model="this.searchTerm">
      <button @click="searchRecipes(this.searchTerm)">Search</button>

      <br/><br/>

      <recipe-card v-for="item in this.recipes"
         :key="item.recipe.uri"
         :title="item.recipe.label"
         :healthLabels="item.recipe.healthLabels"
         :dietLabels="item.recipe.dietLabels"
         :yield="item.recipe.yield"
         :calories="item.recipe.calories"
         :url="item.recipe.url"
         :image="item.recipe.image"
      >
      </recipe-card>

      <p v-for="item in this.recipes" :key="item.recipe.uri">
         {{ item.recipe.label }}
      </p>
   </div>
</template>

<script>
import api from '@/api/recipes'
import Navigation from '@/components/layout/navigation'
import RecipeCard from '@/components/layout/RecipeCard'

export default {
   name: 'home',
   components: {
      Navigation,
      RecipeCard
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