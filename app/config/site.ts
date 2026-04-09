import type { ArticleCategory, ProfileInfo, SiteNavItem } from '~/types/content'

export const categories: ArticleCategory[] = [
  {
    key: '面试题',
    label: 'Frontend Interview',
    description: '围绕 JavaScript、Vue、浏览器和工程化的高频问答。',
    accent: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    key: '工程总结',
    label: 'Engineering Summary',
    description: '从项目落地中沉淀出的架构、协作与优化经验。',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    key: 'Vue 生态',
    label: 'Vue Ecosystem',
    description: '聚焦 Vue 3、Nuxt、状态管理与组件设计。',
    accent: 'from-emerald-500/20 to-lime-500/20',
  },
  {
    key: '浏览器/性能',
    label: 'Browser & Performance',
    description: '浏览器原理、性能诊断与用户体验优化。',
    accent: 'from-sky-500/20 to-indigo-500/20',
  },
  {
    key: '构建工程化',
    label: 'Tooling',
    description: '构建系统、CI/CD、代码规范与模块化管理。',
    accent: 'from-rose-500/20 to-pink-500/20',
  },
  {
    key: 'AI/效率工具',
    label: 'AI Workflow',
    description: '以 AI 辅助开发、知识管理和团队提效为目标的实践。',
    accent: 'from-violet-500/20 to-fuchsia-500/20',
  },
]

export const mainNavigation: SiteNavItem[] = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.docs', to: '/articles' },
  { labelKey: 'nav.search', to: '/search' },
  { labelKey: 'nav.profile', to: '/profile' },
]

export const profileByLocale: Record<string, ProfileInfo> = {
  zh: {
    name: 'Mingxing',
    role: '高级前端工程师',
    location: 'Shanghai / Remote Friendly',
    summary: '专注于 Vue 技术栈、工程化体系、组件设计和知识沉淀，希望把项目经验组织成一套长期可维护的个人文档系统。',
    experience: '参与过中后台平台、设计系统、内容平台、低代码和 AI 辅助开发相关项目，关注可维护性与协作效率。',
    skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vite', 'Node.js', 'Design System', 'Performance'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: '掘金', href: 'https://juejin.cn/' },
      { label: 'Email', href: 'mailto:hello@example.com' },
    ],
    timeline: [
      { year: '2026', title: '搭建个人技术文档站', description: '把面试题、工程总结、项目方法论统一沉淀到一个站点里。' },
      { year: '2024', title: '推进组件体系与工程化规范', description: '负责设计系统、Monorepo 和跨项目复用方案。' },
      { year: '2021', title: '深耕 Vue 3 与中后台平台', description: '关注性能优化、权限体系、模块边界与前后端协作。' },
    ],
  },
  en: {
    name: 'Mingxing',
    role: 'Senior Frontend Engineer',
    location: 'Shanghai / Remote Friendly',
    summary: 'Focused on the Vue ecosystem, frontend architecture, component systems, and durable knowledge capture across product teams.',
    experience: 'Worked on admin platforms, design systems, content products, low-code tooling, and AI-assisted engineering workflows.',
    skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Vite', 'Node.js', 'Design System', 'Performance'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Juejin', href: 'https://juejin.cn/' },
      { label: 'Email', href: 'mailto:hello@example.com' },
    ],
    timeline: [
      { year: '2026', title: 'Built a personal docs hub', description: 'Centralized interview notes, engineering summaries, and reusable project patterns.' },
      { year: '2024', title: 'Led design system and tooling work', description: 'Worked on reusable components, monorepos, and collaboration workflows.' },
      { year: '2021', title: 'Scaled Vue 3 platforms', description: 'Focused on performance, authorization, information architecture, and delivery quality.' },
    ],
  },
}
