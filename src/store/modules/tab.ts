interface tabState {
    isCollapse: boolean,
    tabList: Array<tabPath>,
    tabHistory: Array<tabPaths>
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
        }
    },
    getters: {
        activeComponents(state: tabState) {
            return state.tabHistory.map(item=>item.name)
        }
    }
}

export default tab