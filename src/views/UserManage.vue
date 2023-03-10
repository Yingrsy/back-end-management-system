<template>
    <el-button @click="addUser">
        <el-icon>
            <component :is="$icon['Plus']" />
        </el-icon>
        <span>新增</span>
    </el-button>
    <user-info-table :table-data="tableData" />
    <user-info-form @get-list="getList" />
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import UserInfoTable from '@/components/user/UserInfoTable.vue';
import { onMounted, reactive } from 'vue';
import { getUser } from '../api'
const store = useStore()
function addUser() {
    store.commit('operateUserInfo/showDialogForm', '新增用户')
}
const tableData = reactive<any>([])
onMounted(() => {
    getList()
})
function getList() {
    getUser().then(({ data }) => {
        tableData.splice(0, tableData.length - 1, ...data.list)
    })
}
</script>

<style scoped lang='less'></style>
