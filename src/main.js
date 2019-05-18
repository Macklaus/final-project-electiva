import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import config from '@/config'

Vue.use(VueNoty)

const dataAuth = localStorage.getItem(config.STORAGE.AUTH)

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    auth: dataAuth ? JSON.parse(dataAuth) : {},
    typeNews: []
  },
  render: h => h(App),
}).$mount('#app')
