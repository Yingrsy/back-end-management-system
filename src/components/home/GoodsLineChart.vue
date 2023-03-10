<template>
    <el-card :body-style="{ height: '280px', width: '100%' }">
        <div id="goodslinechart" ref="goodslinechart"></div>
    </el-card>
</template>

<script lang='ts' setup>
import { watch, ref, onBeforeUnmount, onMounted } from 'vue'
import * as echarts from "echarts";

const props = defineProps({
    homeData: Object
})
const orderData = ref([])
let myChart: echarts.ECharts
watch(
    () => props.homeData?.orderData, (newVal) => {
        orderData.value = newVal
        init(orderData.value)
    })
function resizeMyChart() {
    myChart.resize();
}
const goodslinechart = ref(null)
onMounted(() => {
    myChart = echarts.init(goodslinechart.value as unknown as HTMLElement)
    window.addEventListener('resize', resizeMyChart);
})
function init(orderData: any) {
    const series = new Map()
    const length = orderData.data.length
    for (let i = 0; i < length; i++) {
        for (let key in orderData.data[i]) {
            if (series.has(key)) {
                series.get(key).push(orderData.data[i][key])
            } else {
                series.set(key, [orderData.data[i][key]])
            }
        }
    }
    const echartsSeries: any[] = []
    series.forEach((value, key) => {
        echartsSeries.push({
            name: key,
            type: 'line',
            data: value
        })
    })
    const option = {
        tooltip: {},
        legend: {
            data: Array.from(series.keys())
        },
        xAxis: {
            data: orderData.date
        },
        yAxis: {},
        series: echartsSeries
    }
    myChart.setOption(option);
}
onBeforeUnmount(() => {
    myChart.dispose()
    window.removeEventListener('resize', resizeMyChart);
})
</script>

<style scoped lang='less'>
#goodslinechart {
    width: 100%;
    height: 100%;
}
</style>
