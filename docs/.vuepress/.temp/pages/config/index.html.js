export const data = JSON.parse("{\"key\":\"v-ba934fd8\",\"path\":\"/config/\",\"title\":\"首页的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"首页的标题\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{\"updatedTime\":1717520637000,\"contributors\":[{\"name\":\"spider\",\"email\":\"m15828115523@163.com\",\"commits\":1}]},\"filePathRelative\":\"config/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
