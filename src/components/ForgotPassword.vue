<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="resetPassword">
        <div>
          <label for="email">Email:</label>
          <input v-model="formData.email" type="email" required>
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          email: '',
        },
      };
    },
    methods: {
        async resetPassword() {
            try {
                const response = await axios.post('/api/auth/forgot-password', this.formData);
                // Handle successful reset password initiation here, e.g., show a success message
                console.log('Password reset initiated:', response.data.message);

                // Redirect to the login page or any other page after successful reset password initiation
                // Replace '/login' with your desired route
                this.$router.push('/login');
            } catch (error) {
                // Handle reset password initiation error here, e.g., show an error message
                console.error('Password reset error:', error);
            }
        },
    },
  };
  </script>
  