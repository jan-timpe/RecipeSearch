<template>
   <div id="home">
      <navigation></navigation>
      <h1>Home page</h1>
      <p>Welcome home</p>

      <br/><br/>

      <input type="text" v-model="this.searchTerm">
      <button @click="searchRecipes(this.searchTerm)">Search</button>

      <br/><br/>

      <p v-for="item in this.recipes" :key="item.recipe.uri">
         {{ item.recipe.label }}
      </p>
   </div>
</template>

<script>
import Navigation from '@/components/layout/navigation'
import api from '@/api/recipes'

export default {
   name: 'home',
   components: {
      Navigation
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