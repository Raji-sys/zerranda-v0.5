<script setup>
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faContactCard } from '@fortawesome/free-solid-svg-icons'

library.add(faHome,faInfoCircle,faDatabase,faFileCode,faQuestionCircle,faContactCard)
</script>

<template>
<nav class="p-6 ">
<div class="flex justify-center">
  <div class="navUnder" id="menu">
    <ul class="md:flex flex-wrap gap-10">
      
              <li class=" mx-3">
                 <router-link class="btn-co border-1 " to="/">
                   home
                  <font-awesome-icon icon="fa-solid fa-home"/>
                  </router-link>
            </li>
              <li class=" mx-3">
                 <router-link class="btn-co border-1" to="/about">
                   about
                  <font-awesome-icon icon="fa-solid fa-info-circle "/>
                  </router-link>
            </li>
              <li class=" mx-3 ">
                <router-link class="btn-co border-1" to="/Listings">
                  listings
                <font-awesome-icon icon="fa-solid fa-database"/>
                </router-link>
              </li>
              <li class= " mx-3">
                <router-link class=" btn-co border-1" to="/terms">
                  terms
                  <font-awesome-icon icon="fa fa-file-code "/>
                  </router-link>
              </li>
              <li class=" mx-3">
                 <router-link class=" btn-co border-1" to="/FAQs">
                   FAQs
                  <font-awesome-icon icon="fa fa-question-circle"/>
                  </router-link>
            </li>
              <li class=" mx-3">
                <router-link class="btn-co border-1" to="/contact">
                  contact-us
                  <font-awesome-icon icon="fa fa-contact-card"/>
                  </router-link>
            </li>
          </ul>

  </div>
</div>
</nav>
</template>
