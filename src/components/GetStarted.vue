<script setup>
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faBriefcase,faUser)
</script>

<template>
  <h5 class="GetStartHead">choose account type to get started</h5>
    <div class="GetStartWrap">
      <router-link type="button" class="GetStartBtn" to="/VStartPage">
        <font-awesome-icon icon="fa-briefcase"/>
        business
      </router-link>

    <router-link type="button" class="GetStartBtn" to="/UStartPage">
      <font-awesome-icon icon="fa-user"/>
      customer
      </router-link>
    </div>
</template>
