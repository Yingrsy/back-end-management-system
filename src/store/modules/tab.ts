import Cookie from 'js-cookie'
const modules = import.meta.glob(['@/views/*.vue', '@/views/*/*.vue'])
interface tabState {
    isCollapse: boolean,
    tabList: Array<tabPath>,
    tabHistory: Array<tabPaths>,
    menu: Array<any>
}
interface tabPath {
    path?: String,
    label: String,
    name: String,
}
interface tabPaths {
    path?: String,
    label: String,
    name: String,
    paths: Array<tabPath>
}

const tab = {
    namespaced: true,
    state() {
        return {
            isCollapse: false,
            tabList: [
                {
                    path: '/home',
                    name: 'SystemHome',
                    label: '首页',
                },
            ],
            tabHistory: [
                {
                    path: '/home',
                    name: 'SystemHome',
                    label: '首页',
                    paths: [
                        {
                            path: '/home',
                            name: 'SystemHome',
                            label: '首页',
                        },
                    ]
                },
            ],
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
                    url: 'SystemHome/SystemHome'
                }
            ]
        }
    },
    mutations: {
        changeAsideCollapseState(state: tabState) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state: tabState, item: Array<tabPath>) {
            state.tabList = item
            const tab = item[item.length - 1]
            if (!state.tabHistory.some(ele => ele.name === tab.name)) {
                const tempTeb = {...tab, paths: item}
                state.tabHistory.push(tempTeb)
            }
        },
        deleteHistory(state: tabState, payload: any) {
            state.tabHistory = state.tabHistory.filter(item => item.name !== payload.tagName)
            if (payload.index !== -1) {
                state.tabList = state.tabHistory[payload.index].paths
            }
        },
        setMenu(state: tabState, val: any) {
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        addMenu(state: tabState, router: any) {
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu')!)
            state.menu = menu
            const menuArray: any[] = []
            menu.forEach((item: any) => {
                if (item.children) {
                    item.children = item.children.map((child: any)=>{
                        child.component = modules[`/src/views/${child.url}`]
                        return child
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = modules[`/src/views/${item.url}`]
                    menuArray.push(item)
                }
            });
            menuArray.forEach(item=>{
                router.addRoute('SystemMain',item)
            })
        }
    },
    getters: {
        activeComponents(state: tabState) {
            return state.tabHistory.map(item=>item.name)
        }
    }
}

export default tab