import * as testUtils from '@vue/test-utils'
import App from '@/App.vue'

describe('Application Initalize', () => {
  test('is a Vue instance', () => {
    const wrapper = testUtils.mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
