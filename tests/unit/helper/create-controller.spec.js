import { CreateController } from '@/helper/create-controller.js'

describe('Helper Configuration', () => {
  // Get Route Config
  it('Get Route Config', () => {
    let name = 'home'
    let path = '/'
    let view = 'index'
    var result = CreateController(name, path, view)
    expect(name).toMatch(result.name)
  })
})
