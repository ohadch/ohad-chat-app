import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatsPage from '../pages/chats/ChatsPage'
import ProfilePage from '../pages/profile/ProfilePage'
import SettingsPage from '../pages/settings/SettingsPage'
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ChatsPage',
    component: ChatsPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: SettingsPage
  },
]

const router = new VueRouter({
  routes
})

export default router
