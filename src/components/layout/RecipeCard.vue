<template>
   <div class="recipe-card">
      <img v-bind:src="this.image">
      <p>{{ this.title }}</p>
   </div>
</template>

<script>
export default {
   name: 'RecipeCard',
   props: ['title', 'healthLabels', 'dietLabels', 'yield', 'calories', 'url', 'image']
}
</script>