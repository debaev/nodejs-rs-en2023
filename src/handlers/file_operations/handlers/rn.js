import { rename } from "fs/promises";
import { resolve } from "path";

export default async function rn(currentDir, srcPath, destPath) {
	const filePath = resolve(currentDir, srcPath);
	const newFileName = resolve(currentDir, destPath);

	await rename(filePath, newFileName);
};
