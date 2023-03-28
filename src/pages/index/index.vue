<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getRandomImage } from '@/api/app'
console.log(import.meta.env)
// 获取验证码
const getRandomImg = async () => {
  const key = +new Date() + ''
  try {
    let res = await getRandomImage(key)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
const title = ref('Hello')
onMounted(() => {
  getRandomImg()
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
