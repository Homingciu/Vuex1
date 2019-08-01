import request from './base'

const TIMEOUT = 100000

export const getList = (body) => {
  return request.post(
    '/list', // 地址
    { data: body }, // 参数
    { timeout: TIMEOUT } // 最大请求时长
  )
}
