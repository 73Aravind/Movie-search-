import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import HelloWorld from './components/HelloWorld.vue'
const app=createApp(App)
app.component('movie-detail', HelloWorld)
app.mount('#app')
