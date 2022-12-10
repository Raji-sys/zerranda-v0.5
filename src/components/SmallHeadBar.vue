<script setup>

</script>
<template>
        <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bd2 p-1 shadow-lg">
        <div class="container text-center">
            <router-link to="/"><h2 class="mb-0"><img class="" src="img/logo.png"></h2></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-placeholder="menu" value="menu" placeholder="menu"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="item">
                        <router-link to="/listings" class="sz nav-link btn-sty text-dark mx-3">
                        <i class="bi bi-file-spreadsheet-fill bGC"></i>listings</router-link></li>
                    <li class="item">
                        <router-link to="/messages" class="sz nav-link btn-sty text-dark mx-3">
                            <i class="bi bi-chat-left-fill bGC"></i>messages</router-link></li>
                    <li class="item">
                        <router-link to="/wallet" class="sz nav-link btn-sty text-dark mx-3">
                            <i class="bi bi-wallet-fill bGC"></i>&nbsp;wallet</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
