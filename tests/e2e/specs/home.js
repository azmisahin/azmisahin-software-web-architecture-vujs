// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home Page': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL + 'home')
      .end()
  }
}
