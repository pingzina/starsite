---
title: Pinia 和 Vuex 的面试对比
description: 为什么 Vue 3 时代更推荐 Pinia，以及如何说明它们的设计差异和迁移思路。
category: 面试题
tags:
  - Pinia
  - Vuex
  - State Management
publishAt: 2026-03-20
updatedAt: 2026-04-03
readingTime: 6 min
featured: false
draft: false
media: []
---

## 可以这样开场

Vuex 更像“约束明确的集中式状态管理”，Pinia 更像“更贴近组合式 API 的轻量状态容器”。

## 为什么现在更常用 Pinia

- API 更简洁
- TypeScript 体验更好
- 没有过度样板代码
- 插件机制和模块组织更直观

## 面试时加分点

不要只说“Pinia 更轻”，还要补上：

- 多 store 拆分更自然
- 可以按业务域组织状态
- 和组合式函数协作更顺滑

## 迁移建议

老项目迁移要分模块进行，不要一次替换整套状态系统。先从低风险模块入手，逐步统一数据流和测试方式。
