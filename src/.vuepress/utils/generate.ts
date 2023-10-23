import fs from "fs";
import path from "path";

export function getNavs() {
	const rootPath = path.resolve() + "\\src\\" + "posts" + "\\";
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
			prefix: "/posts/" + nav + "/",
			children: generateTree(rootPath + "\\" + nav),
		});
	return navs;
}
