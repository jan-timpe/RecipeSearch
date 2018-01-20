import axios from 'axios'

# grab these from api.edamam.com
# this repo used to be private, so some tokens were stored here (big oopsie)
# tokens are no longer active (and besides, they were rate limited to 5 req/min and didnt charge me for any services)
export const HTTP = axios.create({
   baseURL: 'https://api.edamam.com',
   params: {
      app_id: '',
      app_key: ''
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
