import * as path from 'node:path';
import nav from './setting/nav.ts';
import footer from './setting/footer.ts';
import sidebar from './setting/sidebar.ts';
import socialLinks from './setting/socialLinks.ts';
import katex from 'rspress-plugin-katex';
import { pluginCustomCss } from './plugin';
import mermaid from 'rspress-plugin-mermaid';
import { defineConfig } from 'rspress/config';
import supersub from 'rspress-plugin-supersub';
import alignImage from 'rspress-plugin-align-image';
import readingTime from 'rspress-plugin-reading-time';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
import {
  pluginShiki,
  createTransformerDiff,
  createTransformerFocus,
  createTransformerHighlight,
  createTransformerLineNumber,
  createTransformerErrorLevel,
} from '@rspress/plugin-shiki';

export default defineConfig({
  base: '/geomind-rspress/',
  root: path.join(__dirname, 'docs'),
  title: 'Geomind',
  description: '基于RsPress的个人站点知识库',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-icon.png',
    dark: '/rspress-icon.png',
  },
  logoText: 'Geomind',
  mediumZoom: true,
  route: {
    cleanUrls: true,
  },
  search: {
    versioned: true,
    codeBlocks: true,
  },
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: false,
  },
  themeConfig: {
    nav: nav,
    footer: footer,
    sidebar: sidebar,
    socialLinks: socialLinks,
    search: true,
    darkMode: true,
    hideNavbar: 'auto',
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    enableScrollToTop: true,
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    searchPlaceholderText: '搜索文档',
    searchNoResultsText: '卧槽，竟然没有搜索到文档~',
    searchSuggestedQueryText:
      '请重新输入gi关键字搜索，或立即动手弥补这块空缺吧！',
  },
  plugins: [
    // 支持 katex 数学公式插件（和 pluginShiki 插件有冲突）
    katex(),
    // 支持 mermaid 流程图插件
    mermaid(),
    // 支持角标上标和下标插件
    supersub(),
    // markdown图片默认居中插件
    alignImage(),
    // 自定义的全局CSS样式插件
    pluginCustomCss(),
    // 使用OpenSans作为默认字体插件
    pluginFontOpenSans(),
    // 显示阅读时间插件
    readingTime({
      defaultLocale: 'zh-CN',
    }),
    pluginShiki({
      theme: 'css-variables',
      langs: [
        'c#',
        'go',
        'vue',
        'c++',
        'sql',
        'yml',
        'yaml',
        'java',
        'rust',
        'nginx',
        'shell',
        'docker',
        'python',
        'dockerfile',
        'typescript',
      ],
      transformers: [
        createTransformerDiff(),
        createTransformerFocus(),
        createTransformerHighlight(),
        createTransformerLineNumber(),
        createTransformerErrorLevel(),
      ],
    }),
  ],
});
