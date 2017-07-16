const state = {
   addedRecipes: []
}

const getters = {
   addedRecipes: state => state.addedRecipes,

   shoppingList() {
   }
}

const actions = {
   addRecipeToList({ commit, state }, { recipe }) {
      commit('addRecipe', {
         recipe: recipe
      })
   }
}

const mutations = {
   addRecipe(state, { recipe }) {
      state.addedRecipes.push(recipe)
   }
}

export default {
   state,
   getters,
   actions, 
   mutations
}