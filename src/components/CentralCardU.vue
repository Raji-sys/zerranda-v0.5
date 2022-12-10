<script>
export default {
  name: 'CentralCard'
}
</script>

<template>
<div class="col-md-6 mb-5">
    <div class="card mb-2 ">
        <div class="text-dark card-body shadow-lg text-center ">
        <address>
                <h4 class="">cde Enterprise</h4>
                <p class="mb-0">No2 grwry street ft, Kano</p>
                <p>we deal with any kind of problem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error!</p>
                <p class="border-bottom p-3"><router-link class="vpBtn btn-lg w-50 border-2 btn-outline-dark" to="/VPageCView">view page</router-link></p>
            <div class="text-center justify-content-evenly align-items-center p-4 d-flex flex-wrap ">
                <button class="callBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-telephone-outbound-fill bGC"></i>call</button>
                    <button class="gBtn btn-outline-secondary btn-lg btn-svp">
                        <i class="bi bi-lightning-fill bGC"></i>&nbsp;request</button>
                <button class="uBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-chat-left-fill bGC"> </i>message</button>
            </div>
        </address>
        </div>
            <div class="border-top bg-white text-center justify-content-evenly align-items-center p-1 ">
                <h5 class="mb-0">available for work?</h5>
                <p v-if="vAvailability"><i class="bi bi-check-circle-fill fs-3 text-success"></i></p>
                <p v-else><i  class="bi bi-x-circle-fill fs-3 text-danger"></i></p>
            </div>
        </div>
    <div class="card mb-2 ">
        <div class="text-dark card-body shadow-lg text-center ">
        <address>
                <h4 class="">cde Enterprise</h4>
                <p class="mb-0">No2 grwry street ft, Kano</p>
                <p>we deal with any kind of problem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error!</p>
                <p class="border-bottom p-3"><router-link class="vpBtn btn-lg w-50 border-2 btn-outline-dark" to="/VPageCView">view page</router-link></p>
            <div class="text-center justify-content-evenly align-items-center p-4 d-flex flex-wrap ">
                <button class="callBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-telephone-outbound-fill bGC"></i>call</button>
                    <button class="gBtn btn-outline-secondary btn-lg btn-svp">
                        <i class="bi bi-lightning-fill bGC"></i>&nbsp;request</button>
                <button class="uBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-chat-left-fill bGC"> </i>message</button>
            </div>
        </address>
        </div>
            <div class="border-top bg-white text-center justify-content-evenly align-items-center p-1 ">
                <h5 class="mb-0">available for work?</h5>
                <p v-if="vAvailability"><i class="bi bi-check-circle-fill fs-3 text-success"></i></p>
                <p v-else><i  class="bi bi-x-circle-fill fs-3 text-danger"></i></p>
            </div>
        </div>
</div>
</template>
