<template>
  <div id="app">
    <div class="sidebar">
        <h2>스마트잭</h2>
        <div class="title">
            <p>{state}</p>
            <span class="dropdown" :class="{shown: state}">
                <button href="#" @click.prevent="toggleDropdown" class="dropdown-toggle">menu</button>
                <div class="dropdown-menu" v-show="state">
                    <ul>
                        <li><router-link to="/">One</router-link></li>
                        <li><router-link to="/two">Two</router-link></li>
                        <li><router-link to="/three">Three</router-link></li>
                    </ul>
                </div>
            </span>
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
            document.addEventListener('click', this.close)
        },
}
</script>
<style>
#app {
  display: flex;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
