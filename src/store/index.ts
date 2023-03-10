import { createStore} from 'vuex'
import tab from './modules/tab'
import operateUserInfo from './modules/operateUserInfo'
const store = createStore({
    modules: {
        tab: tab,
        operateUserInfo: operateUserInfo
    }
})


export default store