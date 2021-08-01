<template>
  <div class="three">
    {{ changeTitle }}333
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
