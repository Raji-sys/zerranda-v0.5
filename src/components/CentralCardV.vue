<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPhotoFilm,faCalendarAlt,faCheck,faClose,faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp} from '@fortawesome/free-regular-svg-icons'


library.add(faPhotoFilm,faThumbsUp,faCalendarAlt,faBook,faCheck,faClose,faCommentAlt)
</script>

<template>
<div style="background:linear-gradient(-45deg,#edf2f7, #021f2a, #edf2f7);">
<!-- <div class="border-t border-slate-200 mt-6"></div> -->
<div class=" grid grid-cols-1 gap-10 align-middle">
    
<div class="mt-10 mb-2 p-3 mx-auto md:max-w-2xl w-full shadow-lg border rounded-lg text-center bg-white" >
  
  <div class="mt-2 py-2">
        <div class="mt-2 mb-2">
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mansa Musa</h3>
            <div class="text-xs mt-0 text-slate-400 font-bold uppercase">
              Tarauni, Kano
            </div>
        </div>
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                    <p class="mt-1 leading-relaxed text-slate-600">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>

                </div>
            </div>
        </div>

        <div class="flex  flex-wrap justify-center" >
          <div class="border-t border-slate-200 w-full text-center mt-10">
            <div class="flex justify-center lg:pt-2 pt-2">
                  <div class="p-3 text-center ">
                <span class="text-xl font-bold block btn-co"> 
                          <font-awesome-icon icon="fa-solid fa-comment-alt" size="lg" class="mx-3"/>
                        </span>
                        <span class="text-sm btn-co">messages</span>
                    </div>
              <div class="p-3 text-center">
                <span class="text-xl font-bold block btn-co"> 
                          <font-awesome-icon icon="fa-solid fa-photo-film" size="lg" class="mx-3"/>
                        </span>
                        <span class="text-sm btn-co">gallery</span>
                    </div>
                    <div class="p-3 text-center">
                      <span class="text-xl font-bold block btn-co">
                        <font-awesome-icon icon="fa-regular fa-thumbs-up" size="lg" class="mx-3"/>
                        </span>
                        <span class="text-sm  btn-co">upvotes</span>
                    </div>

                    <div class="p-3 text-center">
                      <span class="text-xl font-bold block btn-co">
                        <font-awesome-icon icon="fa-solid fa-calendar-alt" size="lg" class="mx-3"/>
                      </span>
                        <span class="text-sm btn-co">calendar</span>
                    </div>
                    <div class="p-3 text-center">
                      <span class="text-xl font-bold block btn-co">
                        <font-awesome-icon icon="fa-solid fa-book" size="lg" class="mx-3"/>
                        </span>
                        <span class="text-sm btn-co">record</span>
                    </div>
                </div>
            </div>
        </div>  
        <!-- <h5 class="mt-2 btn-co py-2 border-t border-slate-200 text-center">status</h5>      -->
    <div class="flex items-center justify-center  btn-co py-2">
                <span class="text-xl font-bold block uppercase tracking-wide text-green-700">
                  I am available
                  <font-awesome-icon icon="fa-solid fa-check" size="lg" class="mx-3"/>
                </span>
              <!-- <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  <font-awesome-icon icon="fa-solid fa-close" size="lg" class="mx-3"/>
                  not available
                </span> -->

    </div>
</div>
    

</div>
    <section class="TestimonialSection" id="testimonial">

<div class="TestimonialWrap" >
<div class="mt-6">
  <span class="SloganTxt text-3xl ">testimonial</span>
</div>

<div class="TestimonialCard gap-10">
    
    <div class="max-w-md py-4 px-8 bg-white border shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 btn-co" src="img/1.jpg">
  </div>
  <div>
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
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
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
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
    <h2 class="btn-co text-6xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium btn-co">Zakir</a>
  </div>
</div>

  </div>

  </div>  
</section>



</div>
</template>
