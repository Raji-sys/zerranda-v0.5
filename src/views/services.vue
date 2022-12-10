<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShower,faPlug,faHomeAlt,faGears,faTrashAlt,faHammer } from '@fortawesome/free-solid-svg-icons'

library.add(faShower,faPlug,faHomeAlt,faGears,faTrashAlt,faHammer)
</script>

<template>
  <section>
    <div class="grid md:grid-cols-3 p-10 justify-center gap-10 mt-5" style="background:linear-gradient(-45deg,#edf2f7, #021f2a, #edf2f7);">

    <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/plumbing"> 
    <h2 class="text-gray-800 text-3xl font-semibold">plumbing</h2>
    <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-shower" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class="text-gray-800 text-3xl font-semibold">roofing</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-home-alt" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class="text-gray-800 text-3xl font-semibold">electrician</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-plug" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class="text-gray-800 text-3xl font-semibold">mechanics</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-gears" size="6x"/></p>
  </router-link>
  </div>
</div>

<div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class="text-gray-800 text-3xl font-semibold">cleaning</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-trash-alt" size="6x"/></p>
  </router-link>
  </div>
</div>

<div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class="text-gray-800 text-3xl font-semibold">carpenter</h2>
  <p class="mt-2 text-gray-600"><font-awesome-icon icon="fa-solid fa-hammer" size="6x"/></p>
  </router-link>
  </div>
</div>

  </div>
  </section>
</template>
