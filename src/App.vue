<script setup>
import HeadBar from './components/HeadBar.vue'
</script>

<template>
    <HeadBar :title=title />
    <router-view />
<!-- <div class="container">
</div> -->
</template>

<style>
body{

    /* background: #edf2f7 */
}
</style>