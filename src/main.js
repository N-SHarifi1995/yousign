import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueEventBus from "vue-plugin-event-bus";
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(VueEventBus, VueVideoPlayer);
new Vue({
    router,

    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')