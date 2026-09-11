// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './style.css'
import './custom.css'
import WeeklyTodo from "./components/WeeklyTodo.vue"
import CodeSandbox from "./components/CodeSandbox.vue"
import SandboxButton from "./components/SandboxButton.vue"


export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);
    app.component("WeeklyTodo", WeeklyTodo);
    app.component("CodeSandbox", CodeSandbox);
    app.component("SandboxButton", SandboxButton);
  }
}
