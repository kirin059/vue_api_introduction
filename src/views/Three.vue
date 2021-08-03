<template>
  <div class="three">
   {{ this.$store.state.title[2].title }}
   
    <main>Promise</main>
  </div>
</template>

<script>

export default {
  name: "three",
  methods: {
    changeTitle () {
      this.$store.commit ('setTitle', 2)
    },
  },
};
</script>


<style>
main {
  margin-top: 50px;
}
</style>