import Vue from 'vue'
import Vuex from 'vuex'
import TabbarModule from './module/isTabbarshow'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId:'310100',
    cityName:'上海'
  },
  getters: {
    getName(state){
      return state.cityName
    }
  },
  mutations: {
    changeCityName(state,value){
      state.cityName=value
    }
  },
  actions: {
  },
  modules: {
    TabbarModule
  }
})
