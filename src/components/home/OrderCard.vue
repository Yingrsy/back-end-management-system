<template>
    <el-card class="el-card" :body-style="{ 'display': 'flex', 'padding': '0' }">
        <div class="icon" :style="{ 'backgroundColor': `${color}` }">
            <component class="iconimg" :is="$icon[icon]" />
        </div>
        <div class="order">
            <h3 class="value">￥{{ value }}</h3>
            <p class="name">{{ name }}</p>
        </div>
    </el-card>
</template>

<script lang='ts' setup>
defineProps<{
    name: string
    value: number
    icon: string
    color: string
}>()
</script>

<style scoped lang='less'>
.el-card {
    height: 80px;

    .icon {
        width: 80px;
        height: 80px;
        display: flex;

        .iconimg {
            width: 30px;
            height: 30px;
            margin: auto;
            color: #fff;
        }
    }

    .order {
        margin-left: 15px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 1;
        }

        p {
            color: #999;
            font-size: 14px;
            text-align: center;
        }
    }
}
</style>
