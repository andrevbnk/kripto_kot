import Vue from 'vue'
import Vuex from 'vuex'
import quotation from '@/modules/quotation';
import diagram from '@/modules/diagram';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPair : '',
  },
  mutations: {
    setPair(state,pair){
      state.curPair = pair;
      Vue.set(state,'curPair',pair)

      console.log(state);

    }
  },
  actions: {
    changePair({commit},pair){
      commit('setPair',pair);
    }
  },
  modules: {
    quotation,
    diagram,
  },
})
