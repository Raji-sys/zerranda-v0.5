<script setup>
import HeadBar from '../components/HeadBar.vue'

</script>
<template>
<HeadBar/>
    <ul class="list-group-horizontal p-2" id="menu">
    <li class="mx-1"><router-link to="/plumbing">
    <button class="nav-item btn-com btn-outline-secondary btn-lg">plumbing</button></router-link></li>
    <li class="mx-1"><router-link to="/roofing">
    <button class="nav-item btn-com btn-outline-secondary btn-lg">roofing</button></router-link></li>
    <li class="mx-1"><router-link to="/electrician">
    <button class="nav-item btn-com btn-outline-secondary btn-lg">electrician</button></router-link></li>
    <li class="mx-1"><router-link to="/mechanics">
    <button class="nav-item btn-com btn-outline-secondary btn-lg">mechanics</button></router-link></li>
    <li class="mx-1"><router-link to="/cleaner">
    <button class="nav-item btn-com btn-outline-secondary btn-lg">cleaner</button></router-link></li>
    </ul>
</template>
