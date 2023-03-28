/* 全局声明文件 */
export {}
declare global {
  declare const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
  declare interface ViteEnv {
    VITE_APP_TITLE: string
    VITE_PUBLIC_PATH: string
    VITE_GLOB_API_URL: string
    VITE_PUBLIC_PATH: string
    VITE_GLOB_UPLOAD_URL: string
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  declare type Recordable<T = any> = Record<string, T>
}
