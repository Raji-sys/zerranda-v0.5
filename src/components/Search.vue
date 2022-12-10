<script setup>
  import { library } from '@fortawesome/fontawesome-svg-core' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)      
</script>
<template>
    <div class=" text-center">
      <input type="text" class="md:w-1/2 p-4" aria-label="search" aria-describedby="search" placeholder="enter what you are looking, example: plumber"
      ><button class="SearchBtn SearchbBtn" type="button"><font-awesome-icon icon="fa fa-search"/></button>
      </div>
</template>
