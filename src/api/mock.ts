import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import user from './mockServerData/user'
import loginApi from './mockServerData/permission'
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

Mock.mock('/api/user/add','post', user.createUser)
Mock.mock('/api/user/edit','post', user.updateUser)
Mock.mock('/api/user/del','post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock('/api/login','post', loginApi.getMenu)
