<template>
    <el-card class="goodstable">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column v-for="item of tableLabel" :key="item.prop" :prop="item.prop" :label="item.label"
                width="auto" />
        </el-table>
    </el-card>
</template>

<script lang='ts' setup>
import { reactive, watch, ref } from 'vue'
const props = defineProps({
    homeData: Object
})
const tableData = ref([])
watch(
    () => props.homeData?.tableData, (newVal) => {
        tableData.value = newVal
    })
const tableLabel = reactive([
    {
        prop: "brand",
        label: "品牌"
    },
    {
        prop: "todaySold",
        label: "今日销量"
    },
    {
        prop: "monthSold",
        label: "每月销量"
    },
    {
        prop: "totalSold",
        label: "总销量"
    },
])
</script>

<style scoped lang='less'>
.goodstable {
    width: 100%;
}
</style>
