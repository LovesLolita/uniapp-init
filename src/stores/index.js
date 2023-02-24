import { defineStore } from 'pinia'
import { useCounterStore } from '@/stores/module/counter'


const mainStore = defineStore('mainStore', () => {
  // 注册组内store
  const counterStore = useCounterStore()

  return { counterStore }
})
export default mainStore