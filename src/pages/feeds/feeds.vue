<template>
 <div class="topline mb-32">
  <topline>
    <template #headline>
      <h1>Gitogram /</h1>
      <div class="icon-list">
        <div class="icon">
          <icon name="home" />
        </div>
        <div class="icon">
          <icon name="exit" />
        </div>
      </div>
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="story in stories" :key="story.id">
          <story-user-item
           :avatar="story.avatar"
           :username="story.username"
           @onPress="handlePress(story.id)"
          />
        </li>
      </ul>
    </template>
  </topline>
 </div>

 <ul class="feeds__list">
    <li class="feeds__item feed" v-for="item in 5" :key="item">
      <feed>
        <template #card>
          <card title="VUE.JS" desc="vkgvkkvckc"
          :stars="10"
          :forks="100"
          />
        </template>
      </feed>
    </li>
  </ul>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'

import { feed } from '../../components/feed'
import { card } from '../../components/card'

export default {
  name: 'feeds',
  components: {
    topline, icon, storyUserItem, feed, card
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>