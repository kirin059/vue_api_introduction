import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "http://recruit.web.smartjackwp.co.kr/menu";
const loadDatas = axios.get(URL).then((res) => {
  //console.log(res.data.menuList);
  return res.data.menuList;
});
console.log(loadDatas);
export default new Vuex.Store({
  state: {
    title: "1번 문제",
  },
  mutations: {
    // getTitleData(state, payload) {
    //   state[payload].title;
    // },
    changeTitle(state, payload) {
      return state.title[payload];
    },
  },
  getters: {
    setTitle: (state) => {
      return state.title;
    },
  },
  actions: {
    loadData(context) {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          context.commit("changeTitle", res.data.menuList);
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
// }).$mount('#app');
