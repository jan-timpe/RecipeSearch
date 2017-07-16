import axios from 'axios'

export const HTTP = axios.create({
   baseURL: 'https://api.edamam.com',
   params: {
      app_id: 'e8149f6c',
      app_key: '8237364c4dc4573c8a7da14f8f1e10c0',
      from: 0,
      to: 50
   }
})

export default {
   searchRecipes(query, onSuccess, onFailure) {
      HTTP.get('/search?q='+query)
      .then(response => {
         onSuccess(response.data)
      })
      .catch(error => {
         onError(error)
      })
   }
}