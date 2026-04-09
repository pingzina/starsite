---
title: Vue Composable 的边界设计
description: 组合式函数不是越大越好，关键是职责清晰、依赖可替换、生命周期易推断。
category: Vue 生态
tags:
  - Vue 3
  - Composable
  - Architecture
publishAt: 2026-03-01
updatedAt: 2026-04-05
readingTime: 6 min
featured: false
draft: false
media: []
---

## 一个判断标准

如果组合式函数同时处理数据获取、UI 状态、DOM 监听和业务规则，它通常已经超出合理边界。

## 更稳的拆法

- 一层负责数据来源
- 一层负责业务规则
- 一层负责页面状态协调

## 结果

测试更容易写，替换实现也更轻松。
