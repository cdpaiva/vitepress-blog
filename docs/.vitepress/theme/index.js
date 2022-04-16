import DefaultTheme from 'vitepress/theme'
import CustomFooter from './components/CustomFooter.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)
  }
}
