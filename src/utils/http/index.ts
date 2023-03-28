import Request from 'luch-request'
import { ResultEnum } from './types'
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
  withToken: true,
  isReturnNativeResponse: false,
  isTransformResponse: true,
  showLoading: false,
  showErrorMsg: false,
  showSuccessMsg: false
}

/* 创建一个请求实例并且导出 */
const request = new Request({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: 20000,
  custom: defaultCustom,
  // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
  validateStatus: (statusCode) => {
    // statusCode 必存在。此处示例为全局默认配置
    return statusCode >= 200 && statusCode < 300
  }
})

/* 创建请求拦截器 */
request.interceptors.request.use(
  async (config) => {
    const showLoading = config?.custom?.showLoading
    // 是否开启loading
    if (showLoading) {
      uni.showLoading({
        title: '加载中'
      })
    }
    return config
  },
  (config) => {
    return Promise.reject(config)
  }
)

/* 创建返回拦截器 */
request.interceptors.response.use(
  async (response) => {
    const showLoading = response.config?.custom?.showLoading
    if (showLoading) {
      uni.hideLoading()
    }
    /* 返回原始数据 */
    const isReturnNativeResponse = response.config?.custom?.isReturnNativeResponse
    if (isReturnNativeResponse) {
      return response
    }
    const isTransformResponse = response.config?.custom?.isTransformResponse
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return response.data
    }
    // 错误的时候返回
    const { data } = response
    if (!data) {
      throw new Error('错误提示')
    }
    //  这里 code，data，msg为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    /* 请求成功 */
    const hasSuccess = data && Reflect.has(data, 'code') && data.code === ResultEnum.SUCCESS
    if (hasSuccess) {
      const successMsg = data?.msg || '成功提示'
      const showSuccessMsg = response.config?.custom?.showSuccessMsg
      if (showSuccessMsg) {
        // 展示成功toast
        uni.showToast({
          icon: 'success',
          title: successMsg
        })
      }
      return data.data
    }
    const showErrorMsg = response.config?.custom?.showErrorMsg
    const timeoutMsg = data.msg || '错误提示'
    if (showErrorMsg) {
      // 展示成功toast
      uni.showToast({
        icon: 'success',
        title: timeoutMsg
      })
    }
    throw new Error(timeoutMsg)
  },
  (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    const showLoading = response.config?.custom?.showLoading
    if (showLoading) {
      uni.hideLoading()
    }
    console.log(response, '错误返回')
    const status: number = response?.data?.status
    let errMessage = ''
    console.log(status, 'status')
    try {
      switch (status) {
        case 400:
          if (response.config.url === '/api/authenticate') {
            errMessage = '验证码错误'
          } else {
            errMessage = '错误的请求参数'
          }
          break
        case 401:
          if (response.config.url === '/api/authenticate') {
            errMessage = '用户名或者密码错误'
          } else {
            errMessage = 'token无效，请重新登陆'
          }

          break
        case 403:
          errMessage = '用户得到授权，但是访问是被禁止的。!'
          break
        // 404请求不存在
        case 404:
          errMessage = '网络请求错误,未找到该资源!'
          break
        case 405:
          errMessage = '网络请求错误,请求方法未允许!'
          break
        case 408:
          errMessage = '网络请求超时!'
          break
        case 500:
          errMessage = '服务器错误,请联系管理员!'
          break
        case 501:
          errMessage = '网络未实现!'
          break
        case 502:
          errMessage = '网络错误!'
          break
        case 503:
          errMessage = '服务不可用，服务器暂时过载或维护!'
          break
        case 504:
          errMessage = '网络超时!'
          break
        case 505:
          errMessage = 'http版本不支持该请求!'
          break
        default:
          errMessage = '未知错误'
          break
      }

      // 是否展示错误信息
      const showErrorMsg = response.config?.custom?.showErrorMsg
      console.log(showErrorMsg, 'showErrorMsg')
      if (showErrorMsg) {
        uni.showToast({
          icon: 'none',
          title: errMessage
        })
      }
    } catch (error) {
      throw new Error(error as unknown as string)
    }
    return Promise.reject(response)
  }
)
export default request
