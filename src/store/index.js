import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import api from "../services/api";
export default new Vuex.Store({
  state: { users: [] },
  getters: {},
  mutations: {
    log_in(state, users) {
      state.users = users;
    },
  },
  actions: {
    async login({ commit }, email) {
      try {
        let response = await api().get("/users");
        let users = response.data;
        let currentuser = users.find((v) => v.email == email);
        if (currentuser) {
          commit("log_in", currentuser);
          console.log(currentuser);
          return currentuser;
        }
      
      } catch (error) {
        console.error(error);
        return {error};
      }

      // Sincere@april.biz
    },
  },

  modules: {},
});
