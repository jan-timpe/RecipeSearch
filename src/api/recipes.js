import axios from 'axios'

export const HTTP = axios.create({
   baseURL: 'https://api.edamam.com',
   params: {
      app_id: 'e8149f6c',
      app_key: '8237364c4dc4573c8a7da14f8f1e10c0'
   }
})

export default {
   searchRecipes(query, healthLabel, dietLabel, from, to, onSuccess, onFailure) {
      var resource = '/search?q='+query+'&from='+from+'&to='+to

      if(healthLabel.length > 0) {
         resource = resource.concat('&health='+healthLabel)
      }

      if(dietLabel.length > 0) {
         resource = resource.concat('&diet='+dietLabel)
      }

      HTTP.get(resource)
      .then(response => {
         onSuccess(response.data)
      })
      .catch(error => {
         onFailure(error)
      })
   }
}