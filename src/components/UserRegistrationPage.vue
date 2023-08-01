<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Registration</h2>
    <form @submit.prevent="registerUser" class="border rounded p-4 shadow">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" class="form-control" required>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await this.$http.post('/api/register', userData);
        console.log(response.data); // Handle successful registration
      } catch (error) {
        console.error(error); // Handle registration error
      }
    },
  },
};
</script>
