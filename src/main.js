import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VbestUi from 'vbest-ui'
import 'vbest-ui/dist/vbest-ui.css'
import './plugins/element.js'
import VueLazyload from 'vue-lazyload'

// 图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})

Vue.use(VbestUi)


Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// new Vue({
//     render: function(h) { return h(App) },
// }).$mount('#app')