import progress from './progress.vue'

export default {
  title: 'progress',
  component: progress,
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'jhfjhfjh'
    }
  }
}

const Template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish"/>'
})

export const Primary = Template.bind({})
