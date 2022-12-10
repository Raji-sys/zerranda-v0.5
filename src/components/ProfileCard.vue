<script setup>
// import profile from '../api/profile'

// export default {
//   name: 'ProfileCard',
//   methods: {
//     Like () {
//       store.state.votes++
//     }
//   },
//   computed: {
//     prof () {
//       return store.state.prof
//     },
//     users () {
//       return store.state.users
//     }
//   },
//   created () {
//     profile.getProf(prof => {
//       store.commit('setProf', prof)
//     })
//     store.dispatch('loadUsers')
//   }
// }
</script>
<template>
    <div class="col-md-3 mb-3">
        <div class="card">
            <div class="card-body shadow-lg">
                <div class="d-flex flex-column align-items-center text-center">
                    <img :src=$store.state.img2 alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3" v-for="u in users" :key="u.id">
                    <h4>{{u.name}}</h4>
                    <p class=" mb-1">{{u.email}}</p>
                    <p class=" mb-1">{{u.phone}}</p>
                </div>
                    <p class=" mb-1">{{$store.state.votes}}</p>
                    <button @click="$store.dispatch('vt')" class="gBtn btn-outline-secondary btn-lg btn-svp" >
                <i class="bi bi-hand-thumbs-up-fill bGC"></i>&nbsp;
                </button>
                </div>
            <div class="border-top bg-white text-center justify-content-evenly align-items-center p-1 ">
                <h5 class="mb-0">available for work?</h5>
                <p v-if="$store.state.vAvailability"><i class="bi bi-check-circle-fill fs-3 text-success"></i></p>
                <p v-else><i  class="bi bi-x-circle-fill fs-3 text-danger"></i></p>
            </div>
            </div>
        </div>
          <div class="card mt-5 mb-5 shadow-lg">
    <div class=" bd2 text-center fs-3 card-heading">top vendors</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item  text-dark d-flex justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex text-dark  justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex  text-dark justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex  justify-content-center text-dark align-items-center flex-wrap">Mr. xyz</li>
      <li class="list-group-item d-flex text-dark  justify-content-center align-items-center flex-wrap">Mr. xyz</li>
      </ul>
    </div>
    </div>
</template>
