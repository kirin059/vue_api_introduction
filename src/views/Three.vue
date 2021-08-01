<template>
  <div class="three">
   {{ this.$store.state.title[2].title }}
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
