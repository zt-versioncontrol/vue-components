import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DummyComponent from '@/components/DummyComponent/DummyComponent.vue'


describe('Default component', () => {
  it('should be rendered', () => {
    const wrapper = mount(DummyComponent, {
      global: {
        // TODO: add required plugins
        plugins: []
      },
      attachTo: document.body
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = mount(DummyComponent, {
      global: {
        // TODO: add required plugins
        plugins: []
      }
    })

    expect(wrapper.element).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})

// TODO: add test groups as necessary
describe('test group1', () => {
  // TODO:
  it.todo('should pass this test', () => {
  })
  // TODO:
  it.todo('should pass that test', () => {
  })
})
