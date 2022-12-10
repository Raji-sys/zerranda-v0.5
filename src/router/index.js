import {
  createRouter,
  createWebHistory
} from 'vue-router';

import Home from '../views/Home.vue';
import vLogin from '../views/vLogin.vue'
import vRegister from '../views/vRegister.vue'
import uLogin from '../views/uLogin.vue'
import uRegister from '../views/uRegister.vue'
import VStartPage from '../views/VStartPage.vue'
import UStartPage from '../views/UStartPage.vue'
import Listings from '../views/Listings.vue'
import plumbing from '../views/plumbing.vue'
import services from '../views/services.vue'
import VPageCView from '../views/VPageCView.vue'
import VpageView from '../views/VpageView.vue'
import UpageView from '../views/UpageView.vue'
import ContactView from '../views/ContactView.vue'
import TestimonialView from '../views/TestimonialView.vue'
import TermsView from '../views/TermsView.vue'
import AboutView from '../views/AboutView.vue'
import FAQsView from '../views/FAQsView.vue'



const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/vLogin',
  name: 'VLOGIN',
  component: vLogin
},
{
  path: '/vRegister',
  name: 'VREGISTER',
  component: vRegister
},
{
  path: '/uLogin',
  name: 'ULOGIN',
  component: uLogin
},
{
  path: '/uRegister',
  name: 'UREGISTER',
  component: uRegister
},
{
  path: '/VStartPage',
  name: 'VSTARTPAGE',
  component: VStartPage
},
{
  path: '/UStartPage',
  name: 'USTARTPAGE',
  component: UStartPage
  },
  {
    path: '/Listings',
    name: 'LISTINGS',
    component: Listings
  },
  {
    path: '/plumbing',
    name: 'PLUMBING',
    component: plumbing
  },
  {
    path: '/services',
    name: 'SERVICES',
    component: services
  },
  {
    path: '/VPageCView',
    name: 'VPAGECVIEW',
    component: VPageCView
  },
  {
    path: '/Vpage',
    name: 'VPAGE',
    component: VpageView
  },
  {
    path: '/Upage',
    name: 'UPAGE',
    component: UpageView
  },
  {
    path: '/contact',
    name: 'CONTACTVIEW',
    component: ContactView
  },
  {
    path: '/testimonial',
    name: 'TESTIMONIAL',
    component: TestimonialView
  },
  {
    path: '/terms',
    name: 'TERMS',
    component: TermsView
  },
  {
    path: '/FAQs',
    name: 'FAQS',
    component: FAQsView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
