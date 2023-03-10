<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto" class="el-aside">
                <common-aside />
            </el-aside>
            <el-container>
                <el-header class="el-header">
                    <common-header />
                </el-header>
                <CommonTag />
                <el-main>
                    <router-view v-slot="{ Component }">
                        <keep-alive :include="store.getters['tab/activeComponents']">
                            <component :is="Component" />
                        </keep-alive>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '@/components/CommonTag.vue';
import { useStore } from 'vuex'
const store = useStore()
</script>

<style scoped lang="less">
.el-aside {
    overflow: hidden;
}

.el-header {
    padding: 0;
}
</style>