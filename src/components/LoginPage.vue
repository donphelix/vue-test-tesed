<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Login</h2>
    <form @submit.prevent="login" class="border rounded p-4 shadow">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="formData.usernameOrEmail" type="text" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary stretched-link">Login</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      formData: {
        usernameOrEmail: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Api-Key", "Jpfrk5qEol");
        myHeaders.append("Api-Password", "I6jTtlbKwcyTEXi");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic YWRtaW46YWRtaW4=");
        myHeaders.append("Cookie", "JSESSIONID=82A364598F33EC4F13404D4279394227");

        const raw = JSON.stringify(this.formData);

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        };

        const response = await fetch("http://127.0.0.1:9595/api/auth/signin", requestOptions);
        const data = await response.json();


        // Handle the response based on the status
        if (response.ok) {
          // Login successful, store the token in localStorage
          // const token = data.token;
          // localStorage.setItem('jwtToken', token);

          // Redirect to the home page or any other page after successful login
        // Replace '/home' with your desired route
        this.$router.push("/friends");
        } else {
          // Login failed, show an error message
          console.error('Login failed:', data.message);
          // You can also display the error message in the UI to inform the user
        }
      } catch (error) {
        // Handle login error here, e.g., show an error message
        console.error("Login error:", error);
      }
    },
  },
};
</script>
