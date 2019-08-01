import axios from 'axios'

const request = axios.create({
  // 还有很多参数，看axios设置
  baseURl: 'http://www.hmc.com' // 基础地址
})

export default request
