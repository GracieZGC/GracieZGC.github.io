export type GalleryItem =
	| {
			kind: "image";
			src: string;
			alt?: string;
	  }
	| {
			kind: "video";
			src: string;
			poster?: string;
	  };

export type PortfolioItem = {
	slug: string;
	title: string;
	subtitle: string;
	type: "product" | "visual";
	tags: string[];
	gallery: GalleryItem[];
	description: string;
	date?: string;
	focusPoints?: string[];
};

export const portfolioItems: PortfolioItem[] = [
	{
		slug: "cangxiang-2",
		title: "藏香",
		subtitle: "AIGC 非遗视觉实验",
		type: "visual",
		tags: ["AIGC", "非遗制图"],
		gallery: [{ kind: "image", src: "/portfolio/藏香-2.png", alt: "藏香" }],
		description: "探索传统香品与工艺叙事的视觉表达，用 AIGC 做风格与材质的一致性尝试。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "zhiwuran-xi",
		title: "植物染（洗）",
		subtitle: "AIGC 过程表现",
		type: "visual",
		tags: ["AIGC", "非遗制图", "过程表现"],
		gallery: [{ kind: "image", src: "/portfolio/植物染-洗.png", alt: "植物染（洗）" }],
		description: "围绕植物染的工序与场景，用 AIGC 把“动作/材料/质感”做成可复用的视觉语言。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "zhiwuran-ran",
		title: "植物染（染）",
		subtitle: "AIGC 过程表现",
		type: "visual",
		tags: ["AIGC", "非遗制图", "过程表现"],
		gallery: [{ kind: "image", src: "/portfolio/植物染-染.png", alt: "植物染（染）" }],
		description: "围绕植物染的工序与场景，用 AIGC 把“动作/材料/质感”做成可复用的视觉语言。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "zhiwuran-jin",
		title: "植物染（浸）",
		subtitle: "AIGC 过程表现",
		type: "visual",
		tags: ["AIGC", "非遗制图", "过程表现"],
		gallery: [{ kind: "image", src: "/portfolio/植物染-浸.png", alt: "植物染（浸）" }],
		description: "围绕植物染的工序与场景，用 AIGC 把“动作/材料/质感”做成可复用的视觉语言。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "zhiwuran-shai",
		title: "植物染（晒）",
		subtitle: "AIGC 过程表现",
		type: "visual",
		tags: ["AIGC", "非遗制图", "过程表现"],
		gallery: [{ kind: "image", src: "/portfolio/植物染-晒.png", alt: "植物染（晒）" }],
		description: "围绕植物染的工序与场景，用 AIGC 把“动作/材料/质感”做成可复用的视觉语言。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "jiama-yunnan",
		title: "甲马（云南）",
		subtitle: "AIGC 非遗视觉实验",
		type: "visual",
		tags: ["AIGC", "非遗制图"],
		gallery: [{ kind: "image", src: "/portfolio/甲马-云南.png", alt: "甲马（云南）" }],
		description: "用 AIGC 复现甲马的纹样结构与纸质印刷感，并探索不同风格化的可控区间。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "hasakezu",
		title: "哈萨克族",
		subtitle: "AIGC 民族文化视觉实验",
		type: "visual",
		tags: ["AIGC", "非遗制图"],
		gallery: [{ kind: "image", src: "/portfolio/哈萨克族.png", alt: "哈萨克族" }],
		description: "围绕服饰、图案与场景语义，用 AIGC 做人物/环境的一致性与叙事氛围实验。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
	{
		slug: "guangxi-zhuangjin",
		title: "广西壮锦",
		subtitle: "AIGC 纹样视觉实验",
		type: "visual",
		tags: ["AIGC", "非遗制图"],
		gallery: [{ kind: "image", src: "/portfolio/广西壮锦.png", alt: "广西壮锦" }],
		description: "聚焦壮锦的几何纹样与色彩秩序，用 AIGC 做可控的风格迁移与图案完整性实验。",
		focusPoints: ["用了什么 Prompt", "为什么选这个题材", "哪些地方效果好 / 不好"],
	},
];
