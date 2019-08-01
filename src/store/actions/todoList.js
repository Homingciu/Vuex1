import * as type from '../mutations-types'
// import { getList } from '../../api'

const actions = {
  // actions是异步函数， 一般都做请求数据的操作
  // action自身返回一个Promise对象
  getData: function ({ commit, state }, value = 1) { // {commit, state}为自带参数， value为传入的参数
    setTimeout(function () {
      console.log(state.num)
      commit(type.ADD_NUM, value)
    }, 1000)
  }
  // 理论上（因为暂时没后端接口）
  // 创建一个方法getList，然后调用api中的方法，（请求/操作）数据，然后通过commit调用mutations的方法来修改state中的数据
  // async getList ({ commit, state }, data) { // 这里的getList指的是在actions里创建了一个getList方法
  //   try { // try catch作用：请求出错时，报错，且跳过这段代码，不阻塞后续代码
  //     const newData = await getList(data) // 这里的getList指的是api中的getList, this.getList则是指actions的方法
  //     commit(type.SET_DATA, newData)
  //   } catch (e) {
  //     console.trace(e)
  //   }
  // }
}

export default actions
