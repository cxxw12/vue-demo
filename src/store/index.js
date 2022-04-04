import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    num: 10,
    todos: [
      {text: '1111', done: false},
      {text: '2222', done: true}
    ],
    count1: 0,
  },
  mutations: {
    // increment (state,n) {
    //   state.count += n;
    // },
    increment (state,param) {
      state.count += param.a;
    },
    delNum (state) {
     --state.num
    },
    increment1 (state) {
      state.count1++
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  actions: {
    increment1({commit}) {
      commit('increment1')
    }
  },
  modules: {
  }
})
