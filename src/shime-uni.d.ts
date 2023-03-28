export {}

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
}
declare module '@/uni_modules/mescroll-uni/hooks/useMescroll.js'
