<template>
  <div class="commontag">
    <el-tag v-for="tag of tabHistory" :key="tag.name" class="mx-1" :closable="tag.name !== 'SystemHome'"
      :effect="route.name === tag.name ? 'dark' : 'plain'" :style="{ marginLeft: '10px' }" @close="handleClose(tag.name)"
      @click="handleClick(tag.paths, tag.path)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = useStore()
const tabHistory = computed(() => {
  return store.state.tab.tabHistory
})
function handleClose(tagName: String) {
  let pathsIndex = -1
  if (route.name === tagName) {
    pathsIndex = store.state.tab.tabHistory.findIndex((item: { name: String; }) => item.name === tagName) - 1
    router.push(store.state.tab.tabHistory[pathsIndex].path)
  }
  store.commit({
    type: 'tab/deleteHistory',
    tagName: tagName,
    index: pathsIndex
  })
}
function handleClick(paths: any, tagPath: string) {
  store.commit('tab/selectMenu', paths)
  router.push(tagPath)
}
</script>

<style scoped lang='less'>
.commontag {
  display: flex;
  box-shadow: 0 5px 5px #ccc;
  user-select: none;
  height: 50px;

  .mx-1 {
    margin: auto 0;
  }
}
</style>
