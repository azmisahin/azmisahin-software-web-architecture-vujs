import * as testUtils from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import router from '@/router.js'

const localVue = testUtils.createLocalVue()
localVue.use(VueRouter)

describe('Application Initalize', () => {
  it('is a Vue instance', () => {
    const wrapper = testUtils.mount(App, { localVue, router })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
