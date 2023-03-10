<template>
    <div class="orderlist">
        <order-card v-for="item of cardData" :key="item.name" :name="item.name" :value="item.value" :icon="item.icon"
            :color="item.color" />
    </div>
</template>

<script lang='ts' setup>
import OrderCard from './OrderCard.vue';
const cardData = [
    {
        name: '今日支付订单',
        value: 1234,
        icon: 'Wallet',
        color: '#2ec7c9'
    },
    {
        name: '今日收藏订单',
        value: 210,
        icon: 'Star',
        color: '#ffb980'
    },
    {
        name: '今日未支付订单',
        value: 1234,
        icon: 'ShoppingCartFull',
        color: '#5ab1ef'
    },
    {
        name: '本月支付订单',
        value: 210,
        icon: 'Wallet',
        color: '#2ec7c9'
    },
    {
        name: '本月收藏订单',
        value: 1234,
        icon: 'Star',
        color: '#ffb980'
    },
    {
        name: '本月未支付订单',
        value: 210,
        icon: 'ShoppingCartFull',
        color: '#5ab1ef'
    },
]
</script>

<style scoped lang='less'>
.orderlist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
}
</style>
