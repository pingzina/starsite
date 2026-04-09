---
title: 前端 CI 质量闸口怎么设
description: 让 lint、测试、构建、体积和预览校验真正成为交付标准，而不是装饰。
category: 构建工程化
tags:
  - CI
  - Quality
  - Delivery
publishAt: 2026-03-05
updatedAt: 2026-04-08
readingTime: 7 min
featured: true
draft: false
media: []
---

## 最基础的闸口

- 类型检查
- 构建成功
- 单元测试
- 关键页面冒烟

## 更进一步

当站点规模变大，可以引入 bundle 变化对比、截图回归和 Lighthouse 基线。

## 判断标准

CI 的目标不是“多跑几个命令”，而是把风险拦在合并之前。
