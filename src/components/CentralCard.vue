<script>
export default {
  name: 'CentralCard'
}
</script>

<template>
<div class="col-md-6 mb-5">
    <div class="card mb-5">
        <div class="text-dark card-body text-center shadow-lg">
            <address>
                <h4 class="">Abc Enterprise</h4>
                <p class="mb-0">No1 qwerty street ft, Kano</p>
        <p class="border-bottom p-4">we deal with any kind of problem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, error!</p>
            </address>
            <div class="border-bottom text-center justify-content-evenly align-items-center p-4 d-flex flex-wrap ">
                <button class="callBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-telephone-outbound-fill bGC"></i>call</button>
                    <button class="gBtn btn-outline-secondary btn-lg btn-svp">
                        <i class="bi bi-lightning-fill bGC"></i>&nbsp;request</button>
                <button class="uBtn btn-outline-secondary btn-lg btn-svp">
                    <i class="bi bi-chat-left-fill bGC"> </i>message</button>
            </div>
        </div>

            <div class=" bg-white text-center justify-content-evenly align-items-center p-4 d-flex flex-wrap">
                <router-link to="/" class="gBtn btn-outline-secondary btn-lg btn-svp">
                <i class="bi bi-archive-fill bGC"></i>&nbsp;gallery</router-link>
                <!-- <button @click="$store.commit('upvoteBtn')" class="gBtn btn-outline-secondary btn-lg btn-svp" >
                <i class="bi bi-hand-thumbs-up-fill bGC">{{$store.state.users.upvote}}</i>&nbsp;
                upvote
                </button> -->
                <router-link to="/" class="uBtn btn-outline-secondary btn-lg btn-svp">
                <i class="bi bi-calendar-check-fill bGC"></i>calender</router-link>
                <router-link to="/" class="gBtn btn-outline-secondary btn-lg btn-svp">
                <i class="bi bi-journal-album bGC"></i>&nbsp;records</router-link>
            </div>

        </div>

<div class="card">
    <div class="card-body shadow-lg">
        <div class="border-bottom text-center lead">reviews and feedback</div>
        <div class="h-100 p-5 bg-light box border rounded-3">
            <form method="POST" action="">
                <div class="input-group mb-3">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="bi bi-person bGC h3"></i></span>
                    </div>
                    <input type="text" name="username" placeholder="customer name" class="form-control">
                </div>
                <div class="input-group justify-content-center">
                    <span class="input-group-text"><i class="bi bi-chat-fill bGC h3"></i> </span>
                    <textarea class="form-control" placeholder="enter your comments" aria-label="With textarea"></textarea>
                    <button class="btn-com border-1 btn-lg btn-outline-secondary"><i class="bi bi-envelope-fill bGC h3"> </i></button>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
</template>
