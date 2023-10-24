import { defineUserConfig, viteBundler } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
	base: "/blogs/",
	// dest: "./dist",
	lang: "zh-CN",
	description: "JSweet的个人博客",
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
	bundler: viteBundler({
		viteOptions: {
			build: {
				minify: "terser",
				rollupOptions: {
					output: {
						chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
						entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
						assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
						// manualChunks(id) {
						// 	if (id.includes("node_modules")) {
						// 		// 让每个插件都打包成独立的文件
						// 		return id.toString().split("node_modules/")[1].split("/")[0].toString();
						// 	}
						// },
					},
				},
			},
		},
	}),
});
