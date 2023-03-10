import Mock from 'mockjs'

const list: Array<Object> = []

export default { 
    getStatisticalData: ()=>{
        for (let i = 0; i < 7; i++) {
            list.push(
                Mock.mock({
                    Apple: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    OPPO: Mock.Random.float(100, 8000, 0, 0),
                    MEIZU: Mock.Random.float(100, 8000, 0, 0),
                    SAMSUNG: Mock.Random.float(100, 8000, 0, 0),
                    Xiaomi: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'Xiaomi',
                        value: 2999
                    },
                    {
                        name: 'Apple',
                        value: 5999
                    },
                                        {
                        name: 'vivo',
                        value: 1500
                    },
                                        {
                        name: 'OPPO',
                        value: 1999
                    },
                                        {
                        name: 'MEIZU',
                        value: 2200
                    },
                                        {
                        name: 'SAMSUNG',
                        value: 4500
                    }
                ],
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 100
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 65,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 700
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                orderData: {
                    date: ['20230308', '20230309', '20230310', '20230311', '20230312', '20230313', '20230314',],
                    data: list
                },
                tableData: [
                    {
                        brand: 'OPPO',
                        todaySold: 500,
                        monthSold: 3500,
                        totalSold: 22000
                    },
                    {
                        brand: 'vivo',
                        todaySold: 300,
                        monthSold: 2200,
                        totalSold: 24000
                    },
                    {
                        brand: 'Apple',
                        todaySold: 800,
                        monthSold: 4500,
                        totalSold: 65000
                    },
                    {
                        brand: 'Xiaomi',
                        todaySold: 1200,
                        monthSold: 6500,
                        totalSold: 45000
                    },
                    {
                        brand: 'SAMSUNG',
                        todaySold: 300,
                        monthSold: 2000,
                        totalSold: 34000
                    },
                    {
                        brand: 'MEIZU',
                        todaySold: 350,
                        monthSold: 3000,
                        totalSold: 22000
                    }
                ]
            }
        }
    }
}