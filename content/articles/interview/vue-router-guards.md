---
title: Vue Router 守卫题怎么回答
description: 从导航流程、全局守卫、组件守卫到权限控制，把 Router 常考点串成一套答案。
category: 面试题
tags:
  - Vue Router
  - Auth
  - Navigation
publishAt: 2026-03-22
updatedAt: 2026-04-02
readingTime: 5 min
featured: false
draft: false
media: []
---

## 常见守卫类型

- 全局前置守卫 `beforeEach`
- 路由独享守卫 `beforeEnter`
- 组件内守卫

## 权限题回答模板

可以先说明登录态校验，再说明动态路由和异常回退：

```ts
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !token.value) {
    return '/login'
  }
})
```

## 容易失分的点

- 异步守卫没有正确返回
- 重定向后丢失原始目标地址
- 权限和菜单逻辑耦合得过重

## 更成熟的说法

把“是否能进页面”和“进来后能看到什么”分层处理。守卫负责入口权限，页面内部负责细粒度按钮权限。
