import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
Vue.config.productionTip = false
Vue.filter('dateFilter',(data)=>{
  return  moment(data*1000).format('YYYY-MM-DD')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
