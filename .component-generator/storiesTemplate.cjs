exports.storiesTemplateGenerator = (componentName) => {
  return (
`import type { Meta, StoryObj } from '@storybook/vue3'
import ${componentName} from '@/components/${componentName}/${componentName}.vue'
import { type Documentation } from '@/../.storybook/DocUtilities'


const meta: Meta<typeof ${componentName}> = {
  // TODO: define components' storybook path using title attribute
  title: '',
  component: ${componentName},
  excludeStories: ['documentation']
}

export default meta

type Story = StoryObj<typeof ${componentName}>

//TODO: fill in the documentation
export const documentation: Documentation = {
}

// TODO: add all necessary stories
export const Story1: Story = {
  args: {
  }
}
`)
}