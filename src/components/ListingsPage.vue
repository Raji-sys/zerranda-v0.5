<script setup>
import NavBar from '../components/NavBar.vue'
import ListingNavBar from '../components/ListingNavBar.vue'
import Search from '../components/Search.vue'
</script>

<template>
<NavBar/>
    <div class="border-b border-slate-200 mb-5"></div>
    <Search/>
    <div style="background:linear-gradient(-45deg,#edf2f7, #021f2a, #edf2f7);">

        <ListingNavBar/>
    </div>
    <!-- <router-view/> -->
</template>

