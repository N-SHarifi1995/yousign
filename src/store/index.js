import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import api from "../services/api";
export default new Vuex.Store({
  state: { user: {} },
  getters: {},
  mutations: {
    log_in(state, user) {
      state.user = user;
      window.localStorage.currentuser=JSON.stringify(user);
      console.log(state.user)
    },log_out(state) {
      state.user = {};
      window.localStorage.currentuser=JSON.stringify({});
     
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
        return { error };
      }

      // Sincere@april.biz
    },
    async signup({ commit }, email) {
      try {
        let response = await api().post("/users", email);
        let newUser = response.data;
        console.log(newUser);
        if (200<=response.status<=202) {
          commit("log_in", newUser);

          return newUser;
        }
      } catch (error) {
        console.error(error);
        return { error };
      }

      // Sincere@april.biz
    },
    loaduser({commit}){
      let user = JSON.parse(window.localStorage.currentuser);
      console.log(user)
      commit('log_in', user)
    },
    logout({commit}){
     
      commit('log_out')
    }
  },

  modules: {},
});
