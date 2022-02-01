import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Projects from '../views/Projects.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'
import ProjectDetails from '../views/ProjectDetails.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    component:About
  },
  // {
  //   path: '/skills',
  //   name: 'Skills',
  //   component:Skills
  // },
  {
    path: '/resume',
    name: 'Resume',
    component:Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component:Projects
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component:Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path:'/projects/:id',
    name:'ProjectDetails',
    component:ProjectDetails,
    props:true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
