<template>
    <div class="header">
        <div class="left">
            <el-button :icon="$icon['Menu']" @click="handleMenu" />
            <el-breadcrumb :separator-icon="$icon['ArrowRight']" :style="{ marginLeft: '20px' }">
                <el-breadcrumb-item v-for="item of tabList" :key="item.name" :to="{ path: item.path }">
                    <span class="breadcrumb">{{ item.label }}</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :size="40" :src="userImg.avatarUrl" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import avatarUrl from '../uploads/userImg'
const userImg = ref({ avatarUrl })
const store = useStore()
function handleMenu() {
    store.commit('tab/changeAsideCollapseState')
}
const tabList = computed(() => {
    return store.state.tab.tabList
})
</script>

<style scoped lang='less'>
.header {
    padding: 0 20px;
    background-color: #333;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        justify-content: center;
        align-items: center;

        .breadcrumb {
            color: #fff;
            font-size: 14px;
        }
    }

    .right {
        .el-dropdown-link {
            border: none;

            &:focus-visible {
                outline: none;
            }
        }
    }
}
</style>
