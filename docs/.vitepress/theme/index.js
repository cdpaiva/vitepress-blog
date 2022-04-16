import DefaultTheme from 'vitepress/theme'
import CustomFooter from './components/CustomFooter.vue'
import MyLayout from './components/MyLayout.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
  }
}
