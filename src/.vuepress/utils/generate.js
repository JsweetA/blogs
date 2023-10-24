import fs from "fs";
import path from "path";

const { blog_name } = { blog_name: "posts" };
const rootPath = path.resolve() + "\\src";
const excludes = [".vuepress", "intro.md", "README.md", `${blog_name}`];
const bars = fs.readdirSync(rootPath).filter((i) => !excludes.includes(i));

export function getNavs() {
	// 只能用绝对路径
	const navs = [{ link: `/${blog_name}/`, text: `${blog_name}` }];

	for (let i of bars)
		navs.push({
			text: i,
			link: `/${i}/`,
		});

	return navs;
	// function generateTree(directory) {
	// 	return fs.readdirSync(directory).map((filename) => {
	// 		const fullPath = path.join(directory, filename);
	// 		const file = fs.statSync(fullPath);

	// 		if (file.isDirectory()) {
	// 			return {
	// 				text: filename,
	// 				prefix: filename + "/",
	// 				children: generateTree(fullPath),
	// 			};
	// 		} else {
	// 			return {
	// 				link: filename,
	// 				text: filename,
	// 			};
	// 		}
	// 	});
	// }
}
export function getSidebar() {
	const sidebar = {
		[`/${blog_name}/`]: fs.readdirSync(rootPath + `\\${blog_name}`),
	};
	for (let i of bars) {
		const fullPath = rootPath + "\\" + i;
		const subDirs = fs.readdirSync(fullPath);

		if (subDirs[0].includes(".")) {
			sidebar[`/${i}/`] = subDirs;
		} else {
			sidebar[`/${i}/`] = subDirs.map((i) => {
				return {
					text: `${i} ${fs.readdirSync(fullPath + "\\" + i).length}篇`,
					prefix: i + "/",
					children: "structure",
					collapsible: true,
				};
			});
		}
	}

	return sidebar;
}
