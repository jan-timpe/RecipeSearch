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

                  <form v-on:submit.prevent="searchRecipes(searchTerm, healthLabel, dietLabel)">
                     <div class="field has-addons">
                        <p class="control">
                           <span class="select">
                              <select v-model="dietLabel">
                                 <option value="" disabled selected>Diet options</option>
                                 <option value="balanced">balanced</option>
                                 <option value="high-protein">high-protein</option>
                                 <option value="high-fiber">high-fiber</option>
                                 <option value="low-fat">low-fat</option>
                                 <option value="low-carb">low-carb</option>
                                 <option value="low-sodium">low-sodium</option>
                              </select>
                           </span>
                        </p>
                        <p class="control">
                           <span class="select">
                              <select v-model="healthLabel">
                                 <option value="" disabled selected>Health options</option>
                                 <option value="vegan">vegan</option>
                                 <option value="vegetarian">vegetarian</option>
                                 <option value="paleo">paleo</option>
                                 <option value="dairy-free">dairy-free</option>
                                 <option value="gluten-free">gluten-free</option>
                                 <option value="wheat-free">wheat-free</option>
                                 <option value="fat-free">fat-free</option>
                                 <option value="low-sugar">low-sugar</option>
                                 <option value="egg-free">egg-free</option>
                                 <option value="peanut-free">peanut-free</option>
                                 <option value="nut-free">tree-nut-free</option>
                                 <option value="soy-free">soy-free</option>
                                 <option value="fish-free">fish-free</option>
                                 <option value="shellfish-free">shellfish-free</option>
                              </select>
                           </span>
                        </p>
                        <p class="control">
                           <input class="input" 
                              type="text" 
                              placeholder="Look for munchies"
                              v-model="searchTerm"
                           >
                        </p>
                        <p class="control">
                           <input type="submit" class="button is-primary" value="Search">
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

                  <nav class="pagination">

                     <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
                     <a class="pagination-next">Next page</a>

                     <ul class="pagination-list">
                        <li>
                           <a class="pagination-link is-current">1</a>
                        </li>
                        <li>
                           <a class="pagination-link">2</a>
                        </li>
                        <li>
                           <a class="pagination-link">3</a>
                        </li>
                     </ul>
                     
                  </nav>

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
         healthLabel: '',
         dietLabel: '',
         isLoading: false,
         isError: false
      }
   }, 

   computed: {
      ...mapGetters({
         addedRecipes: 'addedRecipes'
      })
   },

   methods: {
      searchRecipes(terms, healthLabel, dietLabel) {
         this.recipes = []
         this.isLoading = true

         api.searchRecipes(terms, healthLabel, dietLabel, results => {
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