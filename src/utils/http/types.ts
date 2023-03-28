/* 此处定义后台返回结果的格式 每个项目可能不同 */
export interface Result<T = any> {
  code: number
  type?: 'success' | 'error' | 'warning'
  data: T
  msg: string
  time?: number
}
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 400,
  TIMEOUT = 400
}
