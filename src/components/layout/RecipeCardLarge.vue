<template>
   <div class="recipe-card-large">

      <div class="cell photo">
         <img v-bind:src="this.recipe.image"  class="recipe-image">
      </div>

      <div class="cell info">
         <h3 class="title">{{ this.recipe.label }}</h3>

         <span v-for="tag in this.recipe.healthLabels" 
         :key="tag"
         class="tag">
            {{ tag }}
         </span>

         <span v-for="tag in this.recipe.dietLabels" 
         :key="tag"
         class="tag">
            {{ tag }}
         </span>
      </div>

      <div class="cell columns controls">
         <a class="control cell" 
            @click="saveRecipe"
         >
            Add
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
   name: 'RecipeCardLarge',
   props: ['recipe'],

   methods: {
      saveRecipe() {
         this.$store.dispatch('addRecipeToList', {
            recipe: this.recipe
         })
      }
   }
}
</script>

<style>
.recipe-card-large, .columns {
   display: flex;
   display: -webkit-flex;
   display: -moz-flex;
   display: -o-flex;
   flex-wrap: nowrap;
   margin: 12px 0px;
}
.recipe-card-large {
   flex-direction: row;
}
.recipe-card-large .columns {
   flex-direction: column;
}
.recipe-card-large .cell {
   flex: 1 1 auto;
}

.recipe-card-large .info {
   padding: 4px;
   margin: 0px 4px;
   width: 100%;
}
.recipe-card-large .title {
   max-height: 44px;
   font-size: 14pt;
}
.recipe-card-large .tags {
   padding: 6px;
}
.recipe-card-large .tag {
   font-size: 8pt;
   border-radius: 2px;
   background: green;
   display: inline-block;
   margin: 2px;
   padding: 2px;
   color: #fff;
}

.recipe-card-large .photo {
   max-width:140px;
}
.recipe-card-large .photo .recipe-image {
   width: 100%;
}

.recipe-card-large .controls {
   width: 60px;
}
.recipe-card-large .control {
   display: block;
   width: 100%;
   line-height: 60px;
}
</style>