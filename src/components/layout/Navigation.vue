<template>
   <nav id="navigation">
      <ul>
         <li>
            <a href="" class="item">
               Home
            </a>
         </li>
         <li>
            <a href="" class="item">
               Search
            </a>
         </li>
         <li>
            <a href="" class="item">
               Grocery List
            </a>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   name: 'navigation'
}
</script>

<style>
#navigation {
   width: 100%;
   background: green;
}

#navigation ul {
   list-style-type: none;
}

#navigation ul li {
   display: inline-block;
   margin: 0;
   padding: 0;
}

#navigation ul li .item {
   padding: 12px 30px;
   display: block;
}
</style>