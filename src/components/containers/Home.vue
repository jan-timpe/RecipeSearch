<template>
   <div id="home">
      <navigation></navigation>
      <h1>Home page</h1>
      <p>Welcome home</p>

      <br/><br/>

      <input type="text" v-model="this.searchTerm">
      <button @click="searchRecipes(this.searchTerm)">Search</button>

      <br/><br/>

      <div class="flex-wrapper">
         <div class="added-recipes">
            <h2>Your list</h2>
            <recipe-card-small v-for="(item, index) in addedRecipes"
               :key="item.uri"
               :recipe="item"
               :index="index"
            >
            </recipe-card-small>
         </div>
         <div class="searched-recipes">
            <h2>Search results</h2>
            <recipe-card-large v-for="item in this.recipes"
               :key="item.recipe.uri"
               :recipe="item.recipe"
            >
            </recipe-card-large>
         </div>
      </div>
   </div>
</template>

<script>
import api from '@/api/recipes'
import Navigation from '@/components/layout/navigation'
import RecipeCardLarge from '@/components/layout/RecipeCardLarge'
import RecipeCardSmall from '@/components/layout/RecipeCardSmall'
import { mapGetters } from 'vuex'

export default {
   name: 'home',
   components: {
      Navigation,
      RecipeCardLarge,
      RecipeCardSmall
   }, 

   data: function() {
      return {
         recipes: [],
         searchTerm: ''
      }
   }, 

   computed: {
      ...mapGetters({
         addedRecipes: 'addedRecipes'
      })
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

<style>
.flex-wrapper {
   display: flex;
   display: -webkit-flex;
   display: -moz-flex;
   display: -o-flex;
   flex-wrap: nowrap;
   flex-direction: row;
}
.flex-wrapper .added-recipes {
   max-width: 400px;
   min-width: 180px;
}
</style>