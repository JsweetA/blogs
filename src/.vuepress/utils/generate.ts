import fs from "fs";
import path from "path";

export function getNavs() {
	const rootPath = path.resolve() + "\\src";
	const excludes = [".vuepress", "intro.md", "README.md"];
	const bars = fs.readdirSync(rootPath).filter((i) => !excludes.includes(i));
	// 只能用绝对路径
	const navs = [];
	function generateTree(directory) {
		return fs.readdirSync(directory).map((filename) => {
			const fullPath = path.join(directory, filename);
			const file = fs.statSync(fullPath);

			if (file.isDirectory()) {
				return {
					text: filename,
					prefix: filename + "/",
					children: generateTree(fullPath),
				};
			} else {
				return {
					link: filename,
					text: filename,
				};
			}
		});
	}
	for (let nav of bars)
		navs.push({
			text: nav,
			children: generateTree(rootPath + "\\" + nav),
		});
	console.log(navs);
	return navs;
}
export function getSidebar() {
	const rootPath = path.resolve() + "\\src";
	const excludes = [".vuepress", "intro.md", "README.md"];
	const bars = fs.readdirSync(rootPath).filter((i) => !excludes.includes(i));
	const icon = {};
	return bars.map((i) => {
		return {
			text: i,
			prefix: i,
			children: "structure",
			icon: icon[i] || "book",
		};
	});
	// return {};
}
