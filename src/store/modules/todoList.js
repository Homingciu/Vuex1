import actions from '../actions/todoList'
import * as type from '../mutations-types'

const state = {
  msg: 'msg',
  num: 100
}

const getters = {
  doubleNum: function (state) {
    return state.num * 2
  }
}

const mutations = {
  [type.ADD_NUM]: function (state, value) {
    state.num += value
  },
  [type.REDUCE_NUM]: function (state, value) {
    state.num -= value
  }
}

export default {
  state,
  getters, // 相当于计算属性
  mutations, // mutation必须是同步函数（直接修改state中的数据）
  actions // actions是异步函数（通过commit调用mutation -> 修改state中的数据）
}
