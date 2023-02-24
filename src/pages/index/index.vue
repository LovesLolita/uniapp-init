<!--  -->
<script setup name="index">
/* eslint-disable */
import { ref, reactive, onBeforeMount, onMounted, getCurrentInstance, watchEffect, computed } from 'vue'
 import mainStore from '@/stores'
 import API from '@/api'

// 仓库
// const store = useStore()

// Pinia
const store = mainStore()
const count = computed(()=> store.counterStore.count)

// 组件传值
const props = defineProps({})
const emits = defineEmits([])

// 获取上下文
const { proxy } = getCurrentInstance()

// 数据部分
const title = ref('Hello 马骁骁')

const handleCount = () => {
  store.counterStore.increment()
}

// 测试发送请求
const testApi = async() => {
  try {
    const res = await API.getList()
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// 组件挂载页面之前执行
onBeforeMount(() => {
   testApi()
})

// 组件挂载到页面之后执行
onMounted(() => {})

watchEffect(() => {})

// keep-alive缓存
// onActivated()

// 组件方法暴露
// defineExpose()

</script>
<template>
   <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
      
    </view>  
    <view> <text class="count">{{ count }}</text></view>
    <view> <u-button type="primary" text="+1" @click="handleCount"></u-button></view>
  </view>
</template>

<style scoped >
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
.count{
  font-size: 100rpx;
  font-weight: 700;

}
</style>
