import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI} from '@/apis/Layout'
//上面三个导入都没有问题
export const useCategoryStore = defineStore('CateGory', () => {
const CategoryList = ref([])

//action获取导航数据的方法
const getCategory = async() => {
  const res =  await getCategoryAPI()
  console.log(res)
  CategoryList.value = res.result
  }

 return {CategoryList,getCategory}
})
