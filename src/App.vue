<template>
  <div id="app">
    <div class="sidebar">
        <h3>스마트잭</h3>
        <div class="title">
            <p v-show="isShow">문제</p>
            <p v-show ="isFirst"> {{ titleList[0] }} </p>
            <p v-show ="isSecond"> {{ titleList[1] }} </p>
            <p v-show ="isThird"> {{ titleList[2] }} </p>

            <div class="dropdown" :class="{shown: state}">
                <button href="#" @click.prevent="[toggleDropdown(), loadData()]" class="dropdown-toggle">menu</button>   
            </div>
        </div>
        <div class="dropdown-menu" v-show="state">
          <ul>
            <li @click="[loadData(), isShows(), selectTitle1()]"><router-link to="/one"> {{ titleList[0] }} </router-link></li>
            <li @click="[loadData(), isShows(), selectTitle2()]"><router-link to="/two"> {{ titleList[1] }} </router-link></li>
            <li @click="[loadData(), isShows(), selectTitle3()]"><router-link to="/three"> {{ titleList[2] }} </router-link></li>
          </ul>
        </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      isShow: true,
      state: true,
      titleList: ['1번 문제', '2번 문제', '3번 문제'],
      titles: this.$store.state.title.id,
      isFirst: false,
      isSecond: false,
      isThird: false
    }
  },
  methods: {
     isShows () {
          this.isShow = false
      },
      toggleDropdown () {
          this.state = !this.state
      }, 
      close (e) {
          if (!this.$el.contains(e.target)) {
              this.state = false
          }
      },
      loadData() {
        this.$store.dispatch('loadData')
      },
      selectTitle1() {
        this.isFirst = true,
        this.isSecond = false,
        this.isThird = false
      },
      selectTitle2() {
        this.isFirst = false,
        this.isSecond = true,
        this.isThird = false
      },
      selectTitle3() {
        this.isFirst = false,
        this.isSecond = false,
        this.isThird = true
      },

      // selectTitle() {
      //   this.$store.commit('selectTitle')
      // },
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
  mounted () {
      document.addEventListener('click', this.close);
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  flex: 2;
  padding: 2%;
  height: 100vh;
  background-color: rgb(243, 221, 26);
  text-align: left;
}
h3 {
  margin:0;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.title p {
  margin: 0;
  font-size: 30px;
  font-weight: 900;
}
.title .dropdown {
  margin: 0;
  height: 30px;
}
.title .dropdown button {
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 5px;
}
.dropdown-menu  {
  width: 100%;
}
.dropdown-menu ul {
  padding: 0;
  list-style: none;
}
.dropdown-menu ul li {
  padding: 15px 0 0 10px;
  text-decoration-line: none;
}
.dropdown-menu ul li:hover {
  border-radius: 5px;
  background-color: red;
}
.main {
  flex: 8;
  height: 100vh;
  padding: 50px 0;
  background-color: rgb(236, 232, 232);
  font-size: 30px;
}
</style>
