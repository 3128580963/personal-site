// ===== 示例内容：把这里的文字和图片换成你自己的 =====
// 图片来自 Unsplash（可免费商用）。换图时，替换下面各 image 字段的 URL 即可。

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const profile = {
  name: "李昊林",
  englishName: "LI HAOLIN",
  role: "室内设计师",
  tagline: "少即是多 —— 用简洁的几何与光，塑造有温度的空间",
  location: "北京 · 中国",
  intro:
    "我是一名室内设计师，信奉包豪斯「少即是多」的设计哲学。擅长用简洁的线条、克制的色彩与恰到好处的材质，为住宅与商业空间营造安静而有力量的生活体验。空间应当服务于人的感受，而非堆砌装饰。",
  email: "123456789@123.com",
  socials: [
    { label: "小红书", url: "https://www.xiaohongshu.com" },
    { label: "Behance", url: "https://www.behance.net" },
    { label: "Pinterest", url: "https://www.pinterest.com" },
  ],
};

export const heroImage = img("1618221195710-dd6b41faaea6", 1400);
export const aboutImage = img("1586023492125-27b2c045efd7", 1000);

export const skills = [
  { group: "空间设计", items: ["空间规划", "软装搭配", "灯光设计", "材料选型", "收纳系统"] },
  { group: "设计工具", items: ["AutoCAD", "SketchUp", "3ds Max", "Enscape", "Photoshop"] },
  { group: "设计语言", items: ["极简主义", "包豪斯", "现代主义", "侘寂风", "北欧风"] },
];

export const projects = [
  {
    name: "极简住宅 · 白盒子的生活",
    desc: "180㎡ 住宅改造，用克制的白与温润的木，让空间回归安静与秩序。",
    tags: ["住宅", "极简主义", "改造"],
    year: "2024",
    image: img("1600210492486-724fe5c67fb0", 1000),
  },
  {
    name: "现代主义客厅 · 光与留白",
    desc: "以大面积留白与线性灯光，营造通透而克制的现代起居空间。",
    tags: ["住宅", "现代主义", "灯光"],
    year: "2023",
    image: img("1616486338812-3dadae4b4ace", 1000),
  },
  {
    name: "侘寂风卧室 · 安静的力量",
    desc: "低饱和材质与柔和光影，打造让人慢下来的睡眠空间。",
    tags: ["卧室", "侘寂风", "软装"],
    year: "2023",
    image: img("1616594039964-ae9021a400a0", 1000),
  },
  {
    name: "木质温润 · 餐厨一体",
    desc: "以原木与石材的对话，构建温暖而有质感的餐厨空间。",
    tags: ["餐厨", "材质", "定制"],
    year: "2022",
    image: img("1524758631624-e2822e304c36", 1000),
  },
];

export const experience = [
  {
    period: "2021 — 至今",
    title: "高级室内设计师",
    org: "某建筑设计事务所",
    desc: "主导住宅与商业空间项目，从概念到落地全程把控，多个项目获设计媒体推荐。",
  },
  {
    period: "2017 — 2021",
    title: "室内设计师",
    org: "某室内设计公司",
    desc: "负责方案设计与软装深化，落地 40+ 个住宅及商业项目。",
  },
  {
    period: "2013 — 2017",
    title: "环境艺术设计 · 本科",
    org: "某美术学院",
    desc: "主修室内设计，获校优秀毕业设计奖。",
  },
];
