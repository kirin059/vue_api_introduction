<template>
  <div class="two">
    {{ changeTitle }}
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
