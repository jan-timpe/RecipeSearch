const state = {
   addedRecipes: []
}

const getters = {
   addedRecipes: state => state.addedRecipes,

   shoppingList() {
      var list = []
      state.addedRecipes.forEach(function(recipe) {
         recipe.ingredientLines.forEach(function(ingredient){
            list.push(ingredient)
         }, this)
      }, this);
      
      return list.sort()
   }
}

const actions = {
   addRecipeToList({ commit, state }, { recipe }) {
      commit('addRecipe', {
         recipe: recipe
      })
   }, 

   removeRecipeFromList({ commit, state }, { recipeIndex }) {
      commit('removeRecipe', {
         recipeIndex: recipeIndex
      })
   }
}

const mutations = {
   addRecipe(state, { recipe }) {
      state.addedRecipes.push(recipe)
   },

   removeRecipe(state, { recipeIndex }) {
      state.addedRecipes.splice(recipeIndex, 1)
   }
}

export default {
   state,
   getters,
   actions, 
   mutations
}