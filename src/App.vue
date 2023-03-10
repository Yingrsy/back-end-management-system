<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    router.push("/home")
})
</script>

<template>
    <router-view />
</template>


<style scoped lang="less"></style>
