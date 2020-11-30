import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import moment from 'moment'

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  (to.name !== 'login' && to.name !== 'dashboard' && to.name !== 'home' && !token) ? next({ name: 'login' }) : next();

  if (to.name === 'login' && token)
    next({ name: 'dashboard' })
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://demo.smart.sum.ba/parking-events',
  // vuex: {
  //   store,
  //   actionPrefix: "SOCKET_",
  //   mutationPrefix: 'SOCKET_'
  // },
}))

Vue.config.productionTip = false
Vue.prototype.moment = moment

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY')
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
