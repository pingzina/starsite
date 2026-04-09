---
title: Vue 3 响应式系统面试题
description: 用 Proxy、track、trigger 和 effect 的主线解释 Vue 3 响应式系统。
category: 面试题
tags:
  - Vue 3
  - Reactivity
  - Proxy
publishAt: 2026-03-24
updatedAt: 2026-04-05
readingTime: 8 min
featured: true
draft: false
media: []
---

## Vue 3 为什么改成 Proxy

`Object.defineProperty` 对新增属性、数组变更和深层代理支持有限，而 `Proxy` 可以拦截更完整的对象操作。

## 最常见的面试回答结构

1. `reactive` 用 Proxy 包装对象
2. 读取时 `track` 收集依赖
3. 修改时 `trigger` 通知副作用重新执行
4. `effect` 负责建立响应式副作用

## `ref` 和 `reactive` 的区别

- `ref` 适合基本类型或单值引用
- `reactive` 适合对象和集合类型
- 模板中会自动解包 `ref`

## 工程角度补一句

真正拉开水平差距的不是“知道原理”，而是知道什么时候不要让响应式扩散。大对象、超深层状态和跨模块联动需要控制边界。
