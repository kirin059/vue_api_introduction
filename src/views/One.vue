<template>
  <div class="one">
    {{ title }} 111
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
