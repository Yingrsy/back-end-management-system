<template>
    <el-table :data="tableData" style="width: 100%" height="100%">
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
                <el-button link type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { toRaw } from 'vue'
import { delUser } from '@/api'
const emit = defineEmits(['getList'])
const store = useStore()
const handleEdit = (row: any) => {
    store.commit('operateUserInfo/showDialogForm', '编辑用户信息')
    store.commit('operateUserInfo/setFormData', JSON.parse(JSON.stringify(toRaw(row))))
    props.mySetDefault!()
}
const props = defineProps({
    tableData: Array,
    mySetDefault: Function
})
const handleDel = (row: any) => {
    ElMessageBox.confirm(
        '此操作会永久删除数据，是否继续',
        'Warning',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        delUser({ id: row.id }).then(() => {
            emit('getList')
        })
        ElMessage({
            type: 'success',
            message: '删除完成',
        })
    }).catch(() => {
        ElMessage({
            type: 'info',
            message: '删除取消',
        })
    })
}
</script>

<style scoped lang='less'></style>
