<template>
  <div class="three">
   {{ this.$store.state.title[2].title }} 
    <main>
        <div>src</div>
        <ul>
            <li> store - index.js </li>
            <li>App.js</li>
            <li>main.js</li>
            <li> router - index.js </li>
            <li> views </li>
            <li class="out">One.vue</li>
            <li class="out">Two.vue</li>
            <li class="out">Three.vue</li>
        </ul>
    </main>
  </div>
</template>

<script>
    export default {
    name: "three",
    };
</script>

<style>
    main {
    margin-top: 50px;
    text-align: left;
    }
    ul {
        list-style: none;
    }
    .out {
    text-indent: 2em;
    }
</style>