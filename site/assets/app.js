/* CLEC 双典 · 简介与大纲 — Vue 3 (global build, no build step) */
const { createApp, ref, computed } = Vue;

const books = [
  {
    id: 'shengjing',
    accent: 'warm',
    kind: '演讲体 · 金科玉律',
    title: '理财圣经',
    subtitle: 'CLEC 版 · 价值十亿元的投资讲座',
    author: 'CLEC James　·　AI 编辑 Peter',
    version: 'v3.4.1（2026 / 5 修订）',
    pages: 97,
    tagline: '富有是天赋，快乐是人权',
    shape: '金科玉律篇 · 8 条铁律 · 29 节 · 4 附录',
    intro: [
      '脱胎于 CLEC 投资理财频道每年一度的年度讲座——前身是讲了十多年的「价值一亿元投资讲座」，2026 年正式升级为「价值十亿元」。核心宣言只有一句话：富有是天赋，快乐是人权。',
      '全书以「金科玉律篇」展开，用 8 条理财铁律与 29 节内容，把 CLEC 投资哲学浓缩成一套可执行的纪律：只投纳斯达克 100 指数基金、任何时间买都对、永远不卖、善用质押远离保证金、远离噪音与诈骗、让复利与时间做朋友、顺势而为，并把财富当作可以代际传承的家族资产。',
      '书中以「佃农与地主」「老鼠笼」「火车头」等概念反复叩问读者：你愿做被劳工教育驯化一辈子、却始终舍不得伸手去拿那个本属于你的「富有天赋」的人，还是愿意觉醒、拿走资本主义早已摆在眼前的礼物？'
    ],
    outline: [
      { t: 'sec', n: 1, title: '富有是天赋' },
      { t: 'sec', n: 2, title: '快乐是人权' },
      { t: 'sec', n: 3, title: '跳出老鼠笼' },
      { t: 'rule', title: '理财铁律一 · 只投资指数基金' },
      { t: 'sec', n: 4, title: '200 年的铁证' },
      { t: 'sec', n: 5, title: '为什么是纳斯达克 100' },
      { t: 'sec', n: 6, title: '我们不是巴菲特' },
      { t: 'rule', title: '理财铁律二 · 任何时间买都对，任何时间卖都错' },
      { t: 'sec', n: 7, title: '随时买，不要等' },
      { t: 'sec', n: 8, title: '不卖才是师傅' },
      { t: 'sec', n: 9, title: '任何高点未来都是低点' },
      { t: 'rule', title: '理财铁律三 · 崩盘是你最好的朋友' },
      { t: 'sec', n: 10, title: '年轻人应该祈祷崩盘' },
      { t: 'sec', n: 11, title: '模拟最坏情况' },
      { t: 'sec', n: 12, title: '6 尺高的人与 2 尺深的水' },
      { t: 'rule', title: '理财铁律四 · 善用质押，远离保证金' },
      { t: 'sec', n: 13, title: '质押：永远不卖也能花钱' },
      { t: 'sec', n: 14, title: '保证金交易是毒药' },
      { t: 'sec', n: 15, title: '永远不缴资本利得税' },
      { t: 'rule', title: '理财铁律五 · 远离噪音与诈骗' },
      { t: 'sec', n: 16, title: '不要听专家的' },
      { t: 'sec', n: 17, title: '不要买的东西' },
      { t: 'sec', n: 18, title: '警惕诈骗' },
      { t: 'rule', title: '理财铁律六 · 物质与精神的平衡' },
      { t: 'sec', n: 19, title: '物质能量与精神能量' },
      { t: 'sec', n: 20, title: '赚钱是为了什么' },
      { t: 'rule', title: '理财铁律七 · 复利与时间的魔法' },
      { t: 'sec', n: 21, title: '每月 283 美元的亿万之路' },
      { t: 'sec', n: 22, title: '退休需要多少钱' },
      { t: 'sec', n: 23, title: '愈早开始愈好' },
      { t: 'rule', title: '理财铁律八 · 顺势而为' },
      { t: 'sec', n: 24, title: '转型利益：财富来自趋势' },
      { t: 'sec', n: 25, title: '与人类科技共存亡' },
      { t: 'sec', n: 26, title: '433 / 442 / 613 资产配置' },
      { t: 'rule', title: '理财终极篇 · 传承与使命' },
      { t: 'sec', n: 27, title: '免费赚最多' },
      { t: 'sec', n: 28, title: '教育下一代' },
      { t: 'sec', n: 29, title: '即刻行动' },
      { t: 'appx', title: '附录一 · 复利计算参考表' },
      { t: 'appx', title: '附录二 · 退休规划蓝图' },
      { t: 'appx', title: '附录三 · 全球纳斯达克 100 指数基金一览' },
      { t: 'appx', title: '附录四 · CLEC 投资哲学速查卡' }
    ]
  },
  {
    id: 'baodian',
    accent: 'ink',
    kind: '体系全书 · 六篇二十七章',
    title: 'CLEC 宝典',
    subtitle: 'SC 完整版 · 投资理财的哲学与实战',
    author: '布莱兹 Blaise　·　理念传承 CLEC James',
    version: 'V1.14.2（网络版，2026 / 8 / 14）',
    pages: 559,
    tagline: '富有是天赋，快乐是人权',
    shape: '六篇 · 27 章 · 8 实战附录',
    intro: [
      '由布莱兹系统整理 CLEC 频道数百部影片、讲座与文章而成，是目前最完整阐述 CLEC 投资哲学的一本书。全书以「富有是天赋，快乐是人权」为轴心，把原本散落的知识重构成一套可阅读、可实践的体系。',
      '内容分六篇推进：从资本主义真相、大印钞时代的降维打击等「觉醒」，到进场逻辑、原汁原味投资等「武器」，再到固若金汤的资产配置、自动导航系统等「架构」；继而以负债智慧、维持率防线、跨国与跨税务配置构筑「护城河」，辅以波动即祝福、资讯提炼等「心理」修炼，最终落回买回人生选择权、债留银行的传承等「人生」课题。',
      '书末附有 8 个实战策略附录（CLEC 主轴、乘丰领航、投资翻译官、布莱兹、Lynn、阿良、进阶配置与再平衡、借贷税务房产与退休）与读者行动清单，把哲学真正落到操作层面。'
    ],
    outline: [
      { t: 'part', title: '第一篇 · 觉醒', chapters: [
        { n: 1, title: '觉醒的开端' }, { n: 2, title: '资本主义的真相' },
        { n: 3, title: '大印钞时代的降维打击' }, { n: 4, title: '打破理财迷思' },
        { n: 5, title: '华尔街的骗局' }, { n: 6, title: '富有是天赋' }
      ]},
      { t: 'part', title: '第二篇 · 武器', chapters: [
        { n: 7, title: '进场逻辑' }, { n: 8, title: '原汁原味的投资' },
        { n: 9, title: '重新定义风险' }
      ]},
      { t: 'part', title: '第三篇 · 架构', chapters: [
        { n: 10, title: '杠杆耗损与 Beta 控管' }, { n: 11, title: '固若金汤的资产配置' },
        { n: 12, title: '资产的自动导航系统' }, { n: 13, title: '建立独立财商' }
      ]},
      { t: 'part', title: '第四篇 · 护城河', chapters: [
        { n: 14, title: '负债智慧' }, { n: 15, title: '让银行养你一辈子' },
        { n: 16, title: '维持率防线' }, { n: 17, title: '台湾投资人的本土护城河' },
        { n: 18, title: '跨国居住者的多区配置' }, { n: 19, title: '美国公民与绿卡的退休传承税务' },
        { n: 20, title: '对抗人性的护城河' }
      ]},
      { t: 'part', title: '第五篇 · 心理', chapters: [
        { n: 21, title: '波动是财富的祝福' }, { n: 22, title: '心理防线与存活哲学' },
        { n: 23, title: '资讯提炼心法' }
      ]},
      { t: 'part', title: '第六篇 · 人生', chapters: [
        { n: 24, title: '买回人生选择权' }, { n: 25, title: '扩大花钱的心量' },
        { n: 26, title: '债留银行的传承' }, { n: 27, title: '课题分离与独立思考' }
      ]},
      { t: 'closing', title: '附录与尾声', items: [
        '读者行动清单', '关于 CLEC / 关于布莱兹', '术语注释',
        '附录 1 · CLEC 主轴实战工具', '附录 2 · 乘丰领航实战策略',
        '附录 3 · 投资翻译官实战策略', '附录 4 · 布莱兹实战策略',
        '附录 5 · Lynn 实战策略', '附录 6 · 阿良的正二人生实战策略',
        '附录 7 · 进阶配置与再平衡战术', '附录 8 · 借贷税务房产与退休实务',
        '致谢 / 版更差异页'
      ]}
    ]
  }
];

createApp({
  setup() {
    const activeId = ref(books[0].id);
    const active = computed(() => books.find(b => b.id === activeId.value));
    const openParts = ref({ 0: true });

    const selectBook = (id) => { activeId.value = id; };
    const togglePart = (i) => { openParts.value[i] = !openParts.value[i]; };

    return { books, activeId, active, openParts, selectBook, togglePart };
  }
}).mount('#app');
