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
                <div class="border-top bg-white text-center justify-content-evenly align-items-center p-1 ">
                <h5 class="mb-0">available for work toggle?</h5>
                <p><i class="bi bi-check-circle-fill fs-3 text-success"></i></p>
                <p><i  class="bi bi-x-circle-fill fs-3 text-danger"></i></p>
                <router-link class="btn-outline-secondary btn-lg w-100" to="#">edit profile</router-link>
            </div>
            </div>
        </div>
    <div class="card mt-5 mb-5 shadow-lg">
    <div class=" bd2 text-center fs-3 card-heading">top customers</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-dark d-flex justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex text-dark justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex text-dark justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex justify-content-center text-dark align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex text-dark justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      </ul>
    </div>
</div>
</template>
