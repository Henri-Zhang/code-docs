export default `import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'LeetCode算法题解',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }]],
  description: 'Just playing around',
  base: '/',
  plugins: [
    [
      'vuepress-plugin-code-copy',
      {
        color: '#f08d49',
      },
    ],
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: defaultTheme({
    nav: [
      { text: 'Home', link: 'https://studio.henri.ren' },
      { text: 'GitHub', link: 'https://github.com/Henri-Zhang' },
    ],
    sidebar: {{SIDEBAR}},
  }),
});`
