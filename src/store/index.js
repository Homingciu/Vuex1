import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './modules/todoList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 1.起别名为moduleA
    moduleA: todoList
    // 2.直接使用todoList作为名称 (es6语法，解构)
    // todoList
  }
})
