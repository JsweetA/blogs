import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
	base: "/blogs/",
	dest: "./dist",
	lang: "zh-CN",
	
	description: "JsweetA的个人博客",

	theme,
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
