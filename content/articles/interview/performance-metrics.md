---
title: 前端性能指标面试题
description: 从 FCP、LCP、CLS、INP 说到性能优化，把指标和手段关联起来回答。
category: 面试题
tags:
  - Performance
  - Web Vitals
  - UX
publishAt: 2026-03-13
updatedAt: 2026-04-07
readingTime: 7 min
featured: true
draft: false
media:
  - type: audio
    src: https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3
    title: 音频示例，用于验证文档页的播放器展示能力。
---

## 常见指标

- FCP：首次内容绘制
- LCP：最大内容绘制
- CLS：累计布局偏移
- INP：交互到下次绘制的延迟

## 怎么回答优化方向

指标不要孤立背。面试时最好把指标与策略绑定：

- LCP 高：图片、字体、首屏资源优先级
- CLS 高：尺寸预留、异步内容占位
- INP 高：减少主线程阻塞、分片长任务

## 实际工作中怎么推进

先建立监控，再按页面场景拆分问题。没有真实埋点，性能优化很容易变成主观讨论。
