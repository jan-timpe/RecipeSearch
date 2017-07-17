<template>
   <div style="padding: 12px 0px; border-bottom: 1px solid #eee;">

      <article class="media">
         <div class="media-left">
            <figure class="image is-64x64">
               <a v-bind:href="this.recipe.url" target="_blank">
                  <img v-bind:src="this.recipe.image" alt="Image">
               </a>
            </figure>
         </div>
         <div class="media-content">
            <div class="content">
               <p>
                  <span>
                     <a v-bind:href="this.recipe.url" target="_blank">
                        {{ this.recipe.label }}
                     </a>
                  </span>

                  <br>

                  <span class="tag">
                     <span class="icon is-small">
                        <i class="fa fa-fire"></i>
                     </span>
                     &nbsp;{{ Math.round(this.recipe.calories) }}
                  </span>
                  <span class="tag is-small">
                     <span class="icon is-small">
                        <i class="fa fa-pie-chart"></i>
                     </span>
                     &nbsp;{{ this.recipe.yield }}
                  </span>
               </p>
            </div>
         </div>

         <div class="media-right">
            <a @click="this.removeRecipe" class="button is-white is-small">
               <span class="icon is-small">
                  <i class="fa fa-close"></i>
               </span>
            </a>
            <br>
            <a v-bind:href="this.recipe.url" target="_blank" class="button is-white is-small">
               <span class="icon is-small">
                  <i class="fa fa-share"></i>
               </span>
            </a>
         </div>
      </article>

   </div>
</template>

<script>
export default {
   name: 'RecipeCardSmall',
   props: ['recipe', 'index'],

   methods: {
      removeRecipe() {
         this.$store.dispatch('removeRecipeFromList', {
            recipeIndex: this.index
         })
      }
   }
}
</script>