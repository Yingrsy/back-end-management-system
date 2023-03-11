<template>
    <div class="usermanage">
        <div class="userheader">
            <el-button @click="addUser">
                <el-icon>
                    <component :is="$icon['Plus']" />
                </el-icon>
                <span>新增</span>
            </el-button>
            <el-form :model="usersearchform" :inline="true">
                <el-form-item>
                    <el-input placeholder="搜索姓名" v-model="usersearchform.name" @blur="getList"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="usertable">
            <user-info-table :table-data="tableData" :my-set-default="mySetDefault" @get-list="getList" />
        </div>
        <div class="pagination">
            <el-pagination layout="prev, pager, next" :total="totalNum" v-model:current-page="pageindex"
                @update:current-page="handleChangePage" />
        </div>
        <user-info-form @get-list="getList" ref="myuserform" />
    </div>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import UserInfoTable from '@/components/user/UserInfoTable.vue';
import { onMounted, reactive, ref } from 'vue';
import { getUser } from '../api'
const store = useStore()
function addUser() {
    store.commit('operateUserInfo/showDialogForm', '新增用户')
}
const tableData = reactive<any>([])
onMounted(() => {
    getList()
})
const totalNum = ref(0)
const usersearchform = reactive({
    name: ''
})
function getList() {
    getUser({ ...usersearchform, ...pageData }).then(({ data }) => {
        tableData.splice(0, tableData.length, ...data.list)
        totalNum.value = data.count || 0
    })
}
const myuserform = ref(null)
function mySetDefault() {
    (myuserform.value as unknown as any).mySetDefault()
}
const pageindex = ref(1)
const pageData = reactive({
    page: 1,
    limit: 10
})
function handleChangePage(val: number) {
    pageData.page = val
    getList()
}

</script>

<style scoped lang='less'>
.usermanage {
    position: relative;

    .userheader {
        display: flex;
        justify-content: space-between;
    }

    .usertable {
        height: 60vh;
    }

    .pagination {
        position: absolute;
        bottom: -32px;
        right: 20px;
    }
}
</style>
