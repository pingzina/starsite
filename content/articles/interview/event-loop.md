---
title: Event Loop 面试答法
description: 梳理宏任务、微任务和浏览器渲染时机，用一套稳定表达回答事件循环问题。
category: 面试题
tags:
  - JavaScript
  - Event Loop
  - Browser
publishAt: 2026-03-28
updatedAt: 2026-04-05
readingTime: 7 min
featured: true
draft: false
media: []
---

## 核心回答框架

JavaScript 在浏览器主线程中通常是单线程执行的。同步代码先入栈执行，异步任务会被放到不同的任务队列，等待主线程空闲后再调度。

## 宏任务与微任务

- 宏任务：`setTimeout`、`setInterval`、I/O、UI 事件
- 微任务：`Promise.then`、`queueMicrotask`、`MutationObserver`

执行顺序可以概括为：

1. 执行一个宏任务
2. 清空当前微任务队列
3. 浏览器决定是否进行渲染
4. 进入下一个宏任务

## 高频陷阱

### `setTimeout(fn, 0)` 会立即执行吗

不会。它只是尽快进入宏任务队列，前提是当前调用栈和前面排队的任务都完成。

### 为什么微任务会“饿死”页面

如果持续递归创建微任务，主线程一直在清空微任务队列，渲染和下一轮宏任务都会被推迟。

## 实战结论

复杂交互里，性能问题往往不是“异步不异步”，而是任务塞到了错误的优先级。渲染敏感逻辑不要在单次事件里堆太多同步计算。
