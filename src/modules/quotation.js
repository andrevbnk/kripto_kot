// import axios from 'axios';
// import store from '@/store';
// import router from '@/router';
import {indexPair,perDiffrent} from '@/util/';
import {apiKey} from '@/config';

const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

const state = {
    pairs: [
        { from:'BTC', to:"USDT", price:'', changed:0,arrow:false},
        { from:'XRP', to:"USDT",price:'',changed:0,arrow:false},
        { from:'XLM', to:"USDT",price:'',changed:0,arrow:false},
      ],
    arrow: false,

};

const getters = {
    allPairs: state => {
        return state.pairs;
    },
    arrow: state=>{
        return state.arrow; 
    }
};


const actions = {
    quotation({ commit, state }){
        ccStreamer.onopen =  function onStreamOpen() {
            for(let pair of state.pairs){
              const subRequest = {
                  "action": "SubAdd",
                  "subs": [`0~Binance~${pair.from}~${pair.to}`]
              };
              ccStreamer.send(JSON.stringify(subRequest));
            }
        }

        // eslint-disable-next-line no-unused-vars
        ccStreamer.onmessage =  function onStreamMessage(message) {
            const json = JSON.parse(event.data);
            if(json['TYPE']==0){
              const index = indexPair(json['FSYM'],json['TSYM'],state.pairs);
              if(index){
                const diffrent =  perDiffrent(state.pairs[index].price,json['P']);
                
                if(diffrent>state.pairs[index].changed){
                    commit('setArrow',{index:index,flag:true});                  
                }else{
                    commit('setArrow',{index:index,flag:false});                  
                }
                commit('setPairsChanged',{index:index,diffrent:diffrent});
                commit('setPairsPrice',{index:index,'price':json['P']});
              }

            }
            // console.log(json);
        }
    }

};
const mutations = {

    setArrow(state,{index,flag}){
        state.pairs[index].arrow = flag;
    },
    setPairsChanged(state,{index,diffrent}){
        state.pairs[index].changed = diffrent;
    },
    setPairsPrice(state,{index,price}){
        state.pairs[index].price = price;
    }

};
export default {
  state,
  getters,
  actions,
  mutations
};

