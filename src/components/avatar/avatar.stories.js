import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: { avatar },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l']
    },
    avatar: 'https://picsum.photos/300/300'
  }
}

/* const Template = (args) => ({
  components: { avatar },
  setup () {
    return { args }
  },
  template: '<avatar v-bind="args" />'
}) */

const Template = (args) => ({
  components: { avatar },
  data () {
    return { args }
  },
  template: '<avatar :size="args.size" :avatar="args.avatar" />'
})

export const Avatar = Template.bind({})

Avatar.args = {
  size: 'm',
  avatar: 'https://picsum.photos/300/300'
}