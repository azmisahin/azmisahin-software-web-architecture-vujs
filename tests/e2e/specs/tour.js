// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Application Tour': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 1)
      .assert.elementPresent('.welcome')
      .assert.containsText('h1', 'Welcome')
      .assert.elementCount('h1', 1)
      .end()
  }
}
