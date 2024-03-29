import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueDateTimeJs from 'vue3-datetime-js'
import App from './App.vue'
import router from './router'
const app = createApp(App)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
