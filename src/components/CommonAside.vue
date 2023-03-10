<template>
    <el-menu :default-active="route.path" class="el-menu el-menu-vertical-demo" :collapse="isCollapse"
        active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" router>
        <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
        <el-menu-item v-for="item of noChildren" :key="item.name" :index="item.path" @click="handleClick(item)">
            <el-icon>
                <component :is="$icon[item.icon]" />
            </el-icon>
            <template #title>{{ item.label }}</template>
        </el-menu-item>
        <el-sub-menu v-for="item of hasChildren" :key="item.name" :index="item.name">
            <template #title>
                <el-icon>
                    <component :is="$icon[item.icon]" />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item v-for="child of item.children" :key="child.name" :index="child.path" @click="handleClick(child)">
                <el-icon>
                    <component :is="$icon[child.icon]" />
                </el-icon>
                {{ child.label }}
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useStore()
const isCollapse = computed(() => {
    return store.state.tab.isCollapse
})

const menuData = ref([
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
        url: 'GoodsManage/GoodsManage'
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
        url: 'UserManage/UserManage'
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
                url: 'Other/SystemSetting'
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
                url: 'Other/PageTwo'
            }
        ]
    }
])
const noChildren = computed(() => {
    return menuData.value.filter(item => !item.children)
})
const hasChildren = computed(() => {
    return menuData.value.filter(item => item.children)
})

function handleClick(item: any) {
    store.commit('tab/selectMenu', item.paths)
}

</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;
    overflow: hidden;
    border: none;

    h3 {
        color: #fff;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
    }
}
</style>
