import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTwitter} from '@fortawesome/free-brands-svg-icons'

// library.add(faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')