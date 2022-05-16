import 'bootstrap/scss/bootstrap.scss'
import 'boxicons'
import 'SRC/scss/app.scss'

import { createApp } from 'vue'
const app = createApp(App)

import App from 'SRC/App'

import router from 'SRC/router'
app.use(router)

app.mount('#app')
