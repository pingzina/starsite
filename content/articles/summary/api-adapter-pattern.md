---
title: 为未来接口化预留 Adapter 层
description: 从静态内容站走向接口驱动站点时，为什么一定要尽早定义访问边界。
category: 构建工程化
tags:
  - Adapter
  - API
  - Abstraction
publishAt: 2026-03-04
updatedAt: 2026-04-07
readingTime: 7 min
featured: false
draft: false
media: []
---

## 为什么不是直接在页面里请求

页面如果直接依赖接口字段，后续内容源、缓存策略和权限模型变化都会把成本传递到 UI。

## 更稳的方案

在 repository 层定义稳定签名：

- 获取列表
- 获取详情
- 获取精选
- 搜索

页面只消费统一结果，底层再决定来自 Markdown 还是 API。
