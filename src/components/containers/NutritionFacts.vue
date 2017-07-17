<template>
   <div id="nutrition-facts">
      <section class="section">
         <div class="container">
            <h1 class="title">Nutrition facts</h1>
            <h2 class="subtitle">
               "Try to be healthy, okay?" ~ your mother
            </h2>

            <table class="table is-bordered is-striped is-narrow" style="max-width: 580px">
               <tbody>
                  <tr v-for="nut in totalNutrients"
                     :key="nut.label"
                  >
                     <td>
                        {{ nut.label }}
                     </td>
                     <td>
                        {{ nut.quantity.toFixed(2) }}({{ nut.unit }})
                     </td>
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
   name: 'NutritionFacts',

   computed: {
      ...mapGetters({
         totalNutrients: 'totalNutrients'
      })
   }
}
</script>