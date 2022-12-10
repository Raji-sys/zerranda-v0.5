<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHome)
</script>
<template>
<section>
<fieldset class="fieldsetLogin">
    <div class="Login ">
    <form method="POST" action="#">
        <div class="mt-1">
            username
        </div>
    <div class="mb-2">    
        <input type="text" name="username" placeholder="Username..." class="p-2">
    </div>
        <div class="mt-4">
            password
        </div>
        <div class="mb-4">
        <input type="password" name="password" placeholder="Password..." class="p-2">
    </div>
        <router-link class="LoginBtn" to="/Vpage"><font-awesome-icon icon="fa-solid fa-home"/></router-link>
    </form>
</div>
</fieldset>
</section>

</template>
