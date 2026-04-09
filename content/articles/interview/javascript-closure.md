---
title: JavaScript 闭包高频问答
description: 从词法环境、内存保留到实际业务场景，快速解释什么是闭包以及为什么它会影响可维护性。
category: 面试题
tags:
  - JavaScript
  - Closure
  - Scope
cover: /media/hero-architecture.svg
publishAt: 2026-04-01
updatedAt: 2026-04-06
readingTime: 6 min
featured: true
draft: false
media:
  - type: image
    src: /media/hero-architecture.svg
    alt: 文档站结构示意图
    title: 示例图片，验证 Markdown 文档与静态媒体的组合展示能力。
---

## 什么是闭包

闭包本质上是函数与其词法作用域的绑定关系。函数在定义时就记住了外层变量，即使离开原来的执行上下文也能继续访问。

```ts
function createCounter() {
  let count = 0
  return () => ++count
}
```

上面的返回函数就是一个闭包，它持有 `count`。

## 面试时怎么解释

可以用三句话讲清楚：

1. 闭包是函数访问其定义时作用域变量的能力。
2. 闭包让数据可以被私有化，也会让变量生命周期变长。
3. 如果滥用，会带来内存驻留和调试复杂度。

## 常见追问

### 闭包一定会导致内存泄漏吗

不会。闭包只是让变量存活更久，是否泄漏取决于有没有不再需要却仍被引用的对象。

### 业务里常见在哪

- 防抖和节流
- 柯里化
- 模块私有状态
- 组合式函数中的局部缓存

## 实战建议

在 Vue 组合式函数里，闭包最有价值的地方是封装局部状态和逻辑边界。不要把大型对象无节制地留在闭包里，尤其是含 DOM、定时器、socket 引用时。
