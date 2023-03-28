<template>
  <view class="demo-page">
    <view class="comp-item" v-for="item in compList" :key="item.url" @click="handleClick(item)">{{
      item.name
    }}</view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const compList = ref<{ name: string; url: string }[]>([
  {
    name: 'mescroll-uni组件示例',
    url: '/pages/demo/list-news'
  },
  {
    name: 'mescroll-uni简单示例',
    url: '/pages/demo/list-products'
  }
])
const handleClick = (item: { name: string; url: string }) => {
  uni.navigateTo({ url: item.url })
}
</script>
<style lang="scss">
.comp-item {
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 1px solid #f4f4f4;
  text-align: center;
  margin-top: 24rpx;
}
</style>
