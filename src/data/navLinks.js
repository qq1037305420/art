/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'data',
    name: '数据查询', icon: '/icons/category/data.svg',
  },
  {
    id: 'tools',
    name: '游戏辅助', icon: '/icons/category/tools.svg',
  },
  {
    id: 'trade',
    name: '交易工具', icon: '/icons/category/trade.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  // 数据查询      
      {
      id: 'poedb',
      title: '流放编年史',
      description: '流放之路(PoE)最全面的中文资料数据库，提供物品、技能、天赋、传奇装备等详细数据查询，包含赛季更新内容和游戏机制解析，是玩家必备的参考资料站。',
      shortDesc: '流放之路中文资料数据库。',
      url: 'https://poedb.tw/cn/',
      category: 'data',
      icon: '/icons/poedb.webp',
      },
      {
      id: 'mapsofexile',
      title: '地图分析工具',
      description: '地图详细分析工具，可按布局、密度、首领、命运卡等多个维度排序和分析，对制定刷图策略很有帮助。',
      shortDesc: '地图分析工具',
      url: 'https://mapsofexile.com/',
      category: 'data',
      icon: '/icons/mapsofexile.webp',
      },
      {
      id: 'pathofpathing',
      title: '异界天赋图',
      description: '路径规划工具，帮助玩家优化游戏中的移动路线。',
      shortDesc: '路径规划工具',
      url: 'https://pathofpathing.com/',
      category: 'data',
      icon: '/icons/category/data.svg',
      },
  // 游戏辅助      
      {
      id: 'pathofbuilding',
      title: 'BD模拟器',
      description: '强大的流放之路角色构建规划器，可以详细计算技能伤害、防御属性等各项数据，是构建角色必备工具。',
      shortDesc: 'PoE构建规划器',
      url: 'https://github.com/PathOfBuildingCommunity/PathOfBuilding/wiki/Installing-this-Fork',
      category: 'tools',
      icon: '/icons/pathofbuilding.webp',
      },
      {
      id: 'filterblade',
      title: '物品过滤',
      description: '强大的物品过滤器制作工具，可以自定义创建和编辑物品过滤器，帮助玩家更好地过滤地面物品显示。',
      shortDesc: '物品过滤器制作器',
      url: 'https://www.filterblade.xyz/',
      category: 'tools',
      icon: '/icons/filterblade.webp',
      },
      {
      id: 'poelab',
      title: '迷宫助手',
      description: '迷宫助手网站，提供每日迷宫地图和攻略，帮助玩家快速完成迷宫挑战。',
      shortDesc: '迷宫助手',
      url: 'https://www.poelab.com/',
      category: 'tools',
      icon: '/icons/poelab.webp',
      },
      {
      id: 'pathofregex',
      title: '词缀筛选工具',
      description: '正则表达式生成器，用于优化地图和物品词缀筛选，帮助玩家快速找到想要的词缀组合。',
      shortDesc: '词缀筛选工具',
      url: 'https://poe.re/',
      category: 'tools',
      icon: '/icons/pathofregex.webp',
      },
      {
      id: 'craftofexile',
      title: '装备制作模拟器',
      description: '强大的装备制作模拟器，适用于所有级别的制作需求，提供详细的制作概率和成本分析。',
      shortDesc: '装备制作模拟器',
      url: 'https://www.craftofexile.com/en/',
      category: 'tools',
      icon: '/icons/craftofexile.webp',
      },
      {
      id: 'blighthelper',
      title: '菌潮助手',
      description: '凋零地图助手，帮助玩家更好地规划凋零地图防守策略。',
      shortDesc: '凋零助手',
      url: 'https://blight.raelys.com/',
      category: 'tools',
      icon: '/icons/blighthelper.webp',
      },
      {
      id: 'voricicalc',
      title: '换色石计算器',
      description: 'Vorici幻色配方计算器，帮助玩家用最高效的方式获得需要的装备洞色。',
      shortDesc: '幻色计算器',
      url: 'https://siveran.github.io/calc.html',
      category: 'tools',
      icon: '/icons/voricicalc.webp',
      },
  // 交易工具      
      {
      id: 'pricefiltereditor',
      title: '国服物价榜',
      description: '流放之路(PoE)物价查询站。',
      shortDesc: '物价。',
      url: 'https://price.filtereditor.cn/',
      category: 'trade',
      icon: '/icons/category/trade.svg',
      },
      {
      id: 'poeninja',
      title: '忍者网',
      description: '基于游戏API数据的经济和构建概览网站，提供实时物价查询和流行构建分析。',
      shortDesc: '经济与构建分析站',
      url: 'https://poe.ninja/',
      category: 'trade',
      icon: '/icons/poeninja.webp',
      },
      {
      id: 'awakenedpoetrade',
      title: '交易助手',
      description: '先进的交易助手覆盖工具，提供快速物价查询和其他游戏辅助功能。',
      shortDesc: '交易助手工具',
      url: 'https://github.com/SnosMe/awakened-poe-trade',
      category: 'trade',
      icon: '/icons/awakenedpoetrade.webp',
      },
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
