import getters from './getters';
import mutations from './mutations';
import state from './state';
import { createStore } from 'vuex';

export default createStore({
  state,
  mutations,
  getters
})
