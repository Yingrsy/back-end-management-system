import Mock from 'mockjs'
export default {
    getMenu: (config: any) => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'SystemHome',
                            label: '首页',
                            icon: 'Home',
                            paths: [{
                                label: '首页',
                                path: '/home',
                                name: 'SystemHome',
                            }],
                            url: 'SystemHome.vue'
                        },
                        {
                            path: '/goods',
                            name: 'GoodsManage',
                            label: '商品管理',
                            icon: 'Goods',
                            paths: [{
                                label: '商品管理',
                                path: '/goods',
                                name: 'GoodsManage',
                            }],
                            url: 'GoodsManage.vue'
                        },
                        {
                            path: '/user',
                            name: 'UserManage',
                            label: '用户管理',
                            icon: 'User',
                            paths: [{
                                label: '用户管理',
                                path: '/user',
                                name: 'UserManage',
                            }],
                            url: 'UserManage.vue'
                        },
                        {
                            name: 'other',
                            label: '其他',
                            icon: 'Grid',
                            children: [
                                {
                                    path: '/setting',
                                    name: 'SystemSetting',
                                    label: '设置',
                                    icon: 'Setting',
                                    paths: [{
                                        label: '其他',
                                        name: 'other',
                                    }, {
                                        label: '设置',
                                        path: '/setting',
                                        name: 'SystemSetting',
                                    }],
                                    url: 'Other/SystemSetting.vue'
                                },
                                {
                                    path: '/page2',
                                    name: 'PageTwo',
                                    label: '页面2',
                                    icon: 'Setting',
                                    paths: [{
                                        label: '其他',
                                        name: 'other',
                                    }, {
                                        label: '页面2',
                                        path: '/page2',
                                        name: 'PageTwo',
                                    }],
                                    url: 'Other/PageTwo.vue'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'ytt' && password === 'ytt') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'SystemHome',
                            label: '首页',
                            icon: 'Home',
                            paths: [{
                                label: '首页',
                                path: '/home',
                                name: 'SystemHome',
                            }],
                            url: 'SystemHome.vue'
                        },
                        {
                            path: '/goods',
                            name: 'GoodsManage',
                            label: '商品管理',
                            icon: 'Goods',
                            paths: [{
                                label: '商品管理',
                                path: '/goods',
                                name: 'GoodsManage',
                            }],
                            url: 'GoodsManage.vue'
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }

    }
}