import type { Meta, StoryObj } from '@storybook/vue3'
import DummyComponent from '@/components/DummyComponent/DummyComponent.vue'
import { type Documentation } from '@/../.storybook/DocUtilities'


const meta: Meta<typeof DummyComponent> = {
  // TODO: define components' storybook path using title attribute
  title: '',
  component: DummyComponent,
  excludeStories: ['documentation']
}

export default meta

type Story = StoryObj<typeof DummyComponent>

//TODO: fill in the documentation
export const documentation: Documentation = {
}

// TODO: add all necessary stories
export const Story1: Story = {
  args: {
  }
}
