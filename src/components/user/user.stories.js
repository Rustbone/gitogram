import { user } from './index'
import { avatar } from '../avatar'

export default {
  title: 'user',
  component: user,
  subComponent: { avatar }
  // argTypes: {
  //   size: {
  //     control: { type: 'radio' },
  //     options: ['s', 'm', 'l']
  //   },
  //   avatar: 'https://picsum.photos/300/300'
  // }
}

const Template = (args) => ({
  components: { user },
  setup () {
    return { args }
  },
  template: `
   <user v-bind="args"></user>`
})

export const User = Template.bind({})

User.args = {
  size: 's',
  avatar: 'https://picsum.photos/300/300'
}