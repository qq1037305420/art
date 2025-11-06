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
    id: 'gaming',
    name: '游戏资料', icon: '/icons/category/pages.svg',
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
  // 游戏资料
  {
    id: 'poedb',
    title: '流放编年史',
    description: '流放之路(PoE)最全面的中文资料数据库，提供物品、技能、天赋、传奇装备等详细数据查询，包含赛季更新内容和游戏机制解析，是玩家必备的参考资料站。',
    shortDesc: '流放之路中文资料数据库。',
    url: 'https://poedb.tw/cn/',
    category: 'gaming',
    icon: 'icons/cloudflare-pages.webp',
  },
];

// 其余函数保持不变...
