---
title: 原型链与继承如何讲得清楚
description: 从 `__proto__`、`prototype` 到 class 语法糖，把原型链题目讲到业务可落地。
category: 面试题
tags:
  - JavaScript
  - Prototype
  - OOP
publishAt: 2026-03-26
updatedAt: 2026-04-04
readingTime: 6 min
featured: false
draft: false
media: []
---

## 先讲三个概念

- `prototype`：函数作为构造器时挂载实例共享成员的对象
- `__proto__`：对象访问原型链的内部引用
- 原型链：对象沿着原型逐层查找属性的链路

## 一句解释继承

JavaScript 的继承本质上是对象通过原型链共享属性和方法，`class extends` 只是更友好的语法包装。

## 面试表述建议

先说机制，再说为什么有用：

```ts
class User {
  getName() {
    return 'mingxing'
  }
}
```

这个方法并不会拷贝到每个实例本身，而是放在原型上供实例共享。

## 业务意义

前端更常见的是基于对象组合而不是传统继承层级。真正重要的是理解属性查找和共享逻辑，而不是背各种继承写法。
