<template>
  <div class="container mt-5">
    <h1 class="display-4 text-center mb-5">Please Login or register</h1>

    <!-- Conditionally display Login and Register components -->
    <div v-if="showLogin" class="row justify-content-center">
      <div class="col-md-6">
        <Login @onLogin="onLogin" />
      </div>
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-md-6">
        <Register @onRegister="onRegister" />
      </div>
    </div>

    <!-- Show a button to toggle between Login and Register components -->
    <div class="row justify-content-center mt-4">
      <div class="col-md-6 text-center">
        <button @click="toggleForm" class="btn btn-primary">
          {{ showLogin ? 'Register' : 'Login' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './LoginPage.vue';
import Register from './UserRegistrationPage.vue';

export default {
  name: 'HomePage',
  components: {
    Login,
    Register,
  },
  data() {
    return {
      showLogin: true, // Show Login form by default
    };
  },
  methods: {
    toggleForm() {
      this.showLogin = !this.showLogin;
    },
    onLogin(user) {
      // Handle the login logic and update the state, e.g., using Vuex store
      console.log('Logged in:', user);
    },
    onRegister(user) {
      // Handle the registration logic and update the state, e.g., using Vuex store
      console.log('Registered:', user);
    },
  },
};
</script>
