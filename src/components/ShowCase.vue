<script setup>
import { ref } from 'vue';
import GetStarted from '../components/GetStarted.vue'

const info = ref('join us as a customer to get in touch with your local business owners and professionals, or')
const info2 = ref('join us as a business owner or professional to get intouch with new customers')

</script>

<template>
    <section class="cardSty Showcase">
    <div class="">
      <div class="ShowcaseMsg">
          <p class="ShowcaseTitle">zerranda</p>
          <p class="ShowcaseInfo">{{info}}<br>{{info2}}</p>
    </div>
<GetStarted/>
</div>
</section>
</template>
