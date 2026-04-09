# StarSite

一个基于 `Nuxt 3` 的个人技术文档站，适合前端工程师维护个人介绍、技术文章、面试题和工程总结。

## 快速开始

安装依赖：

```bash
npm install
```

启动本地开发：

```bash
npm run dev -- --host 127.0.0.1 --port 3001
```

本地访问：

```text
http://127.0.0.1:3001/
```

构建生产包：

```bash
npm run build
```

静态导出：

```bash
npm run generate
```

类型检查：

```bash
npm run typecheck
```

## 这个项目现在有什么

- 首页：文档优先的入口页
- 文档列表页：按分类查看文章
- 文档详情页：支持 Markdown、代码块、图片和音频
- 搜索页：支持标题、标签、分类检索
- 个人介绍页：维护你的资料、技能和经历
- 中英文界面切换
- RSS、Sitemap、404、静态导出

## 目录速览

```text
app/config/site.ts         站点配置、分类、个人资料
content/articles/          文章内容
i18n/locales/              中英文文案
pages/                     页面
components/                通用组件
server/utils/content.ts    内容查询与数据适配
public/media/              图片和媒体资源
```

## 你最常改的地方

如果你想改内容：

- `content/articles/`
- `app/config/site.ts`
- `i18n/locales/`
- `public/media/`

如果你想改页面或样式：

- `pages/`
- `components/`
- `assets/css/main.css`

## 文档入口

更完整的项目说明见：

- [PROJECT.md](./PROJECT.md)

Agent 协作规则见：

- [AGENT_RULES.md](./AGENT_RULES.md)
