<template>
   <div style="padding: 12px 0px; border-bottom: 1px solid #eee;">

      <article class="media">
         <div class="media-left">
            <figure class="image is-128x128">
               <a v-bind:href="this.recipe.url" target="_blank">
                  <img v-bind:src="this.recipe.image" alt="Image">
               </a>
            </figure>
         </div>
         <div class="media-content">
            <div class="content is-large">
               <p>
                  <span>
                     <a v-bind:href="this.recipe.url" target="_blank">
                        {{ this.recipe.label }}
                     </a>
                  </span>

                  <br>

                  <span class="tag is-info">
                     <span class="icon is-small">
                        <i class="fa fa-fire"></i>
                     </span>
                     &nbsp;{{ Math.round(this.recipe.calories) }}
                  </span>
                  <span class="tag is-info is-small">
                     <span class="icon is-small">
                        <i class="fa fa-pie-chart"></i>
                     </span>
                     &nbsp;{{ this.recipe.yield }}
                  </span>

                  <!-- <br> -->

                  <span v-for="tag in this.recipe.healthLabels" :key="tag" class="tag is-success is-small" style="margin-right:2px;">
                     {{ tag }}
                  </span>
                  <span v-for="tag in this.recipe.dietLabels" :key="tag" class="tag is-small" style="margin-right:2px;">
                     {{ tag }}
                  </span>
                  <span v-for="tag in this.recipe.cautions" :key="tag" class="tag is-danger is-small" style="margin-right:2px;">
                     {{ tag }}
                  </span>
               </p>
            </div>
         </div>

         <div class="media-right">
            <a @click="this.saveRecipe" class="button is-white">
               <span class="icon">
                  <i class="fa fa-plus"></i>
               </span>
            </a>
            <br>
            <a v-bind:href="this.recipe.url" target="_blank" class="button is-white">
               <span class="icon">
                  <i class="fa fa-share"></i>
               </span>
            </a>
         </div>
      </article>

   </div>
</template>

<script>
export default {
   name: 'RecipeCardLarge',
   props: ['recipe'],

   localStorage: {
      recipes: {
         type: Object
      }
   },

   methods: {
      saveRecipe() {
         this.$store.dispatch('addRecipeToList', {
            recipe: this.recipe
         })
      }
   }
}
</script>