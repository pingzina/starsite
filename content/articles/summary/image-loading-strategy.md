---
title: 图片加载策略的实战选择
description: 讨论封面图、首屏图、长内容图片在不同页面类型中的加载优先级。
category: 浏览器/性能
tags:
  - Image
  - Lazy Load
  - LCP
publishAt: 2026-03-06
updatedAt: 2026-04-06
readingTime: 6 min
featured: false
draft: false
media: []
---

## 不同页面，不同策略

首页 Hero 图、列表封面和正文插图的优先级完全不同，不能一刀切懒加载。

## 一条经验

影响 LCP 的主图要尽快加载，长内容里的图片则优先考虑延迟加载和尺寸占位。

## 和设计沟通时要说清什么

视觉稿上的“高清大图”如果没有资源预算，很容易直接吞掉首屏性能。
