import { reactive, markRaw} from 'vue'

import {
  HomeFilled,
  GoodsFilled,
  UserFilled,
  Menu as IconMenu,
  Setting,
  Grid,
  ArrowDown,
  Wallet,
  ShoppingCartFull,
  Star,
  ArrowRight,
  Plus
} from '@element-plus/icons-vue'

interface iconDictType {
  [propName: string]: typeof HomeFilled;
}

const dictIcon = reactive({
  'Home':  markRaw(HomeFilled),
  'Goods': markRaw(GoodsFilled),
  'User': markRaw(UserFilled),
  'Menu': markRaw(IconMenu),
  'Setting': markRaw(Setting),
  'Grid': markRaw(Grid),
  'ArrowDown': markRaw(ArrowDown),
  'Wallet': markRaw(Wallet),
  'ShoppingCartFull': markRaw(ShoppingCartFull),
  'Star': markRaw(Star),
  'ArrowRight': markRaw(ArrowRight),
  'Plus': markRaw(Plus)
})

const installIcon = (app: any) => {
  app.config.globalProperties.$icon = dictIcon
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $icon: iconDictType
  }
}

export default installIcon