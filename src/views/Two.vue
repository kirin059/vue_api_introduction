<template>
  <div class="two">
   {{ this.$store.state.title[1].title }}
   
    <main>Promise</main>
  </div>
</template>

<script>

export default {
  name: "two",
};
</script>

<style>
main {
  margin-top: 50px;
}
</style>