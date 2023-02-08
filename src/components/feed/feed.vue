<template>
  <div class="feed">
    <div class="feed__user mb-12">
      <avatar
      avatar="https://picsum.photos/300/300"
      class="feed__avatar mr-16"
      />
      <div class="feed__username">Josh Username</div>
    </div>

    <div class="feed__card mb-18">
      <slot name="card"></slot>
    </div>

    <div class="feed__toggler">
      <!---->
      <toggler @onToggle="showComment" class="mb-12" />
      <ul v-if="isShowComments" class="feed__comment_list">
        <li class="feed__comment_item comment" v-for="elem in 5" :key="elem">
         <!---->
         <comment username="Test" text="vdhvaalbg"/>
        </li>
      </ul>
    </div>

    <div class="feed__date">15 may</div>
  </div>
</template>

<script>
import { avatar } from '../../components/avatar'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'

export default {
  components: {
    avatar, toggler, comment
  },
  data () {
    return {
      isShowComments: false
    }
  },
  methods: {
    showComment (state) {
      this.isShowComments = state
    }
  }
}
</script>

<style lang="scss" scoped>
.feed {
  ul {
    list-style-type: none;
  }

  &__card {
    margin-bottom: 18px;
  }

  &__user {
    display: flex;
    align-items: center;
  }

  &__username {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }

  &__date {
    font-size: 12px;
    text-transform: uppercase;
    color: #00000066
  }

  &__comment_list {
    margin-bottom: 10px;
  }
}
.mb-12 {
  margin-bottom: 12px;
}
</style>