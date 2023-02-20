<template>
 <div class="topline mb-32">
  <topline>
    <template #headline>
      <h1>Gitogram /</h1>
      <div class="icon-list">
        <div class="icon mr-28">
          <icon name="home" />
        </div>
        <avatar class="mr-24"
        avatar="https://picsum.photos/300/300"
        style="width: 37px; height: 37px;"
        />
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

  <ul class="list">
    <li class="item" v-for="item in items" :key="item.id">
      <test
        :test="getTestData(item)"
        dark/>
    </li>
  </ul>
  <pre>{{ items }}</pre>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { avatar } from '../../components/avatar'

import { feed } from '../../components/feed'
import { card } from '../../components/card'

import * as api from '../../api'
import { test } from '../../components/test'

export default {
  name: 'feeds',
  components: {
    topline, icon, storyUserItem, feed, card, avatar, test
  },
  data () {
    return {
      items: [],
      stories
    }
  },
  methods: {
    getTestData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>