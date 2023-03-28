import { defineConfig ,loadEnv} from "vite";
import type { UserConfig, ConfigEnv } from 'vite'
import uni from "@dcloudio/vite-plugin-uni";
/**
 * @description: 此函数用来格式化环境变量
 * @param {object} envConf
 * @return {ViteEnv}
 */
const wrapperEnv = (envConf: { [key: string]: any }): ViteEnv => {
  const ret: any = {}
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
// https://vitejs.dev/config/
export default defineConfig(({command, mode} : ConfigEnv) : UserConfig => {
  console.log(command, mode)
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root, 'VITE_')
  const viteEnv = wrapperEnv(env)
  const {VITE_PUBLIC_PATH} = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [uni()],
    build: {
      minify: 'terser',
      terserOptions: {
      compress: {
          drop_console: isBuild
        }
      }
    }
  }
});
