import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index.vue'
import Message from '@/views/Message.vue'
import Center from '@/views/Center.vue'


let routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            value: 1
        }
    },
  {
    path: '/msg',
    name: 'Message',
    component: Message,
    meta: {
      value: 2
    }
  },
  {
    path: '/center',
    name: 'Center',
    component: Center,
    meta: {
      value: 3
    }
  },
];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
