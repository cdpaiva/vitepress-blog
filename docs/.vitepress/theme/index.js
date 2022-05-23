import DefaultTheme from 'vitepress/theme'
import CustomFooter from './components/CustomFooter.vue'
import MyLayout from './components/MyLayout.vue'
import * as Panelbear from '@panelbear/panelbear-js';

import './custom.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('CustomFooter', CustomFooter)

    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return
    }
    app.provide('analytics', Panelbear)
    Panelbear.load('BjpPhduGvha', {
      spaMode: 'history',
      autoTrack: true
    })
  }
}
