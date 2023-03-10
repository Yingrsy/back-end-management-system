<template>
    <el-card class="box-card">
        <div class="user">
            <el-avatar :size="150" :src="userImg.avatarUrl" class="userimg" />
            <div class="info">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
            </div>
        </div>
        <div class="logininfo">
            <p>上次登录时间<span>2023-03-06</span></p>
            <p>上次登录地点<span>成都</span></p>
        </div>
    </el-card>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import avatarUrl from '@/uploads/userImg'
const userImg = ref({ avatarUrl })
</script>

<style scoped lang='less'>
.box-card {
    width: 100%;

    .user {
        padding-bottom: 20px;
        margin-bottom: 20px;

        display: flex;
        align-items: center;

        border-bottom: solid 1px #ccc;

        .userimg {
            margin-right: 40px;
        }

        .info {
            .name {
                font-size: 32px;
                margin-bottom: 10px;
            }

            .access {
                color: #999999;
            }
        }
    }

    .logininfo {
        p {
            line-height: 28px;
            font-size: 14px;
            color: #999999;

            span {
                margin-left: 60px;
                color: #666666;
            }
        }
    }
}
</style>
