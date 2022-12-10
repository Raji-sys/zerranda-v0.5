<script setup>
</script>
<template>

<section >
<fieldset class="fieldsetReg">
    <div class="Register">
    <form method="POST" action="vPage.html"> 
 <div class="mt-1">full name</div>
        <div class="mb-2">         
        <input type="text" name="fullname" placeholder="full name..." class="p-1">
    </div>
    <div class="mt-4">phone number</div>
        <div class="mb-2">            
        <input type="tel" name="phonenumber" placeholder="phone number..." class="p-1">
    </div>
    
<div class="mt-4">occupation</div>
        <div class="mb-2">        
        <input type="text" name="occupation" placeholder="occupation..." class="p-1">
    </div>

<div class="mt-4">state</div>
        <div class="mb-2">            
    <input type="text" name="state" placeholder="state..." class="p-1">
    </div>

<div class="mt-4">address</div>
        <div class="mb-2">            
    <input type="text" name="address" placeholder="address..." class="p-1">
    </div>

<div class="mt-4">email</div>
        <div class="mb-2">        
        <input type="email" name="email" placeholder="email address..." class="p-1">
    </div>

<div class="mt-4">password</div>
        <div class="mb-2">        
        <input type="password" name="password" placeholder="password..." class="p-1">
    </div>
    <div class="mt-4">password</div>
            <div class="mb-4">
        <input type="password" name="confirm password" placeholder="confirm password..." class="p-1">
    </div>
<router-link class="LoginBtn" to="/Upage">register</router-link>
    </form>
</div>
</fieldset>
</section>
</template>
