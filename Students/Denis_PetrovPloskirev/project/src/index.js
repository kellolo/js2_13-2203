import './public/css/style.css'
import './public/css/normalize.css'
// import app from './public/js/app.js'

// app()

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import app from './public/app.vue'

export const eventBus = new Vue()

new Vue({
  render: h => h(app)
}).$mount('#app')