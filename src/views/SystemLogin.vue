<template>
    <div class="logincontainer">
        <h3>系统登录</h3>
        <span>
            账号1：用户名：admin；密码：admin
            <br />
            账号2：用户名：ytt；密码：ytt
        </span>
        <el-form label-width="70px" :model="form" ref="ruleFormRef" :rules="rules">
            <el-form-item prop="username" label="用户名">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="submit">登录</el-button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRaw } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'
import { loginUser } from '@/api'
import { useStore } from 'vuex'
const ruleFormRef = ref<FormInstance>()
const form = reactive({
    username: '',
    password: ''
})
const rules = reactive<FormRules>({
    username: [{
        required: true,
        trigger: 'blur',
        message: '请输入用户名'
    }],
    password: [{
        required: true,
        trigger: 'blur',
        message: '请输入密码'
    }]
})
const router = useRouter()
const store = useStore()
function submit() {
    (ruleFormRef.value as unknown as any).validate((valid: boolean) => {
        if (valid) {
            loginUser(JSON.parse(JSON.stringify(toRaw(form)))).then(({ data }) => {
                if (data.code === 20000) {
                    Cookie.set('token', data.data.token)
                    store.commit('tab/setMenu', data.data.menu)
                    store.commit('tab/addMenu', router)
                    router.push('/')
                } else {
                    ElMessage.error(data.data.message)
                }
            })
        }
    })

}
</script>

<style scoped lang='less'>
.logincontainer {
    width: 350px;
    margin: 200px auto;
    border-radius: 15px;
    border: solid 1px #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    text-align: -webkit-center;

    h3 {
        margin: 20px 0 20px;
        color: #505458;
    }

    span {
        display: block;
        margin-bottom: 20px;
        color: #ccc;
    }

    .el-form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .el-input {
            width: 200px;
        }
    }

    .el-button {
        margin-bottom: 20px;
    }

}
</style>
