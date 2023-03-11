import type { AxiosRequestConfig } from 'axios'
import http from '../util/request'

export const getData = () => {
    return http.get('/home/getData')
}

export const getUser = (data: any) => {
    return http.get('/user/getUser', {params: data})
}

export const addUser = (data: any)=>{
    return http.post('/user/add', data)
}

export const editUser = (data: any)=>{
    return http.post('/user/edit', data)
}

export const delUser = (data: any)=>{
    return http.post('/user/del', data)
}

export const loginUser = (data: any)=>{
    return http.post('/login', data)
}
