import { createRouter, createWebHistory } from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import Accaunt from "@/components/Accaunt.vue";
import Account22 from "@/components/Account22.vue"
import statistika from "@/components/statistika.vue";
import call from "@/components/call.vue";
import users from "@/components/users.vue";
import add_users from "@/components/add_users.vue"; 
import change_user from "@/components/change_user.vue";  
import registrarion from "@/components/registrarion.vue"
import Header from "@/components/Header.vue"
import Head from "@/components/Header.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'Accaunt',
      
    },
   
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Head',
      name: 'Head',
      component: Header
    },
    {
      path: '/Accaunt',
      name: 'Accaunt',
      component: Accaunt
    },
    {
      path: '/Account22',
      name: 'Account22',
      component: Account22
    },
    {
      path: '/registrarion',
      name: 'registrarion',
      component: registrarion
    },
    {
      path: '/call',
      name: 'call',
      component: call
    },
     {
      path: '/statistika',
      name: 'statistika',
      component: statistika
    },
   
    {
      path: '/users',
      name: 'users',
      component: users  
    },
    {
      path: '/add_users',
      name: 'add_users',
      component: add_users  
    },
    {
      path: '/change_user',
      name: 'change_user',
      component: change_user 
    },
  ]
})

export default router
