import Main from '@/main'
describe('Main', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log')
    jest.spyOn(console, 'error')
  })

  afterEach(() => {
    console.log.mockRestore()
    console.error.mockRestore()
  })

  it('Init', () => {
    expect(console.log).not.toHaveBeenCalled()
    expect(console.error).not.toHaveBeenCalled()
    expect.objectContaining(Main)
  })
})
