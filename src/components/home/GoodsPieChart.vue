<template>
    <el-card :body-style="{ height: '100%', width: '100%' }">
        <div id="goodspiechart" ref="goodspiechart"></div>
    </el-card>
</template>

<script lang='ts' setup>
import { watch, ref, onBeforeUnmount, onMounted } from 'vue'
import * as echarts from "echarts";
const props = defineProps({
    homeData: Object
})
const videoData = ref([])
let myChart: echarts.ECharts
watch(
    () => props.homeData?.videoData, (newVal) => {
        videoData.value = newVal
        init(videoData.value)
    })
function resizeMyChart() {
    myChart.resize();
}
function init(videoData: any) {
    const option = {
        series: [
            {
                type: 'pie',
                data: videoData,
                roseType: 'area'
            }
        ]
    }
    myChart.setOption(option);
}
const goodspiechart = ref(null)
onMounted(() => {
    myChart = echarts.init(goodspiechart.value as unknown as HTMLElement)
    window.addEventListener('resize', resizeMyChart);
})

onBeforeUnmount(() => {
    myChart.dispose()
    window.removeEventListener('resize', resizeMyChart);
})
</script>

<style scoped lang='less'>
#goodspiechart {
    width: 100%;
    height: 100%;
}
</style>
