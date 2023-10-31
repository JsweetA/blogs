import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { gitPlugin } from "@vuepress/plugin-git";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	base: "/blogs/",
	dest: "./dist",
	lang: "zh-CN",
	description: "JSweet的个人博客",
	theme,
		
	alias: {
		// 你可以在这里将别名定向到自己的组件
		// 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
		// "@theme-hope/modules/blog/components/InfoList": path.resolve(
		// 	__dirname,
		// 	"./components/personInfo.vue",
		// ),
	},
	plugins: [
		searchProPlugin({
			// 索引全部内容
			// indexContent: true,
			autoSuggestions: false,
			resultHistoryCount: 0,
			queryHistoryCount: 2,
			// autoSuggestions: false,
			// // 为分类和标签添加索引
			customFields: [
				{
					getter: (page) => page.frontmatter.category,
					formatter: "分类：$content",
				},
				{
					getter: (page) => page.frontmatter.tag,
					formatter: "标签：$content",
				},
			],
		}),

		gitPlugin({
			// 配置项
		}),
	],
});
