<script setup>
import NavBar from '../components/NavBar.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationCircle,faStar)
</script>
<template>
    <NavBar/>
    <section class="p-5" id="terms">
    <div class="section-title">
      <h2 class="text-center btn-co1 mt-5 text-gray-800 text-3xl font-semibold ">terms & features</h2>
    </div>
        <div class="grid md:grid-cols-2 text-center mt-2 p-10 gap-10 text-lg">

              <div class="text-gray-600 btn-co1 ">
                  <font-awesome-icon icon="fa-solid fa-exclamation-circle" size="3x"/>
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <img src="dm.jpg" alt="" srcset="" class="img-fluid">
              </div>
              <div class="text-gray-600 btn-co">
                  <font-awesome-icon icon="fa-solid fa-star" size="3x"/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odit.</p>
                  <img src="dm.jpg" alt="" srcset="" class="img-fluid">
              </div>
          </div>
  </section> 
 </template>
