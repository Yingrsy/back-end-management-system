<template>
    <div class="systemhome">
        <el-row :gutter="20" class="elrow">
            <el-col :span="8">
                <user-info />
                <goods-table :home-data="homeData" style="margin-top: 20px" />
            </el-col>
            <el-col :span="16">
                <order-lists />
                <goods-line-chart style="margin-top: 20px" :home-data="homeData" />
                <div class="charts">
                    <goods-histogram class="goods-histogram" :home-data="homeData" />
                    <goods-pie-chart class="goods-pie-chart" :home-data="homeData" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang='ts' setup>
import UserInfo from '@/components/home/UserInfo.vue'
import GoodsTable from '@/components/home/GoodsTable.vue'
import OrderLists from '@/components/home/OrderLists.vue';
import { getData } from '../api/index'
import { onMounted, ref } from 'vue'
import GoodsLineChart from '@/components/home/GoodsLineChart.vue'
import GoodsPieChart from '@/components/home/GoodsPieChart.vue'
import GoodsHistogram from '@/components/home/GoodsHistogram.vue'
const homeData = ref({});
onMounted(() => {
    getData().then(({ data }) => {
        homeData.value = data.data
    })
})
</script>

<style scoped lang='less'>
.systemhome {
    height: 100%;

    .elrow {
        height: 100%;
    }
}

.charts {
    display: flex;
    margin-top: 20px;
    width: 100%;

    .goods-pie-chart {
        flex: 1;
        height: 260px;
        margin-left: 20px;
    }

    .goods-histogram {
        flex: 1;
        height: 260px;
    }
}
</style>
