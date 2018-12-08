/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Vue Web Application
 * Version       :   @package.json.version
 * Description   :   Web Application With Vue
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/azmisahin-software-web-architecture-vujs.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import Vue from 'vue'
import App from './App.vue'

/**
 * Vue Web Application
 *
 * @example
 * // ref : https://vuejs.org/v2/api/#vm-mount
 * Web.$mount("#app")
 */
const Web = new Vue({
  /**
   * ref: https://vuejs.org/v2/guide/render-function.html
   *
   * Error: ie [ 10 ] -> No problem with "babel"
   * x SCRIPT1002: Syntax error
   * x SCRIPT5022: SecurityError
   *
   * Error: ie [ 9 ] -> No problem with "babel"
   * x SCRIPT1002: Syntax error
   *
   * Error: ie [ 8 ]
   * x SCRIPT445: Object doesn't support this action
   *
   * Error: ie [ 7 - 5 ]
   * x SCRIPT438: Object doesn't support property or method 'defineProperty'
   * @param {*} h
   * /
  // render: function (h) { return h(App) }

  /**
   * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   *
   * Error: ie [ 10 - 11 ] -> No problem with "babel"
   * x SCRIPT1028: Expected identifier, string or number
   * x SCRIPT5022: SecurityError
   *
   * Error: ie [ 9 ] -> No problem with "babel"
   * x SCRIPT1002: Syntax error
   *
   * Error: ie [ 8 ]
   * x SCRIPT445: Object doesn't support this action
   *
   * Error: ie [ 7 - 5 ]
   * x SCRIPT438: Object doesn't support property or method 'defineProperty'
   * @param {*} h
   * */
  // render: h => h(App)

  /**
    * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    *
    * Error: ie [ 10 - 11 ] -> No problem with "babel"
    * x SCRIPT1028: Expected identifier, string or number
    * x SCRIPT5022: SecurityError
    *
    * Error: ie [ 9 ] -> No problem with "babel"
    * x SCRIPT1002: Syntax error
    *
    * Error: ie [ 8 ]
    * x SCRIPT445: Object doesn't support this action
    *
    * Error: ie [ 7 - 5 ]
    * x SCRIPT438: Object doesn't support property or method 'defineProperty'
    * */
  ...App,

  /**
   * Options / DOM
   * Provide the Vue instance an existing DOM element to mount on.
   * ref: https://vuejs.org/v2/api/#el
   */
  el: '#app'
})

// ref : https://vuejs.org/v2/api/#vm-mount
// export default Web.$mount('#app')
export default Web
