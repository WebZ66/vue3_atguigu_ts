import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(config => {
  return config
})
request.interceptors.response.use(response => {
  return response.data
})

export const userLoginApi = (url: string, params: { username: string; password: string }) => {
  return request({
    method: 'post',
    url,
    data: params
  })
}
