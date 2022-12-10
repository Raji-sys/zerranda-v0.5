<script setup>
import { ref } from 'vue'

const img1 = ref('img/3.JPG')
const img2 = ref('img/zakir.JPG')
const img3 = ref('img/1.JPG')
const text1= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
const text2= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
const text3= ref('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quidem, tempore dolores natus error repellendus.')
</script>
<template>
    <section class="FeaturedSection" id="featured" style="background: #edf2f7;" >
              <span class="SloganTxt">featured</span>
                <div class="FeaturedWrap">
                <!-- cards go here  -->
                    <div class="FeaturedCard">
                        <img src="img/food.JPG" alt="" class="w-full object-cover"> 
                            <span class="btn-co">resturants</span>
                    </div>
                    <div class="FeaturedCard">
                        <img src="img/watch.jpg" alt="" class="w-full object-cover"> 
                            <span class="btn-co">shopping</span>
                    </div>
                    <div class="FeaturedCard">
                        <img src="img/c.JPG" alt="" class="w-full object-cover"> 
                            <span class="btn-co">computing</span>
                    </div>
                </div>

                <div class="FullListWrap">
                    <div class="FullListBtn">
                         <router-link class="text-white" to="/Listings">
                  full listing
                </router-link>
                    </div>
                </div>

    </section>
<!-- break  -->
    <section class="TestimonialSection" id="testimonial" style="background: #edf2f7;">

<div class="TestimonialWrap">
<div class="mt-6">
  <span class="SloganTxt">testimonial</span>
</div>

<div class="TestimonialCard gap-10">
    
    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" src="img/1.jpg">
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Abdallah</a>
  </div>
</div>

    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" src="img/3.jpg">
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Shuraim</a>
  </div>
</div>
    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" src="img/zakir.jpg">
  </div>
  <div class="">
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Zakir</a>
  </div>
</div>

  </div>

  </div>  
</section>
</template>
