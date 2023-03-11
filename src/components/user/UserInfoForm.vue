<template>
    <el-dialog v-model="store.state.operateUserInfo.dialogFormVisible" :title="store.state.operateUserInfo.formTitle"
        :before-close="cancel">
        <el-form :model="form" :inline="true" :rules="rules" ref="myForm">
            <el-form-item v-for="item of operateFormLabel" :key="item.model" :label="item.label" :prop="item.model"
                label-position="left" label-width="auto">
                <el-input v-if="item.type === 'input'" v-model="form[item.model as keyof typeof form]" />
                <el-select v-if="item.type === 'select'" v-model="form[item.model as keyof typeof form]"
                    :placeholder="`请选择${item.label}`">
                    <el-option v-for="opt of item.opts" :key="opt.label" :label="opt.label" :value="opt.value" />
                </el-select>
                <el-date-picker v-if="item.type === 'date'" v-model="form[item.model as keyof typeof form]" type="date"
                    :placeholder="`请选择${item.label}`" size="default" value-format="YYYY-MM-DD" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click=cancel>取消</el-button>
                <el-button type="primary" @click=confirm>确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, ref, toRaw } from 'vue'
import type { FormRules } from 'element-plus'
import { useStore } from 'vuex'
import { editUser, addUser } from '@/api'
const emit = defineEmits(['getList'])
const operateFormLabel = [
    {
        model: 'name',
        label: '姓名',
        type: 'input'
    },
    {
        model: 'age',
        label: '年龄',
        type: 'input'
    },
    {
        model: 'gender',
        label: '性别',
        type: 'select',
        opts: [
            {
                label: '男',
                value: 1
            },
            {
                label: '女',
                value: 0
            }
        ]
    },
    {
        model: 'birth',
        label: '出生日期',
        type: 'date'
    },
    {
        model: 'addr',
        label: '地址',
        type: 'input'
    }
]
function cancel() {
    form.id = ''
    form.name = ''
    form.age = ''
    form.gender = ''
    form.birth = ''
    form.addr = ''
    store.commit('operateUserInfo/hideDialogForm')
}

function confirm() {
    (myForm.value as unknown as any).validate((valid: boolean) => {
        if (valid) {
            if (store.state.operateUserInfo.formTitle === '新增用户') {
                addUser(JSON.parse(JSON.stringify(toRaw(form)))).then(() => {
                    emit('getList')
                })
            } else {
                editUser(JSON.parse(JSON.stringify(toRaw(form)))).then(() => {
                    emit('getList')
                })
            }
            cancel()
        }
    })
}

const form = reactive({
    id: '',
    name: '',
    age: '',
    gender: '',
    birth: '',
    addr: ''
})
const store = useStore()
function mySetDefault() {
    form.id = store.state.operateUserInfo.formData.id
    form.name = store.state.operateUserInfo.formData.name
    form.age = store.state.operateUserInfo.formData.age
    form.gender = store.state.operateUserInfo.formData.gender
    form.birth = store.state.operateUserInfo.formData.birth
    form.addr = store.state.operateUserInfo.formData.addr
}
defineExpose({ mySetDefault })
const rules = reactive<FormRules>({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    age: [
        {
            required: true,
            message: '请输入年龄',
            trigger: 'blur',
        },
    ],
    gender: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'blur',
        },
    ],
    birth: [
        {
            type: 'date',
            required: true,
            message: '请选择出生日期',
            trigger: 'blur',
        },
    ],
    addr: [
        {
            required: true,
            message: '请输入地址',
            trigger: 'blur',
        },
    ]
})


const myForm = ref(null)

</script>

<style scoped lang='less'>
.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
