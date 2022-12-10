<script setup>
import { ref } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShower,faPlug,faHomeAlt,faGears,faTrashAlt,faHammer,faCutlery,faWrench } from '@fortawesome/free-solid-svg-icons'

library.add(faShower, faPlug, faHomeAlt, faGears, faTrashAlt, faHammer,faCutlery,faWrench)

const img1 = ref('img/3.JPG')
const img2 = ref('img/zakir.JPG')
const img3 = ref('img/1.JPG')
const text1= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
const text2= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
const text3= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
</script>

<template>

    <section class="FeaturedSection" id="featured">
      <span class="SloganTxt1 text-3xl">featured</span>
    <div class="grid md:grid-cols-3 p-10 justify-center gap-10 mt-5">
  
  <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center "><router-link to="/services"> 
    <h2 class="text-3xl font-semibold">services</h2>
    <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-wrench" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class=" text-3xl font-semibold">food</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-cutlery" size="6x"/></p>
  </router-link>
  </div>
</div>

    <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center"><router-link to="/plumbing"> 
    <h2 class=" text-3xl font-semibold">plumbing</h2>
    <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-shower" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class=" text-3xl font-semibold">roofing</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-home-alt" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class=" text-3xl font-semibold">electrician</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-plug" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg border p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class=" text-3xl font-semibold">mechanics</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-gears" size="6x"/></p>
  </router-link>
  </div>
</div>

</div>

<div class="FullListWrap">
    <div class="LoginBtn">
        <router-link class="text-white" to="/Listings">full listing</router-link>
    </div>
</div>

</section>
<!-- break  -->
<section class="TestimonialSection" id="testimonial">

<div class="TestimonialWrap">
<div class="mt-6">
  <span class="SloganTxt1 text-3xl">testimonial</span>
</div>

<div class="TestimonialCard gap-10">
    
    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" :src="img3">
  </div>
  <div>
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">{{text1}}</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Abdallah</a>
  </div>
</div>

    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" :src="img1">
  </div>
  <div>
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">{{text2}}</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Shuraim</a>
  </div>
</div>
    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" :src="img2">
  </div>
  <div class="">
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">{{text3}}</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Zakir</a>
  </div>
</div>

  </div>

  </div>  
</section>
</template>
