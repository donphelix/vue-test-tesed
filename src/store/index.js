// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null, // Store user information once logged in
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, user) {
      // Perform login API call using Axios or Vue's HTTP library
      // On successful login, commit the user to the state
      commit('setUser', user);
    },
    logout({ commit }) {
      // Perform logout API call using Axios or Vue's HTTP library
      // On successful logout, reset the user state to null
      commit('setUser', null);
    },
  },
});

export default store;
