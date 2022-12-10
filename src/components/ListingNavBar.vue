<script setup>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShower,faPlug,faHomeAlt,faGears,faTrashAlt,faHammer,faCutlery,faWrench } from '@fortawesome/free-solid-svg-icons'

library.add(faShower, faPlug, faHomeAlt, faGears, faTrashAlt, faHammer,faCutlery,faWrench)

</script>

<template>
  <section>
    <div class="grid md:grid-cols-3 p-10 justify-center gap-10 mt-5">

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/services"> 
    <h2 class="text-3xl font-semibold ">services</h2>
    <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-wrench" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class=" text-3xl font-semibold">food</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-cutlery" size="6x"/></p>
  </router-link>
  </div>
</div>

    <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/plumbing"> 
    <h2 class=" text-3xl font-semibold">plumbing</h2>
    <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-shower" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/food"> 
  <h2 class=" text-3xl font-semibold">roofing</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-home-alt" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class=" text-3xl font-semibold">electrician</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-plug" size="6x"/></p>
  </router-link>
  </div>
</div>

  <div class=" bg-white shadow-lg rounded-lg p-10">
  <div class="text-center"><router-link to="/sport"> 
  <h2 class=" text-3xl font-semibold">mechanics</h2>
  <p class="mt-2 btn-co"><font-awesome-icon icon="fa-solid fa-gears" size="6x"/></p>
  </router-link>
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
