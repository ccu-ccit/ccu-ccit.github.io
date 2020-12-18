import axios from 'axios'
import { VueAxios } from './axios'
const service = axios.create({
	baseURL: "https://ccit.herokuapp.com",
    timeout: 30000,
	withCredentials: false
})

const err = (error) => {
  const originalRequest = error.config
  if (error.response) {
	console.log('catch the error')
	console.log(originalRequest.url)
	if (error.response.status !== 401) {
		return new Promise((resolve, reject) => {
			reject(error)
		})
	}
	return Promise.reject(error)
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
