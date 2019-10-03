const state= {
  count: 310,
  name:"javad"
};

const actions = {
  ADD_COUNT(store) {
    store.commit("ADD_COUNT")
  },

};

const mutations = {
  ADD_COUNT (state) {
    state.count = 446;
  },

};

export default {
  state,
  actions,
  mutations
};

