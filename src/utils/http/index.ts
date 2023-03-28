import Request from 'luch-request'
interface CustomConfig {
  withToken?: boolean // 是否在header增加token
  isReturnNativeResponse?: boolean // 是否不做任何处理返回接口原始数据
  isTransformResponse?: boolean // 如果接口返回的格式一致可以统一转换返回数据
  showLoading?: boolean // 请求的时候自动显示全局loading
  showErrorMsg?: boolean // 是否自动显示错误消息
  showSuccessMsg?: boolean // 是否自动显示成功消息，消息展示形式在返回拦截器中自行定义
}

// 默认配置
const defaultCustom: CustomConfig = {
  withToken: true
}

/* 创建一个请求实例并且导出 */
const request = new Request({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: 20000,
  custom: defaultCustom
})

/* 创建请求拦截器 */
request.interceptors.request.use(
  async (config) => {
    return config
  },
  (config) => {
    return Promise.reject(config)
  }
)

/* 创建返回拦截器 */
request.interceptors.response.use(
  async (response) => {
    return response
  },
  (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    console.log(response)
    return Promise.reject(response)
  }
)
export default request
