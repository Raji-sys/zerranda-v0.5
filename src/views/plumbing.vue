<script setup>
import HeadBar from '../components/HeadBar.vue'
import ListingNavBar from '../components/ListingNavBar.vue'
</script>

<template>
<HeadBar></HeadBar>
<ListingNavBar/>
<router-view/>
<section class="sw bStyle">
  <div class="container bd card text-center mt-2 mb-5 p-5 shadow-lg">
  <table class="table bStyle text-dark table-bordered">
  <tbody>
    <th scope="row">#</th>
     <th scope="col">Business Name</th>
     <th scope="col">Business Contact</th>
    <tr>
      <th scope="row">1</th>
      <td>Plumbing services</td>
      <td>No 123, abc road, qwerty, kano  Quia, provident ipsum
        <p>123 456 78908</p>
        <p><router-link class="vpBtn btn-lg w-50 border-1 btn-outline-dark" to="/VPageCView">view page</router-link></p>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Plumbing services</td>
      <td>No 123, abc road, qwerty, kano  Quia, provident ipsum
        <p>123 456 78908</p>
        <p><router-link class="vpBtn btn-lg w-50 border-1 btn-outline-dark" to="/VPageCView">view page</router-link></p>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Plumbing services</td>
      <td>No 123, abc road, qwerty, kano  Quia, provident ipsum
        <p>123 456 78908</p>
        <p><router-link class="vpBtn btn-lg w-50 border-1 btn-outline-dark" to="/VPageCView">view page</router-link></p>
      </td>
    </tr>
  </tbody>
  </table>
</div>
</section>
</template>
