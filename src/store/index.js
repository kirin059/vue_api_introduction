import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "http://recruit.web.smartjackwp.co.kr/menu";

export default new Vuex.Store({
  state: {
    title: "",
  },
  // 유일하게 state를 변경할 수 있다
  mutations: {
    changeTitle(state, data) {
      console.log(data);
      return (state.title = data);
    },
    // selectTitle(state, payload) {
    //   return state.title[payload];
    // },
  },
  // getters: {
  //   setTitle: (state) => {
  //     return state.title;
  //   },
  // },
  // Mutations를 실행시키는 역할
  actions: {
    loadData(context) {
      axios
        .get(URL)
        .then((res) => {
          const data = res.data.menuList;
          context.commit("changeTitle", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  //modules: {},
});
