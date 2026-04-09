---
title: CSS BFC 与布局问题
description: 面试中如何解释 BFC、解决浮动塌陷，以及它与现代布局的关系。
category: 面试题
tags:
  - CSS
  - BFC
  - Layout
publishAt: 2026-03-16
updatedAt: 2026-04-02
readingTime: 5 min
featured: false
draft: false
media: []
---

## BFC 是什么

BFC 是块级格式化上下文，可以理解为一个相对独立的布局环境，内部布局不会影响外部。

## 常见用途

- 清除浮动
- 防止外边距重叠
- 阻止文字环绕浮动元素

## 如何触发

- `overflow: hidden`
- `display: flow-root`
- 绝对定位元素
- 浮动元素

## 面试建议

现代布局里我们更多使用 Flex 和 Grid，但 BFC 依然是理解浏览器布局规则的基础题。
