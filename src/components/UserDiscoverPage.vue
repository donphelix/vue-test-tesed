<template>
    <div>
      <h2>Discover Users</h2>
      <input type="text" v-model="searchKeyword" @input="searchUsers" placeholder="Search by username">
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.username }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchKeyword: '',
        users: [],
      };
    },
    methods: {
      async searchUsers() {
        try {
          // Make the user search API call using Axios or Vue's HTTP library
          // For example:
          // const response = await this.$http.get(`/api/users/search?keyword=${this.searchKeyword}`);
          // Set the users array with the response data
        } catch (error) {
          console.error(error); // Handle search error
        }
      },
    },
    created() {
      this.searchUsers();
    },
  };
  </script>
  