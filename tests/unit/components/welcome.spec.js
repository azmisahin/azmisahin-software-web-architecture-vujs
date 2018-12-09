import * as testUtils from '@vue/test-utils'
import welcome from '@/components/welcome.vue'

describe('Welcome Component', () => {
  it('Renders props when passed', () => {
    const title = 'Welcome'
    const message = 'The Progressive JavaScript Framework'
    const wrapper = testUtils.shallowMount(welcome, {
      propsData: { title, message }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
