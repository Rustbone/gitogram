<template>
  <div class="comment">
    <div class="comment__username mr-4">{{ username }}</div>
    <div class="comment__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    username: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  align-items: center;

  &__username {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin-right: 8px;
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>