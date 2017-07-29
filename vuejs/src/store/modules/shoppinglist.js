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
   },

   totalNutrients() {
      var totalNutrients = {}
      state.addedRecipes.forEach(function(recipe) {
         var nutrients = recipe.totalNutrients

         for(var n in nutrients) {
            var nut = nutrients[n]

            if(nut.label in totalNutrients) {
               totalNutrients[nut.label].quantity += nut.quantity
            }
            else {
               totalNutrients[nut.label] = {
                  label: nut.label,
                  quantity: nut.quantity,
                  unit: nut.unit
               }
            }
         }
      })

      return totalNutrients
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
   },

   setRecipeList({ commit, state}, { recipeList }) {
      commit('setRecipes', {
         recipeList: recipeList
      })
   } 
}

const mutations = {
   addRecipe(state, { recipe }) {
      state.addedRecipes.push(recipe)
      console.log(state.addedRecipes)
      window.localStorage.setItem('recipes', JSON.stringify(state.addedRecipes))
   },

   removeRecipe(state, { recipeIndex }) {
      state.addedRecipes.splice(recipeIndex, 1)
      console.log(state.addedRecipes)
      window.localStorage.setItem('recipes', JSON.stringify(state.addedRecipes))
   },

   setRecipes(state, { recipeList }) {
      state.addedRecipes = recipeList
   }
}

export default {
   state,
   getters,
   actions, 
   mutations
}