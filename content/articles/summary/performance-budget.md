---
title: 建立性能预算而不是事后救火
description: 把性能目标前置进研发流程，比上线后临时排查更有效。
category: 浏览器/性能
tags:
  - Performance
  - Budget
  - Monitoring
publishAt: 2026-03-07
updatedAt: 2026-04-07
readingTime: 6 min
featured: false
draft: false
media: []
---

## 为什么需要预算

如果性能只在测试或线上报警时才被讨论，团队很难形成一致的工程约束。

## 建议设置的预算项

- 首屏 JS 体积
- 关键路径资源数量
- LCP 和 INP 阈值
- 图片体积上限

## 推进方式

把预算接入 CI 报告和发布流程，而不是靠口头提醒。
