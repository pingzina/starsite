# StarSite 项目文档

## 1. 项目定位

`StarSite` 是一个基于 `Nuxt 3 + Vue 3 + TypeScript + @nuxt/content + Tailwind CSS + @nuxtjs/i18n` 搭建的个人技术文档站。

当前目标：

- 展示个人介绍、技能方向、项目经历
- 管理技术文章、面试题、工程总结
- 支持中英文界面切换
- 支持静态部署
- 预留后续接入服务端接口的空间

当前内容以本地静态维护为主，但数据访问方式已经按“后续可接口化”来组织。

## 2. 技术栈

- `Nuxt 3`
- `Vue 3`
- `TypeScript`
- `@nuxt/content`
- `@nuxtjs/i18n`
- `Tailwind CSS`
- `better-sqlite3`

## 3. 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev -- --host 127.0.0.1 --port 3001
```

当前本地访问地址：

```text
http://127.0.0.1:3001/
```

生产构建：

```bash
npm run build
```

静态导出：

```bash
npm run generate
```

类型检查：

```bash
npm run typecheck
```

## 4. 项目目录说明

```text
starsite/
├─ app/
│  └─ config/                站点配置、分类、个人资料
├─ assets/
│  └─ css/                   全局样式
├─ components/               通用组件
├─ content/
│  └─ articles/              Markdown 文档内容
├─ i18n/
│  └─ locales/               中英文界面文案
├─ layouts/                  页面布局
├─ pages/                    页面路由
├─ public/                   静态资源
├─ server/
│  ├─ api/                   对前端暴露的数据接口
│  ├─ routes/                rss/sitemap 等服务端路由
│  └─ utils/                 内容查询与数据转换
├─ types/                    类型定义
├─ PROJECT.md                项目说明
└─ AGENT_RULES.md            Agent 协作规则
```

## 5. 内容维护方式

### 5.1 文章内容

文章放在：

- `content/articles/interview/`
- `content/articles/summary/`

每篇文章是一个 Markdown 文件，包含 `frontmatter`。

示例：

```md
---
title: 示例文章
description: 文章摘要
category: 面试题
tags:
  - Vue 3
  - TypeScript
cover: /media/hero-architecture.svg
publishAt: 2026-04-01
updatedAt: 2026-04-06
readingTime: 6 min
featured: true
draft: false
media:
  - type: image
    src: /media/hero-architecture.svg
    title: 示例图片
---
```

字段说明：

- `title`: 标题
- `description`: 摘要
- `category`: 分类
- `tags`: 标签
- `cover`: 封面图
- `publishAt`: 发布时间
- `updatedAt`: 更新时间
- `readingTime`: 阅读时长展示
- `featured`: 是否精选
- `draft`: 是否草稿
- `media`: 图片、音频、演示链接

### 5.2 个人资料

个人资料目前在：

- `app/config/site.ts`

你可以修改：

- 名字
- 职位
- 城市
- 个人简介
- 技术栈
- 社交链接
- 时间线

### 5.3 界面文案

中英文界面文案在：

- `i18n/locales/zh-CN.json`
- `i18n/locales/en-US.json`

### 5.4 静态资源

图片、图标、媒体资源在：

- `public/`
- `public/media/`

引用时使用站点绝对路径，例如：

```text
/media/hero-architecture.svg
```

## 6. 页面说明

### 首页

文件：

- `pages/index.vue`

功能：

- Hero 区
- 搜索入口
- 分类入口
- 精选文章
- 最近更新
- 个人简介卡片

### 文档列表页

文件：

- `pages/articles/index.vue`

功能：

- 分类筛选
- 文档卡片列表

### 文档详情页

文件：

- `pages/articles/[...slug].vue`

功能：

- Markdown 渲染
- 目录锚点
- 标签与分类展示
- 上一篇 / 下一篇
- 图片与音频展示

### 搜索页

文件：

- `pages/search.vue`

功能：

- 标题/标签/分类搜索

### 个人介绍页

文件：

- `pages/profile.vue`

功能：

- 个人资料
- 技术栈
- 时间线

## 7. 当前数据流

前端页面不直接读 Markdown 文件，而是通过服务端接口访问统一数据。

主要接口：

- `/api/articles`
- `/api/articles/[...slug]`
- `/api/search`
- `/api/profile`

核心逻辑在：

- `server/utils/content.ts`

这样做的目的是为了将来把内容源从 Markdown 换成数据库或服务端接口时，页面层尽量少改。

## 8. 环境变量

当前支持：

- `.env.development`
- `.env.staging`
- `.env.production`

关键变量：

- `NUXT_PUBLIC_SITE_TITLE`
- `NUXT_PUBLIC_SITE_URL`
- `NUXT_PUBLIC_DEFAULT_LOCALE`
- `NUXT_PUBLIC_SEARCH_MODE`
- `NUXT_PUBLIC_ASSET_BASE`
- `NUXT_PUBLIC_ENABLE_ANALYTICS`
- `NUXT_PUBLIC_API_BASE`
- `NUXT_APP_BASE_URL`

如果部署到 GitHub Pages，要重点检查：

- `NUXT_APP_BASE_URL`
- `NUXT_PUBLIC_SITE_URL`

## 9. 现在你最常改的地方

如果你只是想维护内容，优先改这些：

1. `content/articles/` 里的 Markdown
2. `app/config/site.ts`
3. `i18n/locales/*.json`
4. `public/media/`

如果你想改页面结构或视觉：

1. `pages/`
2. `components/`
3. `assets/css/main.css`

## 10. 后续建议

下一步建议按这个顺序做：

1. 把个人资料替换成你的真实信息
2. 继续补充或重写文章内容
3. 微调首页和文档页视觉
4. 接入评论、统计或分析
5. 再考虑后端接口化和 CMS 化
