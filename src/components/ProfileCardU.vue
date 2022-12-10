<script>
export default {
  name: 'ProfileCard'
}
</script>

<template>
    <div class="col-md-3 mb-3">
        <div class="card">
            <div class="card-body shadow-lg">
                <div class="d-flex flex-column align-items-center text-center">
                    <img src="img/zakir.JPG" alt="Admin" class="rounded-circle" width="150">
                <div class="mt-3">
                    <h4>John Doe</h4>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted mb-1">test@gmail.com</p>
                    <p class="text-muted mb-1">080454242421</p>
                    <p class="text-muted">070454242421</p>
                </div>
                </div>
            <router-link class="btn-outline-secondary btn-lg w-100" to="#">edit profile</router-link>
            </div>
        </div>
    </div>
</template>
