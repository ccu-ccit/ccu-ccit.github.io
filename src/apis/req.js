import { axios } from '@/utils/request'
import api from '@/apis/index'

export function getProgress (parameter) {
  return axios({
    url: api.getProgress+parameter.codename,
    method: 'get'
  })
}

export function submitAnswer (parameter, codename) {
  return axios({
    url: api.submitAnswer+codename,
    method: 'post',
    data: parameter,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function clearAnswer (codename) {
  return  axios({
    url: api.clearAnswer + codename + '/*',
    method: 'delete'
  })
}

