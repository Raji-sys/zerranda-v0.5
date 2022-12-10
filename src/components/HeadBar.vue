<script setup>
import { ref } from 'vue'

const img = ref ('img/zfc.png')
const title = ref ('your business listings in a minimalistic and fashionable way!')
</script>
<template>
<section class="HeadSection">
  <header>
    <router-link to="/" >
      <div class="imgDiv">
       <img  :src=img>
     </div>
       </router-link>
   <div class="Slogan ">
     <span class="SloganTxt">{{title}}</span>
   </div>
 </header> 

</section>
</template>
