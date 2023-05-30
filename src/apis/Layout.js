import httpInstance from "@/utils/http"

//导出getCategoryAPI,函数里面包含了
export function getCategoryAPI () {
    return httpInstance({
        url: '/home/category/head'
    })
} 