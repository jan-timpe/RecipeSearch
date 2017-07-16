<template>
   <div class="recipe-card">

      <div class="cell photo">
         <img v-bind:src="this.recipe.image"  class="recipe-image">
      </div>

      <div class="cell columns info">
         <div class="title cell">
            <h3>{{ this.recipe.label }}</h3>
         </div>
         <div class="tags cell">
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
      </div>

      <div class="cell columns controls">
         <a class="control cell">Add</a>
         <a class="control cell">Visit</a>
      </div>

   </div>
</template>

<script>
export default {
   name: 'RecipeCardLarge',
   props: ['recipe']
}
</script>

<style>
.recipe-card, .columns {
   display: flex;
   display: -webkit-flex;
   display: -moz-flex;
   display: -o-flex;
   flex-wrap: nowrap;
   margin: 12px 0px;
}
.recipe-card {
   flex-direction: row;
}
.columns {
   flex-direction: column;
}
.cell {
   flex: 1 1 auto;
}

.info {
   padding: 4px;
   margin: 0px 4px;
   width: 100%;
}
.title {
   max-height: 44px;
   font-size: 14pt;
}
.tags {
   padding: 6px;
}
.tag {
   font-size: 8pt;
   border-radius: 2px;
   background: green;
   display: inline-block;
   margin: 2px;
   padding: 2px;
   color: #fff;
}

.photo {
   max-width:140px;
}
.photo .recipe-image {
   width: 100%;
}

.controls {
   width: 60px;
}
.control {
   display: block;
   width: 100%;
   line-height: 60px;
}
</style>