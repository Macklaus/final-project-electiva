import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import config from '@/config'
import Vuelidate from 'vuelidate'

Vue.use(VueNoty)
Vue.use(Vuelidate)

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
