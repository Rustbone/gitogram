<template>
  <div class="c-test" :class="{dark}">
    <h1>title: {{ test.title }}</h1>
    <h2>owner: {{ test.username }}</h2>
    <h3>stars: {{ test.stars }}</h3>
    <p v-if="description">description: {{ test.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    test: Object,
    // title: String,
    // username: String,
    // stars: Number,
    // description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped>
.c-test {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9E9E9E
}
</style>