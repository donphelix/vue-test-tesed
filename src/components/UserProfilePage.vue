<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Profile</h2>
    <div v-if="user" class="card">
      <div class="card-body">
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">
      Profile data not available.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      // Get the user from Vuex state or from your API
      // For this example, the user is returned from the data() method
      // Replace this with the actual user data from your application
      return this.userData;
    },
  },
  data() {
    return {
      userData: {
        username: "John Doe",
        email: "john@example.com",
      },
    };
  },
};
</script>
