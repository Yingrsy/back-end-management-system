<template>
    <el-card :body-style="{ height: '100%', width: '100%' }">
        <div id="goodshistogram" ref="goodshistogram"></div>
    </el-card>
</template>

<script lang='ts' setup>
import { watch, ref, onBeforeUnmount, onMounted } from 'vue'
import * as echarts from "echarts";
const props = defineProps({
    homeData: Object
})
const userData = ref([])
const goodshistogram = ref(null)
let myChart: echarts.ECharts
watch(
    () => props.homeData?.userData, (newVal) => {
        userData.value = newVal
        init(userData.value)
    })
function resizeMyChart() {
    myChart.resize();
}
onMounted(() => {
    myChart = echarts.init(goodshistogram.value as unknown as HTMLElement)
    window.addEventListener('resize', resizeMyChart);
})
function init(userData: any) {
    const length = userData.length
    const newData = []
    const activeData = []
    const xAxis = []
    for (let i = 0; i < length; i++) {
        xAxis.push(userData[i].date)
        newData.push(userData[i].new)
        activeData.push(userData[i].active)
    }
    const option = {
        tooltip: {},
        legend: {
            data: ['New', 'Active']
        },
        xAxis: {
            data: xAxis
        },
        yAxis: {},
        series: [
            {
                name: 'New',
                type: 'bar',
                data: newData
            },
            {
                name: 'Active',
                type: 'bar',
                data: activeData
            },
        ]
    }
    myChart.setOption(option);
}
onBeforeUnmount(() => {
    myChart.dispose()
    window.removeEventListener('resize', resizeMyChart);
})
</script>

<style scoped lang='less'>
#goodshistogram {
    width: 100%;
    height: 100%;
}
</style>
