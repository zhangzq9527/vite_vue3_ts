import axios from 'axios'
import '../../mock/user'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (err) {
    return Promise.reject(err)
  }
)

export function post(url: any, data: any) {
  return instance.post(url, data)
}
