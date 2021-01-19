import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Vue.prototype.$http = axios;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
  },
  mutations: {
    SET_USER(state, Users) {
      state.userList = Users;
    },
  },
  actions: {
    getUserList({ commit }, queryParams) {
      axios.get('/users', { params: queryParams }).then((response) => {
        commit('SET_USER', response.data);
      });
    },
  },
});
