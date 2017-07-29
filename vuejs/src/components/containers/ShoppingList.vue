<template>
   <div id="shopping-list">
      <section class="section">
         <div class="container">
            <h1 class="title">Your shopping list</h1>
            <h2 class="subtitle">
               Get cookin'!
            </h2>

            <table class="table is-bordered is-striped is-narrow" style="max-width:580px;">
               <tbody>
                  <tr v-for="item in shoppingList"
                     :key="item"
                  >
                     <td>{{ item }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'ShoppingList',

   computed: {
      ...mapGetters({
         shoppingList: 'shoppingList'
      })
   }
}
</script>