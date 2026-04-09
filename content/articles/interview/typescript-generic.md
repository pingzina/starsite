---
title: TypeScript 泛型题如何回答
description: 用约束、复用和类型推导解释泛型，不把答案讲成背语法。
category: 面试题
tags:
  - TypeScript
  - Generic
  - Inference
publishAt: 2026-03-15
updatedAt: 2026-04-06
readingTime: 6 min
featured: true
draft: false
media: []
---

## 泛型的核心价值

在不丢失类型信息的前提下提高复用性。不是“任意类型”，而是“同一套逻辑适配一组受约束的类型”。

```ts
function first<T>(list: T[]): T | undefined {
  return list[0]
}
```

## 追问点

### 什么时候加约束

当函数逻辑依赖某些属性或结构时，用 `extends` 约束泛型参数。

### 泛型和 `any` 的区别

`any` 直接放弃类型系统，泛型保留输入输出关系。

## 业务价值

组件 props、接口封装、表单模型和通用工具函数都很依赖泛型表达能力。
