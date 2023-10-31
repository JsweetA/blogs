import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
	hostname: "https://jsweeta.github.io/blogs",
	author: {
		name: "Jsweet",
		url: "https://github.com/JsweetA",
	},
	iconAssets: "fontawesome-with-brands",
	logo: "/logo.jpg",
	favicon: "./favicon.ico",

	repo: "JsweetA/blogs",
	repoId: "R_kgDOKkAldA",
	category: "Ideas",
	categoryId: "DIC_kwDOKkAldM4CaZ3C",

	// navbars
	navbar,

	// sidebar
	sidebar,

	displayFooter: true,

	blog: {
		description: "一个前端小白~",
		intro: "/intro.html",
		roundAvatar: true,

		// medias: {
		//   Baidu: "https://example.com",
		//   BiliBili: "https://example.com",
		//   Bitbucket: "https://example.com",
		//   Dingding: "https://example.com",
		//   Discord: "https://example.com",
		//   Dribbble: "https://example.com",
		//   Email: "mailto:info@example.com",
		//   Evernote: "https://example.com",
		//   Facebook: "https://example.com",
		//   Flipboard: "https://example.com",
		//   Gitee: "https://example.com",
		//   GitHub: "https://example.com",
		//   Gitlab: "https://example.com",
		//   Gmail: "mailto:info@example.com",
		//   Instagram: "https://example.com",
		//   Lark: "https://example.com",
		//   Lines: "https://example.com",
		//   Linkedin: "https://example.com",
		//   Pinterest: "https://example.com",
		//   Pocket: "https://example.com",
		//   QQ: "https://example.com",
		//   Qzone: "https://example.com",
		//   Reddit: "https://example.com",
		//   Rss: "https://example.com",
		//   Steam: "https://example.com",
		//   Twitter: "https://example.com",
		//   Wechat: "https://example.com",
		//   Weibo: "https://example.com",
		//   Whatsapp: "https://example.com",
		//   Youtube: "https://example.com",
		//   Zhihu: "https://example.com",
		//   MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
		// },
	},

	// page meta
	editLink: false,
	headerDepth: 4,
	plugins: {
		blog: {
			excerptLength: 10,
		},
		comment: {
			provider: "Giscus",
			repo: "JsweetA/blogs",
			repoId: "R_kgDOKkAldA",
			category: "Ideas",
			categoryId: "DIC_kwDOKkAldM4CaZ3C",
		},
		// all features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ["ts", "vue"],
			},
			revealjs: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},
	},
});
