import Vue from 'vue';
import Vuex from 'vuex';
import request from '@/utils/request'
import config from '@/config'
import { GET_VIDEO_CATEGORIES } from './mutation-types'

const { services } = config;

Vue.use(Vuex);

const state = {
  videoCategories: []
};

const actions = {
  async GET_VIDEO_CATEGORIES({ commit }){
    let res = await request.get(services.videoCategories);
    commit(GET_VIDEO_CATEGORIES, res.data);
  }
};

const mutations = {
  [GET_VIDEO_CATEGORIES](state, payload){
    state.videoCategories = payload.listData;
  }
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: [
  ],
});

export default store;
