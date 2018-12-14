// Import Vue and the component being tested
import Vue from 'vue'
import Component from '@/views/home/index'

// Component
describe('Component Views Home Index', () => {
  // Type control "created"
  it('Is there a "created" function', () => {
    expect(typeof Component.created).toBe('function')
  })

  // Type control "data"
  it('Is tehere a "data" function', () => {
    expect(typeof Component.data).toBe('function')
  })

  // Do you have default data
  it('Do you have default data', () => {
    const result = Component.data()
    expect(result.message).toBe('Home')
  })

  // What happens when the connection occurs.
  it('What happens when the connection occurs.', () => {
    const vm = new Vue(Component).$mount()
    expect(vm.message).toBe('created')
  })

  // How it will look at working time.
  it('How it will look at working time.', () => {
    var properties = { }
    var result = getRenderedText(Component, properties)
    expect(result).toBe('Welcome The Progressive JavaScript Framework')
  })
})

// helper function that mounts and returns the rendered text
function getRenderedText (component, properties) {
  const Constructor = Vue.extend(component)
  const vm = new Constructor({ propsData: properties }).$mount()
  return vm.$el.textContent
}
