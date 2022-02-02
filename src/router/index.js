import { createRouter, createWebHashHistory } from 'vue-router'
import UsersTable from "@/components/UsersTable";
import UserPage from "@/components/UserPage";

const routes = [
  {
    path: '/',
    name: 'table',
    component: UsersTable
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
