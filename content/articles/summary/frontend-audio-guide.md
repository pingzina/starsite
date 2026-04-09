---
title: 在技术文档中组织音频与演示资源
description: 当知识内容不只是文字时，如何把音频、图片和演示链接纳入统一文档模型。
category: AI/效率工具
tags:
  - Media
  - Audio
  - Documentation
publishAt: 2026-03-02
updatedAt: 2026-04-06
readingTime: 5 min
featured: false
draft: false
media:
  - type: audio
    src: https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3
    title: 音频资源示例。
  - type: demo
    src: https://nuxt.com/
    title: 外部演示链接示例。
---

## 为什么需要统一媒体模型

当内容站要承载播客片段、操作录音、产品演示或参考图片时，frontmatter 里最好有稳定的媒体字段。

## 推荐字段

- `type`
- `src`
- `title`
- `alt`

## 这样做的好处

页面渲染规则统一，未来接服务端接口时也能直接映射。
