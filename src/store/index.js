import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "http://recruit.web.smartjackwp.co.kr/menu";

export default new Vuex.Store({
  state: {
    title: "",
  },
  mutations: {
    changeTitle(state, data) {
      console.log(data);
      return (state.title = data);
    },
  },
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
});
