<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faCutlery } from '@fortawesome/free-solid-svg-icons'
import { faSoccerBall } from '@fortawesome/free-solid-svg-icons'

library.add(faWrench,faCutlery,faSoccerBall)
</script>

<template>
  <section>
    <div class="grid md:grid-cols-3 p-10 justify-center gap-10 mt-5">

    <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/services"> 
    <h2 class="text-gray-800 text-3xl font-semibold">services</h2>
    <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-wrench" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class="text-gray-800 text-3xl font-semibold">food</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-cutlery" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class="text-gray-800 text-3xl font-semibold">sport</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-soccer-ball" size="6x"/></p>
  </router-link>
  </div>
</div>

    <div class=" bg-white shadow-lg rounded-lg p-10">  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>

    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>
    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>
    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>
    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>
    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>
    <div class=" bg-white shadow-lg rounded-lg p-10">
  
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
</div>

      <!-- <div class="p-20 shadow-lg border-2">events</div>
      <div class="p-20 shadow-lg border-2">fashion</div>
      <div class="p-20 shadow-lg border-2">food</div>
      <div class="p-20 shadow-lg border-2">five</div>
      <div class="p-20 shadow-lg border-2">six</div>
      <div class="p-20 shadow-lg border-2">seven</div>
      <div class="p-20 shadow-lg border-2">eight</div>
      <div class="p-20 shadow-lg border-2">nine</div>
      <div class="p-20 shadow-lg border-2">ten</div>
      <div class="p-20 shadow-lg border-2">eleven</div>
      <div class="p-20 shadow-lg border-2">twelve</div> -->
  </div>
  </section>
</template>
