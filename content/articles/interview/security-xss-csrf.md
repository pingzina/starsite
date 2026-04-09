---
title: XSS 与 CSRF 面试题整理
description: 明确两者的攻击方式、防御思路与前端需要承担的责任边界。
category: 面试题
tags:
  - Security
  - XSS
  - CSRF
publishAt: 2026-03-12
updatedAt: 2026-04-03
readingTime: 6 min
featured: false
draft: false
media: []
---

## 区别先讲清

- XSS：把恶意脚本注入页面执行
- CSRF：诱导用户在登录状态下发起非预期请求

## XSS 防御

- 输出时转义
- 避免直接拼接 HTML
- 建立 CSP
- 对富文本输入做白名单过滤

## CSRF 防御

- SameSite Cookie
- CSRF Token
- 严格校验来源

## 前端视角

前端不能只说“后端处理”。模板渲染、第三方脚本引入、富文本展示都直接影响安全暴露面。
