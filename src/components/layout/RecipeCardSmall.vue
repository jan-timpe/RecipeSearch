<template>
   <div class="recipe-card-small">

      <div class="cell photo">
         <img v-bind:src="this.recipe.image"  class="recipe-image">
      </div>

      <div class="cell info">
         <p>{{ this.recipe.label }}</p>
      </div>

      <div class="cell columns controls">
         <a class="remove cell"
            @click="removeRecipe"
         >
            Remove
         </a>
         <a class="control cell" 
            v-bind:href="this.recipe.url" 
            target="_blank"
         >
            Visit
         </a>
      </div>

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

<style>
.recipe-card-small, .columns {
   display: flex;
   display: -webkit-flex;
   display: -moz-flex;
   display: -o-flex;
   flex-wrap: nowrap;
   margin: 6px 0px;
}
.recipe-card-small {
   flex-direction: row;
}
.recipe-card-small .columns {
   flex-direction: column;
}
.recipe-card-small .info {
   padding: 4px;
   margin: 0px 4px;
   width: 100%;
}

.recipe-card-small .photo {
   max-width:80px;
}
.recipe-card-small .photo .recipe-image {
   width: 100%;
}

.recipe-card-small .controls {
   width: 60px;
}
.recipe-card-small .control {
   display: block;
   width: 100%;
   line-height: 60px;
}
</style>
