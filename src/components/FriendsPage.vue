<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Friends</h2>
    <ul class="list-group">
      <li v-for="friend in friends" :key="friend.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ friend.username }}
        <div>
          <button @click="removeFriend(friend.id)" v-if="isFriend(friend.id)" class="btn btn-danger">Remove</button>
          <button @click="addFriend(friend.id)" v-else class="btn btn-primary">Add</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { id: 1, username: 'John Doe' , added: false},
        { id: 2, username: 'Jane Smith', added: true},
        { id: 3, username: 'Bob Johnson', added: false},
        // Add more dummy friend data here
      ],
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async addFriend(userId) {
      try {
        // Dummy implementation for adding a friend
        // This is where you would make the actual API call to add a friend
        console.log(`Added friend with ID: ${userId}`);
      } catch (error) {
        console.error(error); // Handle add friend error
      }
    },
    // eslint-disable-next-line no-unused-vars
    async removeFriend(userId) {
      try {
        // Dummy implementation for removing a friend
        // This is where you would make the actual API call to remove a friend
        console.log(`Removed friend with ID: ${userId}`);
      } catch (error) {
        console.error(error); // Handle remove friend error
      }
    },
    // eslint-disable-next-line no-unused-vars
    isFriend(userId) {
      // Dummy implementation to check if the user is a friend
      // Replace this with your logic to check if the user is in the friends array
      return false;
    },
  },
};
</script>
