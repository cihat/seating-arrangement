import { createStore } from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3000/',
})

export default createStore({
  state: {
    libraries: [],
  },
  mutations: {
    setLibraries(state, libraries) {
      state.libraries = libraries
    },
  },
  actions: {
    async fetchLibrary({ commit }) {
      await api.get('/').then(response => {
        commit('setLibraries', response.data)
      })
    },
  },
  modules: {},
})
