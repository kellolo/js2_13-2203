import "./public/css/normalize.css"
import "./public/css/style.css"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import app from './public/app.vue'

new Vue({
    render: h => h(app)
}).$mount('#app')