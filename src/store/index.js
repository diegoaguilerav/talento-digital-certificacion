import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const instance = axios.create({
	baseURL: "http://localhost:8080/",
	timeout: 1000,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashboard: {
      usuario: [],
      cupos: []
    },
    bancos: [],
    cartolas: [{
      transferencia: ''
    }],
    filtro: {
      fechaInicio: '',
      fechaFin: ''
    }
  },
  mutations: {
    DATA_DASHBOARD(state, data) {
      state.dashboard.usuario = data.usuario
      state.dashboard.cupos = data.cupos
      console.log(state.dashboard.usuario)
      console.log(state.dashboard.cupos)
    },
    DATA_BANCOS(state, data) {
      state.bancos = data
      console.log(state.bancos)
    },
    DATA_CARTOLA(state, data) {
      state.cartolas = data
      console.log(state.cartolas)
    }
  },
  actions: {
    actionGetBancos({ commit }) {
      const getDashboard = instance.get('data/bancos.json')
      getDashboard.then((res) => {
        commit('DATA_BANCOS', res.data)
      })
    },
    actionGetCartola({ commit }) {
      const getDashboard = instance.get('data/cartola_transf.json')
      getDashboard.then((res) => {
        commit('DATA_CARTOLA', res.data)
      })
    },
    actionGetDashboard({ commit }) {
      const getDashboard = instance.get('data/dashboard.json')
      getDashboard.then((res) => {
        commit('DATA_DASHBOARD', res.data)
      })
    }
  },
  modules: {
  },
})
