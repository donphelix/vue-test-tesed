// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Component imports
import LoginPage from './components/LoginPage.vue';
import UserRegistrationPage from './components/UserRegistrationPage.vue';
import UserDiscoverPage from './components/UserDiscoverPage.vue';
import UserProfilePage from './components/UserProfilePage.vue';
import FriendsPage from './components/FriendsPage.vue';
import HomePage from "@/components/HomePage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: UserRegistrationPage },
  { path: '/discover', component: UserDiscoverPage },
  { path: '/profile', component: UserProfilePage },
  { path: '/friends', component: FriendsPage },
  { path: '/:pathMatch(.*)*', redirect: '/login' }, // Redirect to login if the route is not found
];

const router = createRouter({
  history: createWebHistory(), // Use history mode to remove the "#" from the URLs
  routes,
});

export default router;
