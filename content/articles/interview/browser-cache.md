---
title: 浏览器缓存面试题速答
description: 强缓存、协商缓存、Cache-Control 和 ETag 的标准答法，以及实际发布策略建议。
category: 面试题
tags:
  - Browser
  - Cache
  - HTTP
publishAt: 2026-03-18
updatedAt: 2026-04-04
readingTime: 7 min
featured: false
draft: false
media: []
---

## 两层缓存思路

- 强缓存：命中后直接用本地副本，不发请求
- 协商缓存：带条件请求，由服务端判断资源是否变更

## 高频字段

- `Cache-Control`
- `Expires`
- `ETag`
- `Last-Modified`

## 前端发布实践

静态资源推荐文件名带 hash，HTML 不做长期强缓存。这样一旦构建产物变更，浏览器会自动拿到新文件。

## 一句总结

缓存策略的目标不是“尽量不请求”，而是在正确更新的前提下减少不必要的传输成本。
