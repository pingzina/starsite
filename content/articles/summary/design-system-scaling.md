---
title: 设计系统在业务增长中的扩展策略
description: 组件库不是一次性资产，真正难的是版本治理、设计约束和业务接入节奏。
category: 工程总结
tags:
  - Design System
  - Component Library
  - Governance
publishAt: 2026-03-11
updatedAt: 2026-04-07
readingTime: 8 min
featured: true
draft: false
media: []
---

## 问题通常不在组件本身

最早期的组件库很容易只解决“复用”问题，但业务一多，真正的难点会变成：

- 组件规范是否统一
- 设计 token 是否可追踪
- 多团队如何升级版本

## 我更倾向的落地方式

1. token 先行，不先堆视觉组件
2. 组件接口稳定优先于功能丰富
3. 通过文档站建立可发现性和迁移指南

## 文档体系的价值

组件库失败，往往不是因为代码差，而是文档缺失、约束不清、接入成本太高。
