import { defineConfig } from 'vitepress'
import algolia from './algolia'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftUI训练营",
  description: "专注于分享 SwiftUI 实战技巧与开发经验",
  srcDir: "docs",
  // ignoreDeadLinks: true,
  themeConfig: {
    logo: '/images/logo.svg',
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/getting-started' },
      { text: '组件库', link: '/components/overview' },
      {
        text: '高级教程', items: [
          { text: '项目实战', link: '/projects/todo' },
          { text: '进阶技巧', link: '/advanced/integrations' }
        ]
      }
    ],
    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },
    // 侧边栏
    sidebar: {
      '/getting-started': [
        {
          text: '快速入门',
          collapsed: true,
          items: [
            { text: '开始使用 SwiftUI', link: '/getting-started' },
            { text: 'SwiftUI 项目结构解析', link: '/getting-started/structure' }
          ]
        },
      ],
      '/components/': [
        {
          text: '常用组件',
          collapsed: true,
          items: [
            { text: '按钮 Button', link: '/components/button' },
            { text: '输入框 TextField', link: '/components/textfield' },
            { text: '切换开关 Toggle', link: '/components/toggle' }
          ]
        },
      ],
      '/projects/': [
        {
          text: '实战项目',
          items: [
            { text: '待办事项 TodoApp', link: '/projects/todo' },
            { text: '天气预报 WeatherApp', link: '/projects/weather' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶技巧',
          items: [
            { text: '状态管理机制', link: '/advanced/state-management' },
            { text: '与 Combine 整合', link: '/advanced/integrations' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/你的仓库名' },
      { icon: 'twitter', link: 'https://twitter.com/你的账号' }
    ],

    // 页脚
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: '版权所有 © 2019 至今 Evan You'
    }
  }
})