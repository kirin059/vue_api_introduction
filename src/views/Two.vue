<template>
  <div class="two">
    {{ changeTitle }}222
  </div>
</template>

<script>

export default {
  name: "two",
  methods: {
      changeTitle () {
        this.$store.commit ('setTitle', 1)
      },
    },
};
</script>
