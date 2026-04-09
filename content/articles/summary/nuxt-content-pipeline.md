---
title: 用 Nuxt Content 搭内容站的经验
description: 内容建模、路由生成、静态部署和后续接口化改造如何提前留口。
category: Vue 生态
tags:
  - Nuxt 3
  - Content
  - Static Site
publishAt: 2026-03-08
updatedAt: 2026-04-08
readingTime: 7 min
featured: true
draft: false
media: []
---

## 为什么适合技术文档站

Markdown 对技术内容有天然优势：代码块、层级标题、表格、提示块都很自然。

## 关键实践

- frontmatter 统一建模
- 页面层不直接耦合内容查询实现
- 静态资源和文章路径规则尽早定好

## 为什么要预留 adapter

内容源从本地文件迁移到服务端接口时，最怕页面层大面积重写。抽象一层 repository，后续替换成本就会低很多。
