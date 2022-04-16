import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo, faTrash, faUser, faPodcast } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faPodcast, faTrash, faUser)
window.io = io

createApp(App).use(router).mount('#app')
VueElement.use(WebRTC)
