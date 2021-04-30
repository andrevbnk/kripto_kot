// import store from '@/store';
// import router from '@/router';

import {diagMapper} from '@/util/';
import axios from 'axios';

const state = {
    dataDiag: '',
};

const getters = {

};


const actions = {
    async getDataDiag({ commit },{from,to}){

        const res = await axios.get(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${from}&tsym=${to}&limit=10`);

        const data_diag = res.data['Data']['Data'];
        
        commit('setDataDiag',diagMapper(data_diag));
        return diagMapper(data_diag);

    }

};
const mutations = {
    setDataDiag(state,data){
        state.dataDiag = data;
    }

};
export default {
  state,
  getters,
  actions,
  mutations
};

