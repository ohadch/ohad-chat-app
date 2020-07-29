import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Fragment from 'vue-fragment'
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:8000'), //options object is Optional
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/my-app/" } //Optional options
}))

Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
