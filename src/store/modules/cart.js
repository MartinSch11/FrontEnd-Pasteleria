// src/store/modules/cart.js

const state = {
  items: []
};

const mutations = {
  addItem(state, item) {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      state.items.push({ ...item, quantity: item.quantity || 1 });
    }
  },
  updateQuantity(state, { item, quantity }) {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  },
  clearCart(state) {
    state.items = [];
  }
};

const actions = {
  addToCart({ commit }, item) {
    commit('addItem', item);
  },
  updateItemQuantity({ commit }, payload) {
    commit('updateQuantity', payload);
  },
  clearCart({ commit }) {
    commit('clearCart');
  }
};

const getters = {
  items: state => state.items,
  cartTotal: state => state.items.reduce((total, item) => total + item.price * item.quantity, 0)
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
