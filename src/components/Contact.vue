<script setup>
import NavBar from '../components/NavBar.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


library.add(faFacebook,faTwitter,faInstagram,faWhatsapp,faYoutube,faEnvelope,faMapPin,faAt,faPhone)
</script>

<template>
<NavBar/>
<div class="border-b border-slate-200 mb-1"></div>
    <section id="contact" class="p-4">    
      <div class="section-title ">
        <h2 class="text-center btn-co1 mt-1 text-gray-800 text-3xl font-semibold ">contact us</h2>
      </div>

      <div class="flex gap-32 justify-center p-2 mt-1">

        <div class="btn-co">
            <p class="mt-1"><span><font-awesome-icon icon="fa-solid fa-map-pin" size="lg" class="mx-3" />7 main laine KM FRW KN</span></p>
            <p class="mt-3"><span><font-awesome-icon icon="fa-solid fa-at" size="lg" class="mx-3"/>main@main.com</span></p>
            <p class="mt-3"><span><font-awesome-icon icon="fa-solid fa-phone" size="lg" class="mx-3"/> 0803 000 0000</span></p>
           <div class="flex gap-10 mt-5">
            <p><span><a href="#"><font-awesome-icon class="text-blue-300" icon="fa-brands fa-twitter" size="3x"/></a></span></p>
            <p><span><a href="#"><font-awesome-icon class="text-blue-800" icon="fa-brands fa-facebook" size="3x"/></a></span></p>
            <p><span><a href="#"><font-awesome-icon class="text-red-500" icon="fa-brands fa-instagram" size="3x"/></a></span></p>
            <p><span><a href="#"><font-awesome-icon class="text-green-600" icon="fa-brands fa-whatsapp" size="3x"/></a></span></p>
            <p><span><a href="#"><font-awesome-icon class="text-red-600" icon="fa-brands fa-youtube" size="3x"/></a></span></p>
           </div>
        </div>
    


        <div class="">
          <form action="#" method="post" role="form" class="">
            <div class="btn-co text-center">
              full name
            </div>
            <div class="">
              <input type="text" name="name" class="px-14 py-2 mb-2" id="name" placeholder="Your Name" required>
            </div>
              <div class="btn-co text-center">
              email
            </div>
              <input type="email" class="px-14 py-2 mt-0 mb-2" name="email" id="email" placeholder="Your Email" required>
            <div class="">
            </div>
            <div class="btn-co text-center">
              subject
            </div>
            <div class="">
              <input type="text" class="px-14 py-2 mt-0 mb-2" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="btn-co text-center">
              message
            </div>
            <div class="">
              <textarea class="px-16 py-2 border mt-0" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
                    <router-link class="LoginBtn flex justify-center " to="/Vpage"><font-awesome-icon icon="fa-solid fa-envelope"/></router-link>
          </form>
        </div>

      </div>

  </section>
</template>
