import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '#eaf4fa',
        dark: '#111111'
      },

      color: {
        initial: '#27272A',
        dark: '#ffffff'
      }
    }
  },
  color: {
    primary: theme.color?.red
  },
  typography: {
    font: {
      body: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
    }
  }
})