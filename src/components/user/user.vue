<template>
  <div class="user">
    <avatar
    avatar='https://picsum.photos/300/300'
    :size="size"
    class="mr-16"
    ></avatar>
    <div class="user__name">Joght</div>
  </div>
</template>

<script>
import { avatar } from '../avatar'
export default {
  components: { avatar },
  props: {
    avatar: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 's'
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;

  &__name {
    font-weight: 700;
  }
}
</style>