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

// ref: https://vuejs.org/v2/api/#Global-Config
Vue.config.productionTip = false

// For client addons
window.Vue = Vue

/**
 * Vue Web Application
 */
const Web = new Vue({
	// ref: https://vuejs.org/v2/guide/render-function.html

	// Ecma5
	// render: function (h) { return h(App) },

	// Ecma6
	// render: h => h(App)

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	...App
});

//ref : https://vuejs.org/v2/api/#vm-mount
Web.$mount("#app")

 // Node cofiguration
 import Package from '../package.json'
 console.clear()
 console.log("Application Version: " + Package.version);
