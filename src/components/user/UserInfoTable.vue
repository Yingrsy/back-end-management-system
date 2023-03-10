<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="gender" label="性别">
            <template #default="scope">
                <div>{{ scope.row.gender === 1 ? '男' : '女' }}</div>
            </template>
        </el-table-column>
        <el-table-column prop="birth" label="出生日期" />
        <el-table-column prop="addr" label="地址" />
        <el-table-column fixed="right" label="操作">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button link type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
const store = useStore()
const handleEdit = (row: any) => {
    store.commit('operateUserInfo/showDialogForm', '编辑用户信息')
    store.commit('operateUserInfo/setFormData', JSON.parse(JSON.stringify(row)))
}
defineProps({
    tableData: Array
})
</script>

<style scoped lang='less'></style>
