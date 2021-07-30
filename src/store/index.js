import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
//import App fromm '../App.vue';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const URL = "http://recruit.web.smartjackwp.co.kr/menu/";

export default new Vuex.Store({
  state: {
    title: "",
  },
  mutations: {
    // getTitleData(state, payload) {
    //   state[payload].title;
    // },
    getTitleData(state, title) {
      state.title = title;
    },
  },
  actions: {
    loadData({ commit }) {
      axios
        .get(URL)
        .then((res) => res.menuList)
        .then((title) => {
          commit("getTitleData", title);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  //modules: {},
});

// new Vue({
//   store,
//   render: h => h(App),
// }).$mount('#app');d
