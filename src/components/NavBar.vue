<script setup>
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faContactCard } from '@fortawesome/free-solid-svg-icons'

library.add(faHome,faInfoCircle,faDatabase,faFileCode,faQuestionCircle,faContactCard)
</script>

<template>
<div class="border-t border-slate-200 mt-6"></div>
<nav class="p-6 ">
<div class="flex justify-center">
  <div class="" id="menu">
    <ul class="md:flex flex-wrap gap-10">
      
              <li class=" mx-3">
                 <router-link class="btn-co border-1 " to="/">
                   <font-awesome-icon icon="fa-solid fa-home"/>
                   home
                  </router-link>
            </li>
              <li class=" mx-3">
                 <router-link class="btn-co border-1" to="/about">
                   <font-awesome-icon icon="fa-solid fa-info-circle "/>
                   about
                  </router-link>
            </li>
              <li class=" mx-3 ">
                <router-link class="btn-co border-1" to="/Listings">
                  <font-awesome-icon icon="fa-solid fa-database"/>
                  listings
                </router-link>
              </li>
              <li class= " mx-3">
                <router-link class=" btn-co border-1" to="/terms">
                  <font-awesome-icon icon="fa fa-file-code "/>
                  terms
                  </router-link>
              </li>
              <li class=" mx-3">
                 <router-link class=" btn-co border-1" to="/FAQs">
                   <font-awesome-icon icon="fa fa-question-circle"/>
                   FAQs
                  </router-link>
            </li>
              <li class=" mx-3">
                <router-link class="btn-co border-1" to="/contact">
                  <font-awesome-icon icon="fa fa-contact-card"/>
                  contact-us
                  </router-link>
            </li>
          </ul>

  </div>
</div>
</nav>
<!-- <div class="border-b border-slate-200 mb-1"></div> -->
</template>
