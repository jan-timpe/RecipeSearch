<template>
   <div id="home">

      <section class="hero is-primary">
         <div class="hero-body">
            <div class="container">
               <h1 class="title">
                  Home page
               </h1>
               <h2 class="subtitle">
                  Welcome home
               </h2>
            </div>
         </div>
      </section>

      <section class="section">
         <div class="container">
            <h1 class="title">Start here</h1>
            <h2 class="subtitle">
               Use the search bar to look for recipes; when you find one you like, add it to your list!
            </h2>

            <div class="columns">

               <div class="column is-one-third">
                  <p>Your list</p>
                  <recipe-card-small v-for="(item, index) in addedRecipes"
                     :key="item.uri"
                     :recipe="item"
                     :index="index"
                  >
                  </recipe-card-small>
               </div>

               <div class="column is-two-thirds">

                  <form v-on:submit.prevent="searchRecipes(searchTerm)">
                     <div class="field has-addons">
                        <p class="control">
                           <input class="input" 
                              type="text" 
                              placeholder="Look for munchies"
                              v-model="searchTerm"
                           >
                        </p>
                        <p class="control">
                           <input type="submit" class="button is-info" value="Search">
                        </p>
                     </div>
                  </form>

                  <br/>

                  <div>

                     <a class="button is-static" 
                        v-if="this.recipes.length == 0 || isLoading"
                        v-bind:class="{ 'is-loading': isLoading }"
                     >
                        No results
                     </a>

                     <recipe-card-large v-for="item in this.recipes"
                        :key="item.recipe.uri"
                        :recipe="item.recipe"
                     >
                     </recipe-card-large>

                  </div>

               </div>
            </div>
         </div>
      </section>

   </div>
</template>

<script>
import api from '@/api/recipes'
import RecipeCardLarge from '@/components/layout/RecipeCardLarge'
import RecipeCardSmall from '@/components/layout/RecipeCardSmall'
import { mapGetters } from 'vuex'

export default {
   name: 'home',
   components: {
      RecipeCardLarge,
      RecipeCardSmall
   }, 

   data: function() {
      return {
         recipes: [],
         searchTerm: '',
         isLoading: false
      }
   }, 

   computed: {
      ...mapGetters({
         addedRecipes: 'addedRecipes'
      })
   },

   methods: {
      searchRecipes(terms) {
         this.isLoading = true

         api.searchRecipes(terms, results => {
            this.recipes = results.hits
            this.isLoading = false
         },
         error => {
            console.log(error)
            this.isLoading = false
         })
      }
   }
}
</script>