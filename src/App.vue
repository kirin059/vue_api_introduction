<template>
  <div id="app">
    <div class="sidebar">
        <h3>스마트잭</h3>
        <div class="title">
            <p>{{title}}</p>
            <div class="dropdown" :class="{shown: state}">
                <button href="#" @click.prevent="toggleDropdown" class="dropdown-toggle">menu</button>   
            </div>
        </div>

        <div class="dropdown-menu" v-show="state">
          <ul>
            <li @click="this.$store.commit('titleNum', 0)"><router-link to="/one">1번 문제</router-link></li>
            <li @click="this.$store.commit('titleNum', 1)"><router-link to="/two">2번 문제</router-link></li>
            <li @click="this.$store.commit('titleNum', 2)"><router-link to="/three">3번 문제</router-link></li>
    
          </ul>
        </div>
    </div>

    <div class="main">
      <router-view />
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "App",
  data () {
            return {
            state: false
            }
        },
  methods: {
      toggleDropdown () {
          this.state = !this.state
      },
      close (e) {
          if (!this.$el.contains(e.target)) {
              this.state = false
          }
      }
  },
  mounted () {
      document.addEventListener('click', this.close);
      this.$store.dispatch('getTitleData')
  },
  computed: mapState([
        'title'
  ]),
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
  background-color: rgb(236, 232, 232);
}
</style>
