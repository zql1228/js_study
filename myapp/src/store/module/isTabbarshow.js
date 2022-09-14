const module={
    namespaced: true,//命名空间
  state: {
    isTabbarshow:true
  },
  mutations: {
    show(state){
        state.isTabbarshow=true
    },
    hide(state){
        state.isTabbarshow=false
    }
  },
}
export default module
