// 头像占位颜色与缩写工具
const gradients = [
  ["#4B7BEC", "#45AAF2"],
  ["#F368E0", "#C56CF0"],
  ["#26DE81", "#20BF6B"],
  ["#FD9644", "#F5AF19"],
  ["#A55EEA", "#8854D0"],
  ["#FF6B6B", "#EE5253"],
  ["#1DD1A1", "#10AC84"],
  ["#54A0FF", "#2E86DE"],
  ["#F8A5C2", "#F78FB3"],
  ["#778CA3", "#4B6584"],
];

const categoryMap = {
  tech: ["github", "juejin", "linuxdo", "hellogithub", "ifanr", "geekpark", "csdn", "producthunt"],
  game: ["starrail", "lol", "52pojie", "gameres", "genshin", "honkai", "ngabbs", "yystv"],
  media: ["netease-news", "sina", "sina-news", "thepaper", "nytimes", "weibo", "toutiao", "huxiu"],
  community: ["v2ex", "hostloc", "nodeseek", "newsmth", "douban-group", "douban-movie"],
  life: ["weatheralarm", "earthquake", "smzdm", "51cto", "coolapk", "weread"],
};

const categoryColorIndex = {
  tech: 0,
  game: 1,
  media: 2,
  community: 3,
  life: 4,
};

const getCategory = (name) => {
  const lower = name.toLowerCase();
  for (const [category, list] of Object.entries(categoryMap)) {
    if (list.includes(lower)) return category;
  }
  return "default";
};

const hashName = (name = "") => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const getAvatarGradient = (name = "") => {
  const category = getCategory(name);
  if (category !== "default") {
    const index = categoryColorIndex[category] ?? 0;
    return gradients[index];
  }
  const hash = hashName(name);
  return gradients[hash % gradients.length];
};

export const getAvatarInitials = (label = "", name = "") => {
  if (label) {
    const clean = label.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, "");
    if (clean.length >= 2) {
      return clean.slice(0, 2).toUpperCase();
    }
  }
  const fallback = name.replace(/[^a-zA-Z0-9]/g, "");
  if (fallback.length >= 2) {
    return fallback.slice(0, 2).toUpperCase();
  }
  return (fallback || "DH").toUpperCase();
};
