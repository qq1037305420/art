/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
  {
    id: 'gaming',
    name: '游戏资料', icon: '/icons/category/gaming.svg',
  },
];

/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //开源      
  {
    id: 'github',
    title: 'GitHub',
    description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
    shortDesc: '全球最大代码托管平台。',
    url: 'https://github.com/',
    category: 'opensource',
    icon: '/icons/github.webp',
  },
  // pages      
  {
    id: 'github-pages',
    title: 'GitHub Pages',
    description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
    shortDesc: 'Git 驱动的静态网站托管。',
    url: 'https://pages.github.com/',
    category: 'pages',
    icon: '/icons/github-pages.webp',
  },
  {
    id: 'cloudflare-pages',
    title: 'Cloudflare Pages',
    description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
    shortDesc: 'CDN 优化的前端部署平台。',
    url: 'https://pages.cloudflare.com/',
    category: 'pages',
    icon: '/icons/cloudflare-pages.webp',
  },
  {
    id: 'vercel',
    title: 'Vercel',
    description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
    shortDesc: 'Next.js 团队出品的部署平台。',
    url: 'https://vercel.com/',
    category: 'pages',
    icon: '/icons/vercel.webp',
  },
  // 游戏资料
  {
    id: 'poedb',
    title: '流放编年史',
    description: '流放之路(PoE)最全面的中文资料数据库，提供物品、技能、天赋、传奇装备等详细数据查询，包含赛季更新内容和游戏机制解析，是玩家必备的参考资料站。',
    shortDesc: '流放之路中文资料数据库。',
    url: 'https://poedb.tw/cn/',
    category: 'gaming',
    icon: '/icons/poedb.webp',
  },
];

// 其余函数保持不变...
