<template>
  <div class="one">
    {{ changeTitle }}
  </div>
</template>

<script>

export default {
  name: "one",
  methods: {
      changeTitle () {
        this.$store.commit ('setTitle', 0)
      },
    },
};
</script>
